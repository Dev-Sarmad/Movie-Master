import { Genres } from "../hooks/useGenres";
import Movies from "./Movies";
interface Props{
  selectedGenre: Genres | null
}
function MoviesGrid({selectedGenre}:Props) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <Movies selectedGenre={selectedGenre} />
        </ul>
      </div>
    </div>
  );
}

export default MoviesGrid;
