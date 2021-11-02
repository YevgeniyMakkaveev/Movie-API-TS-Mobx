interface IMovieCard {
  id: number;
  release_date: string;
  title: string;
  tagline: string;
  genres: Genre[];
  vote_average: string;
  poster_path: string;
  overview: string;
}
interface Genre {
  id: number;
  name: string;
}
export default IMovieCard;
