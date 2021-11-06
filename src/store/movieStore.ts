import axios from "axios";
import { makeAutoObservable } from "mobx";
import { _key, _api, _search } from "../_const";

import IMovieCard from "../types/movieCard";
import IMoviePreview from "../types/moviePreview";

class DocumentVersionStore {
  moviesPopular: IMoviePreview[] | [] = [];

  pagePopular: number = 1;

  moviesSearch: IMoviePreview[] | [] = [];

  search: string = "";

  pageSearch: number = 1;

  favorite: IMoviePreview[] | [] = [];

  singleMovie: IMovieCard | null = null;

  error: string | null = null;

  isLoading = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setPopular(movies: IMoviePreview[] | undefined) {
    if (!movies) return;
    const res = movies.map((el) => ({
      ...el,
      isFavorite: this.isInFavorite(el.id),
    }));
    this.isLoading = false;
    this.moviesPopular = [...this.moviesPopular, ...res];
  }

  setSingleMovie(movie: IMovieCard | undefined) {
    if (!movie) return;
    this.isLoading = false;
    movie.isFavorite = this.isInFavorite(movie.id);
    this.singleMovie = movie;
  }

  singleMovieFavoriteToggle(status: boolean) {
    if (!this.singleMovie) return;
    this.singleMovie.isFavorite = status;
    this.toggleAllFavorite(this.singleMovie.id, status);
  }

  setSearch(movies: IMoviePreview[] | undefined) {
    if (!movies) return;
    const res = movies.map((el) => ({
      ...el,
      isFavorite: this.isInFavorite(el.id),
    }));
    this.isLoading = false;
    this.moviesSearch = [...this.moviesSearch, ...res];
  }

  toggleFavorite(movie: IMoviePreview, favorite: boolean) {
    movie.isFavorite = favorite;
    this.setFavorite(movie, favorite);
    return movie;
  }

  setFavorite(movie: IMoviePreview, status: boolean) {
    const { favorite } = this;
    if (status) {
      const res: IMoviePreview[] = [...favorite, movie];
      this.favorite = res;
    } else if (!status) {
      const res = favorite.filter((el) => el.id !== movie.id);
      this.favorite = res;
    }
    localStorage.setItem("movie-api-from-YM", JSON.stringify(this.favorite));
  }

  getFavorite() {
    const res = localStorage.getItem("movie-api-from-YM");
    if (res) this.favorite = JSON.parse(res);
  }

  toggleAllFavorite(id: number, status: boolean) {
    const { moviesSearch, moviesPopular } = this;
    if (moviesSearch.some((el) => el.id === id))
      this.searchToggleFavorite(id, status);
    if (moviesPopular.some((el) => el.id === id))
      this.popularToggleFavorite(id, status);
  }

  findIndex(arr: IMoviePreview[], id: number) {
    const index = arr.findIndex((el) => el.id === id);
    return index;
  }

  isInFavorite(id: number) {
    return this.favorite.some((el) => el.id === id);
  }

  popularToggleFavorite(id: number, favorite: boolean) {
    const { moviesPopular } = this;
    const index = this.findIndex(moviesPopular, id);
    const res = this.toggleFavorite(moviesPopular[index], favorite);
    this.moviesPopular[index] = res;
  }
  searchToggleFavorite(id: number, favorite: boolean) {
    const { moviesSearch } = this;
    const index = this.findIndex(moviesSearch, id);
    const res = this.toggleFavorite(moviesSearch[index], favorite);
    this.moviesSearch[index] = res;
  }

  resetSearchPages() {
    this.pageSearch = 1;
  }

  getMorePopular() {
    this.pagePopular++;
    this.fetchPopular(`${this.pagePopular}`);
  }
  getMoreSearch() {
    this.pageSearch++;
    this.fetchSearch(this.search, `${this.pageSearch}`);
  }

  setError = (error: string) => {
    this.error = error;
  };

  fetchPopular = async (page: string = "1") => {
    this.isLoading = true;
    axios
      .get(`${_api}/popular?api_key=${_key}&language=en-US&page=${page}`)
      .then((response) => this.setPopular(response.data.results))
      .catch((error) => {
        this.setError(error.messsage);
      });
  };

  fetchSearch = async (name: string, id: string = "1") => {
    this.isLoading = true;
    this.search = name;
    axios
      .get(`${_search}api_key=${_key}&query=${name}&page=${id}`)
      .then((response) => this.setSearch(response.data.results))
      .catch((error) => {
        this.setError(error.messsage);
      });
  };

  fetchSingleMovie = async (id: string) => {
    this.isLoading = true;
    axios
      .get(`${_api}/${id}?api_key=${_key}&language=en-US&page=1`)
      .then((response) => this.setSingleMovie(response.data))
      .catch((error) => {
        this.setError(error.messsage);
      });
  };
}
export default new DocumentVersionStore();
