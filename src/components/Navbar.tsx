import logo from "../assets/react.svg";
import Search from "./Search";

function Navbar() {
  return (
    <>
      <nav className="bg-[#151515] p-3 flex justify-around">
        <img src={logo} alt="" />
        <Search />
      </nav>
    </>
  );
}

export default Navbar;
