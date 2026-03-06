import Button from "flyonui/components/button";
import React from "react";
import { GrBlog } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const isauthenticated = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("role") === "admin";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar bg-amber-300 border-b border-gray-200  z-50 ">
      <div className="mx-auto w-full max-w-8xl px-4 py-2 sm:px-6 lg:flex lg:items-center lg:gap-2 lg:px-8 ">
        <div className="navbar-start items-center justify-between max-lg:w-full">
          <Link 
            className="text-orange-600 flex items-center gap-3 text-xl font-bold"
            to={"/"}
          >
            <GrBlog className="3xl" />
            Bloggify
          </Link>
          <div className="flex items-center lg:hidden">
            {/* <span className="icon-[tabler--search] hover:text-primary text-base-content active:text-primary me-6 size-5 cursor-pointer" /> */}
            <button
              type="button"
              className="collapse-toggle btn btn-square btn-outline border-1 border-orange-600 hover:bg-orange-600 hover:text-white active:bg-orange-600 active:text-white"
              data-collapse="#navbar-block-5"
              aria-controls="navbar-block-5"
              aria-label="Toggle navigation"
            >
              <span className="icon-[tabler--menu-2] collapse-open:hidden size-5.5s" />
              <span className="icon-[tabler--x] collapse-open:block hidden size-5.5" />
            </button>
          </div>
        </div>
        <div
          id="navbar-block-5"
          className="lg:navbar-end transition-height collapse hidden grow overflow-hidden duration-300 lg:flex"
        >
          <div className="text-base-content flex gap-6 text-base font-medium max-lg:mt-4 max-lg:flex-col lg:items-center lg:gap-10">
            <Link to="/" className="text-orange-600 hover:transform hover:-translate-y-0.5 transition-all duration-300">
              Home
            </Link>
            {isAdmin && (
              <Link
                to="/admin-panel"
                className="text-orange-600 hover:transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Admin Panel
              </Link>
            )}
            {isauthenticated ? (
              <>
                <Link
                  to="/create-blog"
                  className="text-orange-600 hover:transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Create Blog
                </Link>
                <button
                  className="text-orange-600 transition-all duration-300 px-5 py-2.5
                  border-1 border-orange-600 hover:bg-orange-600 hover:text-white active:bg-orange-600 active:text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>                
              </>
            ):(
              <>
                <Link
                  to="/login"
                  className="text-orange-600 hover:transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-orange-600 hover:transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Register
                </Link>
              </>
            )}

            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
