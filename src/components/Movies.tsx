import { Genres } from "../hooks/useGenres";
import useMovies from "../hooks/useMovies";

interface Props{
  selectedGenre: Genres |null
}
function Movies({selectedGenre}:Props) {
  const { data } = useMovies(selectedGenre);

  return (
    <>
      {data.map((movie) => (
        <li key={movie.id} className="cursor-pointer md:w-[300px]">
          <img
            className="w-full rounded-2xl object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
          <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 text-center">
            {movie.title}
          </h3>
        </li>
      ))}
    </>
  );
}

export default Movies;
