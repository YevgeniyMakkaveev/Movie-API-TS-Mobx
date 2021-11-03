import axios from "axios";
import { makeAutoObservable} from "mobx";
import { _key, _api, _search } from "../_const";

import IMovieCard from "../types/movieCard";
import IMoviePreview from "../types/moviePreview";

class DocumentVersionStore {
  moviesPopular: IMoviePreview[] | [] = [];

  pagePopular: number = 1;

  moviesSearch: IMoviePreview[] | [] = [];

  search: string = "";

  pageSearch: number = 1;

  singleMovie: IMovieCard | null = null;

  error: string | null = null;

  isLoading = false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setPopular(movies: IMoviePreview[] | undefined) {
    if (!movies) return;
    console.log(movies);
    this.isLoading = false;
    this.moviesPopular = [...this.moviesPopular, ...movies];
  }

  setSingleMovie(movie: IMovieCard | undefined) {
    if (!movie) return;
    this.isLoading = false;
    this.singleMovie = movie;
  }
  setSearch(movies: IMoviePreview[] | undefined) {
    if (!movies) return;
    console.log(movies);
    this.isLoading = false;
    this.moviesSearch = [...this.moviesSearch, ...movies];
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
