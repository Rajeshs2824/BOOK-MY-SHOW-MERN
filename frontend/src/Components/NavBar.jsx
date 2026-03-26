import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, XIcon } from "lucide-react";
export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      <Link>
        <img src={assets.logo} className="w-36 h-auto" alt="" to={"/"} />
      </Link>
      <div className="flex gap-5 bg-gray-900 py-3 px-5  color-red rounded-md">
        <XIcon className="md:hidden abosolute top-6 right-6 w-6 h-6 cursor-pointer" />
        <Link to={"/"}>Home</Link>
        <Link to={"/movies"}>Movies</Link>
        <Link to={""}>Theaters</Link>
        <Link>Releases</Link>
        <Link to={"/favorite"}>Favorites</Link>
      </div>
      <div className="flex items-center gap-8">
        <SearchIcon className="max-md:hidden w-6 h-6 cursor-pointer " />
        <button className=" sm:px-7 sm:py-2 py-1 border-outline-none rounded-md bg-red-700 px-4 text-center font-medium cursor-pointer">
          Log In
        </button>
      </div>

      <MenuIcon className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer" />
    </div>
  );
};
