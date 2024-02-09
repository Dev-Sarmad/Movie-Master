import useGenres from "../hooks/useGenres";

function Sidebar() {
  const { genres } = useGenres();
  return (
    <div className="bg-gray-500 text-white">
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </div>
  );
}

export default Sidebar;
