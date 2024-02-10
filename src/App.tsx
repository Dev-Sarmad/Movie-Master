import { useState } from "react";
import MoviesGrid from "./components/MoviesGrid";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Genres } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedRelevance, setSelectedRelevance] = useState<string | null>("");
  return (
    <>
      <Navbar />
      <div className="flex items-center">
        <div className=" w-[300px] md:block sm:hidden">
          <Sidebar onSlectGenre={(genre) => setSelectedGenre(genre)} />
        </div>
        <div className="w-full ">
          <SortSelector
            onSelectRelevance={(relevance) => setSelectedRelevance(relevance)}
          />
          <MoviesGrid
            selectedGenre={selectedGenre}
            selectedRelevance={selectedRelevance}
          />
        </div>
      </div>
    </>
  );
}

export default App;
