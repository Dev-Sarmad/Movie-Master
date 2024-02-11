import useData from "./useData";
import { Movie } from "./useMovies";

const useSearch = (
  query: string,

) =>
  useData<Movie>(
    `/search/movie`,
    {
      params: {
        query: query,
        
      },
    },
    [query]
  );
export default useSearch;
