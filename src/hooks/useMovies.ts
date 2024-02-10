import useData from "./useData";
import { Genres } from "./useGenres";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}
const useMovies = (
  selectedGenre: Genres | null,
  selectedRelevance: string | null
) =>
  useData<Movie>(
    "/discover/movie",
    {
      params: { with_genres: selectedGenre?.id, sort_by: selectedRelevance },
    },
    [selectedGenre?.id, selectedRelevance]
  );
export default useMovies;
