import { Navigate } from "react-router-dom"
import Home from "../Components/home/Home";
import Register from "../Components/auth/Registration/Register";
import Login from "../Components/auth/Login/Login";
import ForgotPassword from "../Components/auth/ForgotPassword";
import About from "../Components/others/About";
import Contact from "../Components/others/Contact";
import Faq from "../Components/others/Faq";
import Listings from "../Components/Listings";
import ListSingle from "../Components/ListSingle";
import Bookings from "../Components/user/Bookings";
import Favourite from "../Components/user/Favourite";
import Reviews from "../Components/user/Reviews";
import NotFound from "../Components/NotFound";
import Layout from "../Components/Layout";
import MainLayout from "../Components/MainLayout";
import Checkout from "../Components/others/Checkout";
import Comingsoon from "../Components/others/Comingsoon";
import VerifyUser from "../Components/auth/VerifyUser";

const routes = (isSignedIn) => [
    {
      path: 'app',
      element: isSignedIn ? <Layout /> : <Navigate to="/login" />,
      children: [
        { path: 'favourites', element: <Favourite /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/',
      element: !isSignedIn ? <MainLayout /> : <Navigate to="/app/dashboard" />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'home', element: <Home /> },
        { path: 'register', element: <Register /> },
        { path: 'forgot-password', element: <ForgotPassword /> },
        { path: 'verify-user', element: <VerifyUser /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/home" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    }
  ];
  
export default routes;
