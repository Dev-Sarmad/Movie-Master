import useData from "./useData";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}
const useMovies = () => useData<Movie>("/discover/movie");
export default useMovies;
