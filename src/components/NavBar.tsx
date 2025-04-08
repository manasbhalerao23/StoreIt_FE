import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../icons/logo";

function Navbar() {
  const [menubarVisibility, setMenubarVisibility] = useState(false);

  return (
    <nav className="z-20 fixed w-full text-white font-primary font-medium max-w-sm md:max-w-2xl lg:max-w-7xl mx-auto my-2 py-5 px-4 md:px-10 rounded-lg left-1/2 -translate-x-1/2 bg-gray-500/80 backdrop-blur-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
        <Logo/>
        <Link
          to={"/"}
          className="text-2xl hover:scale-105 transition-all duration-200"
        >
          Second Brain
        </Link>
        </div>
        
        <div className="flex text-md justify-center items-center gap-5">
          {localStorage.getItem("isLoggedIn") ? (
            <>
              <button>
                <Link
                  to={"/brain"}
                  className="hidden md:block bg-primary hover:bg-primary-dark px-4 py-2 rounded-full"
                >
                  Go to brain
                </Link>
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="hidden md:block text-gray-200 hover:text-white transition-all duration-200"
              >
                Login
              </Link>
              <button>
                <Link
                  to={"/signup"}
                  className="hidden md:block bg-primary hover:bg-primary-dark px-4 py-2 rounded-full"
                >
                  Signup
                </Link>
              </button>
            </>
          )}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMenubarVisibility(!menubarVisibility)}
          >
            <AlignJustify />
          </button>
        </div>
      </div>
      <div
        className={`my-5 flex-col justify-center items-start gap-5 text-gray-200 transition-all md:hidden  ${
          menubarVisibility ? "flex" : "hidden"
        }`}
      >
        {localStorage.getItem("isLoggedIn") ? (
          <>
            <Link to={"/brain"} className="hover:text-white">
              Go to brain
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"} className="hover:text-white">
              Login
            </Link>
            <Link to={"/signup"} className="hover:text-white">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;