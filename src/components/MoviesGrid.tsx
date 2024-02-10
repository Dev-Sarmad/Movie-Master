import { Genres } from "../hooks/useGenres";
import Movies from "./Movies";
interface Props {
  selectedGenre: Genres | null;
  selectedRelevance: string | null;
}
function MoviesGrid({ selectedGenre, selectedRelevance }: Props) {
  return (
    <div className="bg-[#151515] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-white md:text-5xl  text-2xl font-extrabold">
          {selectedGenre ? `${selectedGenre.name} Movies` : "New and Trending"}
        </h1>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <Movies
            selectedGenre={selectedGenre}
            selectedRelevance={selectedRelevance}
          />
        </ul>
      </div>
    </div>
  );
}

export default MoviesGrid;
