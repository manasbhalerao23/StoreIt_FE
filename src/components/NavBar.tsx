

import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../icons/logo";

function Navbar() {
  const [menubarVisibility, setMenubarVisibility] = useState(false);

  return (
    <nav className="z-50 fixed top-0 left-0 w-full px-4 md:px-10 py-5 bg-gray-500/80 backdrop-blur-lg text-white font-primary font-medium">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex gap-3 items-center">
          <Logo />
          <Link
            to="/"
            className="text-2xl hover:scale-105 transition-all duration-200"
          >
            StoreIt
          </Link>
        </div>

        {/* Buttons Section */}
        <div className="flex text-md justify-center items-center gap-5">
          {localStorage.getItem("isLoggedIn") ? (
            <Link
              to="/brain"
              className="hidden md:block bg-primary hover:bg-primary-dark px-4 py-2 rounded-full"
            >
              Go to my collection
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden md:block text-gray-200 hover:text-white transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hidden md:block bg-primary hover:bg-primary-dark px-4 py-2 rounded-full"
              >
                Signup
              </Link>
            </>
          )}

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMenubarVisibility(!menubarVisibility)}
          >
            <AlignJustify />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`mt-3 flex-col justify-center items-start gap-5 text-gray-200 transition-all md:hidden ${
          menubarVisibility ? "flex" : "hidden"
        }`}
      >
        {localStorage.getItem("isLoggedIn") ? (
          <Link to="/brain" className="hover:text-white">
            Go to my collection
          </Link>
        ) : (
          <>
            <Link to="/login" className="hover:text-white">
              Login
            </Link>
            <Link to="/signup" className="hover:text-white">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
