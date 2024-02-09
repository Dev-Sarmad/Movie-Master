import logo from "../assets/react.svg";
import Search from "./Search";

function Navbar() {
  return (
    <>
      <nav className="bg-[#1f2937] p-3 flex justify-between">
        <img src={logo} alt="" />
        <Search />
      </nav>
    </>
  );
}

export default Navbar;
