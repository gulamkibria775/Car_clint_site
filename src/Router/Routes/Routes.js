import Main from "../../Layout/Main";
 import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Addservice from "../../Pages/Home/Services/Addservice/Addservice";
import Blog from "../../Pages/Home/Services/Blog/Blog";
import Comment from "../../Pages/Home/Services/Comment/Comment";
import Myreview from "../../Pages/Home/Services/Myreview/Myreview";
import ServiceDetail from "../../Pages/Home/Services/ServiceDetail";
import ServicesAll from "../../Pages/Home/Services/ServicesAll";
import Update from "../../Pages/Home/Services/Update/Update";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
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
      ,
      {
        path: '/checkout/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/services1/:id',
        element:<Comment></Comment>,
       loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/service/:id",
        element: <ServiceDetail></ServiceDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },

     { 
      path:"/addservice",
      element:<PrivateRoute><Addservice></Addservice></PrivateRoute>,
      loader: () => fetch("http://localhost:5000/services"),
     },


      {
        path: "/serviecsAll",
        element: <ServicesAll></ServicesAll>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path:"/myreview",
        element:<Myreview></Myreview>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }

    ],
  },
]);

export default router;
