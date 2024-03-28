import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container mx-auto lg:px-20 lg:py-8">
      <div className="navbar bg-base-100 sticky z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#23BE0A] border rounded-lg p-4 font-semibold border-[#23BE0A]"
                    : ""
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/listedBooks"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#23BE0A] border rounded-lg p-4 font-semibold border-[#23BE0A]"
                    : ""
                }
              >
                Listed Books
              </NavLink>

              <NavLink
                to="/barChart"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#23BE0A] border rounded-lg p-4 font-semibold border-[#23BE0A]"
                    : ""
                }
              >
                Pages to Read
              </NavLink>

              <NavLink
              to="/feedback"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border rounded-lg p-4 font-semibold border-[#23BE0A]"
                  : ""
              }
            >
              Feedback
            </NavLink>

            <NavLink
              to="/subscribe"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border rounded-lg p-4 font-semibold border-[#23BE0A]"
                  : ""
              }
            >
              Subscribe
            </NavLink>
            </ul>
          </div>
          <a className=" lg:text-3xl font-bold ">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-8">
          <ul className="menu menu-horizontal px-1 gap-8 justify-center items-center ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border rounded-lg p-4 font-semibold border-[#23BE0A]"
                  : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border rounded-lg p-4 font-semibold border-[#23BE0A]"
                  : ""
              }
            >
              Listed Books
            </NavLink>

            <NavLink
              to="/barChart"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border rounded-lg p-4 font-semibold border-[#23BE0A]"
                  : ""
              }
            >
              Pages to Read
            </NavLink>

            <NavLink
              to="/feedback"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border rounded-lg p-4 font-semibold border-[#23BE0A]"
                  : ""
              }
            >
              Feedback
            </NavLink>

            <NavLink
              to="/subscribe"
              className={({ isActive }) =>
                isActive
                  ? "text-[#23BE0A] border rounded-lg p-4 font-semibold border-[#23BE0A]"
                  : ""
              }
            >
              Subscribe
            </NavLink>


          </ul>
        </div>
        <div className="navbar-end lg:gap-8">
          <a className="btn bg-[#23BE0A] text-white font-semibold text-lg">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white font-semibold text-lg">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
