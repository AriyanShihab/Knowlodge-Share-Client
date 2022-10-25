import Blog from "../Components/Pages/Blog";
import CourseDetails from "../Components/Pages/CourseDetails";
import Courses from "../Components/Pages/Courses";
import FAQ from "../Components/Pages/FAQ";
import Login from "../Components/Pages/Login";
import SignUp from "../Components/Pages/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Components/Pages/Home");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch(
            `https://learning-platform-server-side-ariyanshihab.vercel.app/courses`
          ),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => {
          return fetch(
            `https://learning-platform-server-side-ariyanshihab.vercel.app/courses/${params.id}`
          );
        },
      },
    ],
  },
]);

export default router;
