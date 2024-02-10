import useGenres, { Genres } from "../hooks/useGenres";
interface Props {
  onSlectGenre: (genre: Genres) => void;
}
function Sidebar({ onSlectGenre }: Props) {
  const { genres } = useGenres();
  return (
    <div>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col z-0 ">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#151515] px-6 text-white">
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="-mx-2 space-y-1 mt-14">
              <h1 className="text-white md:text-5xl  text-2xl font-extrabold">
                Genres
              </h1>
              {genres.map((genre) => (
                <li
                  key={genre.id}
                  onClick={() => onSlectGenre(genre)}
                  className="font-bold cursor-pointer"
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
