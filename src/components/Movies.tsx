import { Genres } from "../hooks/useGenres";
import useMovies from "../hooks/useMovies";

interface Props {
  selectedGenre: Genres | null;
  selectedRelevance: string | null;
}
function Movies({ selectedGenre, selectedRelevance }: Props) {
  const { data } = useMovies(selectedGenre, selectedRelevance);

  return (
    <>
      {data.map((movie) => (
        <li key={movie.id} className="cursor-pointer md:w-[300px]  p-4">
          <img
            className="w-full rounded-2xl object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
