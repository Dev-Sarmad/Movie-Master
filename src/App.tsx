import MoviesGrid from "./components/MoviesGrid";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex items-center">
        <div className=" w-[300px] md:block sm:hidden">
          <Sidebar />
        </div>
        <div className="w-full bg-green-500">
          <MoviesGrid />
        </div>
      </div>
    </>
  );
}

export default App;
