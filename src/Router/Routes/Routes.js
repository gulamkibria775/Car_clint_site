import Main from "../../Layout/Main";

import Notfound from "../../Pages/Consultan/Notfound/Notfound";
import Home from "../../Pages/Home/Home/Home";
import Addservice from "../../Pages/Home/Services/Addservice/Addservice";
import Blog from "../../Pages/Home/Services/Blog/Blog";
import Comment from "../../Pages/Home/Services/Comment/Comment";
import Myreview from "../../Pages/Home/Services/Myreview/Myreview";
import ServiceDetail from "../../Pages/Home/Services/ServiceDetail";
import ServicesAll from "../../Pages/Home/Services/ServicesAll";
import Update from "../../Pages/Home/Services/Update/Update";
import Login from "../../Pages/Login/Login";

import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
     
      {
        path: "/services1/:id",
        element: <Comment></Comment>,
        loader: ({ params }) =>
          fetch(`https://server-site-3.vercel.app/services/${params.id}`),
      },
      {
        path: "/service/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(`https://server-site-3.vercel.app/services/${params.id}`),
      },
    

      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <Addservice></Addservice>
          </PrivateRoute>
        ),
        loader: () => fetch("https://server-site-3.vercel.app/services"),
      },

      {
        path: "/serviecsAll",
        element: <ServicesAll></ServicesAll>,
        loader: () => fetch("https://server-site-3.vercel.app/services"),
      },
      {
        path: "/myreview",
        element: <Myreview></Myreview>,
        loader: () => fetch("https://server-site-3.vercel.app/services"),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://server-site-3.vercel.app/services/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <Notfound></Notfound>,
      },
    ],
  },
]);

export default router;
