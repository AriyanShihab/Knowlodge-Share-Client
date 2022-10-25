import Blog from "../Components/Pages/Blog";
import Courses from "../Components/Pages/Courses";
import FAQ from "../Components/Pages/FAQ";

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
        path: "/courses",
        element: <Courses></Courses>,
      },
    ],
  },
]);

export default router;
