import { useState } from "react";
import MoviesGrid from "./components/MoviesGrid";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Genres } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  return (
    <>
      <Navbar />
      <div className="flex items-center">
        <div className=" w-[300px] md:block sm:hidden">
          <Sidebar onSlectGenre={(genre) => setSelectedGenre(genre)} />
        </div>
        <div className="w-full bg-green-500">
          <MoviesGrid selectedGenre={selectedGenre} />
        </div>
      </div>
    </>
  );
}

export default App;
