import React, { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import ReactTooltip from "react-tooltip";
import { UserContext } from "../Context/AuthContext";
import dummyUser from "./dummyUser.jpg";

const Navber = () => {
  const [theme, setTheme] = useState(true);

  const { signout, user } = useContext(UserContext);
  const logout = () => {
    signout()
      .then(() => {
        toast.warning("logged out", { autoClose: 700 });
      })
      .catch((err) => {
        toast.error(err.message, { autoClose: 800 });
      });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" bg-white shadow-2xl">
      <div className=" px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between ">
          <NavLink
            to="/"
            aria-label="knoledge share"
            title="knoledge share"
            className="inline-flex items-center"
            end
            style={({ isActive }) => {
              return { color: isActive ? "#f66962" : "#111827" };
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f66962"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#f66962"
              class="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>

            <span className="ml-2 text-xl font-bold tracking-wide text-[#f66962]">
              Knowledge Share
            </span>
          </NavLink>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <p onClick={() => setTheme(!theme)}>
                {theme ? <FaMoon></FaMoon> : <FaSun></FaSun>}
              </p>
            </li>
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                end
                style={({ isActive }) => {
                  return { color: isActive ? "#f66962" : "#111827" };
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="blog"
                title="blog"
                className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                end
                style={({ isActive }) => {
                  return { color: isActive ? "#f66962" : "#111827" };
                }}
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                aria-label="FAQ"
                title="FAQ"
                className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                end
                style={({ isActive }) => {
                  return { color: isActive ? "#f66962" : "#111827" };
                }}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                aria-label="Courses"
                title="Courses"
                className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                end
                style={({ isActive }) => {
                  return { color: isActive ? "#f66962" : "#111827" };
                }}
              >
                Courses
              </NavLink>
            </li>
            {user && user.uid ? (
              <>
                <li>
                  <button
                    onClick={logout}
                    className="font-medium tracking-wide px-3 py-2 rounded bg-[#f66962] text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Log Out
                  </button>
                </li>
                <li></li>

                <li>
                  <div data-tip="msg to show" data-for="toolTip1">
                    <img
                      className="h-[30px] w-[30px] rounded-[50%] object-cover"
                      src={user.photoURL ? user.photoURL : dummyUser}
                      alt=""
                    />
                  </div>
                  <ReactTooltip place="bottom, center" id="toolTip1">
                    {user.displayName}
                  </ReactTooltip>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/login"
                    aria-label="Login"
                    title="Login"
                    className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    end
                    style={({ isActive }) => {
                      return { color: isActive ? "#f66962" : "#111827" };
                    }}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signup"
                    aria-label="signup"
                    title="signup"
                    className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    end
                    style={({ isActive }) => {
                      return { color: isActive ? "#f66962" : "#111827" };
                    }}
                  >
                    Sign Up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-slate-100  border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#f66962"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="#f66962"
                          class="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                          />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-[#f66962] ">
                          Knowladge Share
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-[#f66962]" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className=" space-y-6">
                      <li>
                        <p onClick={() => setTheme(!theme)}>
                          {theme ? <FaMoon></FaMoon> : <FaSun></FaSun>}
                        </p>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          end
                          style={({ isActive }) => {
                            return { color: isActive ? "#f66962" : "#111827" };
                          }}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="blog"
                          title="blog"
                          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          end
                          style={({ isActive }) => {
                            return { color: isActive ? "#f66962" : "#111827" };
                          }}
                        >
                          Blog
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/faq"
                          aria-label="FAQ"
                          title="FAQ"
                          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          end
                          style={({ isActive }) => {
                            return { color: isActive ? "#f66962" : "#111827" };
                          }}
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Courses"
                          title="Courses"
                          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          end
                          style={({ isActive }) => {
                            return { color: isActive ? "#f66962" : "#111827" };
                          }}
                        >
                          Courses
                        </NavLink>
                      </li>
                      {user && user.uid ? (
                        <>
                          <li>
                            <button
                              onClick={logout}
                              className="font-medium tracking-wide px-3 py-2 rounded bg-[#f66962] text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Log Out
                            </button>
                          </li>
                          <li></li>

                          <li>
                            <div data-tip="msg to show" data-for="toolTip1">
                              <img
                                className="h-[30px] w-[30px] rounded-[50%] object-cover"
                                src={user.photoURL ? user.photoURL : dummyUser}
                                alt=""
                              />
                            </div>
                            <ReactTooltip place="bottom, center" id="toolTip1">
                              {user.displayName}
                            </ReactTooltip>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <NavLink
                              to="/login"
                              aria-label="Login"
                              title="Login"
                              className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              end
                              style={({ isActive }) => {
                                return {
                                  color: isActive ? "#f66962" : "#111827",
                                };
                              }}
                            >
                              Login
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/signup"
                              aria-label="signup"
                              title="signup"
                              className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              end
                              style={({ isActive }) => {
                                return {
                                  color: isActive ? "#f66962" : "#111827",
                                };
                              }}
                            >
                              Sign Up
                            </NavLink>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
