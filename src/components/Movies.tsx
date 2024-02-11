import { Genres } from "../hooks/useGenres";
import useMovies from "../hooks/useMovies";
import Logo from "../assets/react.svg";
import useSearch from "../hooks/useSearch";

interface Props {
  selectedGenre: Genres | null;
  selectedRelevance: string | null;
  search: string;
}
function Movies({ selectedGenre, selectedRelevance, search }: Props) {
  const { data: moviesFromGenreSort } = useMovies(
    selectedGenre,
    selectedRelevance
  );
  const { data: searchResults } = useSearch(search);
  const allMovies = search ? searchResults : moviesFromGenreSort;
  return (
    <>
      {allMovies.map((movie) => (
        <li key={movie.id} className="cursor-pointer md:w-[300px]  p-4">
          <img
            className="w-full rounded-2xl object-cover"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : Logo
            }
            alt=""
            loading="lazy"
          />
          <h3 className="mt-6  font-semibold leading-8 tracking-tight  text-center text-white md:text-3xl">
            {movie.title}
          </h3>
        </li>
      ))}
    </>
  );
}

export default Movies;
