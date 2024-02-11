import logo from "../assets/react.svg";
import Search from "./Search";
interface Props{
  onSearch : (search:string) => void
}
function Navbar({onSearch}:Props) {
  return (
    <>
      <nav className="bg-[#151515] p-3 flex justify-around">
        <img src={logo} alt="" />
        <Search onSearch={onSearch} />
      </nav>
    </>
  );
}

export default Navbar;
