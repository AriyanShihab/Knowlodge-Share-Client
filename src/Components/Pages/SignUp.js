import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { userContext } from "../../Context/AuthContext";

const SignUp = () => {
  const {
    signUpwithEmailPassword,
    updateUserProfile,
    singUpwithGooglePopup,
    signupWithGithub,
  } = useContext(userContext);

  // form submit
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    signUpwithEmailPassword(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User Created Successfully", { autoClose: 700 });
      })
      .then(() => {
        updateUserProfile(fullName, photoUrl);
        toast.success("Profile update Successfully", { autoClose: 700 });
      });
  };

  // google popup handeler
  const googlePopupLogin = () => {
    singUpwithGooglePopup()
      .then((result) => {
        console.log(result.user);
        toast.success("sigin up using google complite", { autoClose: 700 });
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 3000 });
      });
  };
  // github popup login
  const githubPopupLogin = () => {
    signupWithGithub()
      .then((result) => {
        console.log(result.user);
        toast.success("sigin up using google complite", { autoClose: 700 });
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 3000 });
      });
  };

  return (
    <div className="bg-slate-900">
      <section className=" bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-[#f66962]">
                Create and account
              </h1>
              <form
                onSubmit={(e) => handelSubmit(e)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="userNamel"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="userName"
                    name="fullName"
                    id="userName"
                    className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Full Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Photo Url
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="something.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium  text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="    sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-slate-900 font-bold  rounded-lg text-sm px-5 py-2.5 text-center bg-[#f66962] "
                >
                  Create an account
                </button>

                <div className="flex items-center pt-4 space-x-1">
                  <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                  <p className="px-3 text-sm text-gray-400">
                    Login with social accounts
                  </p>
                  <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={googlePopupLogin}
                    aria-label="Log in with Google"
                    className="p-3 rounded-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-[#f66962]"
                    >
                      <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                  </button>

                  <button
                    onClick={githubPopupLogin}
                    aria-label="Log in with GitHub"
                    className="p-3 rounded-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-[#f66962]"
                    >
                      <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-sm font-light  text-gray-50">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline text-primary-500 text-red-400"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
