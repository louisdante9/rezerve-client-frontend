import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Register from "./Components/auth/Registration/Register";
import Login from "./Components/auth/Login/Login";
import ForgotPassword from "./Components/auth/ForgotPassword";
import About from "./Components/others/About";
import Contact from "./Components/others/Contact";
import Faq from "./Components/others/Faq";
import Listings from "./Components/Listings";
import ListSingle from "./Components/ListSingle";
import Bookings from "./Components/user/Bookings";
import Favourite from "./Components/user/Favourite";
import Reviews from "./Components/user/Reviews";
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";
import Checkout from "./Components/others/Checkout";
import Comingsoon from "./Components/others/Comingsoon";
import VerifyUser from "./Components/auth/VeirifyUser";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/verification">
          <VerifyUser />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Layout>
          <Route path="/listing-single">
            <ListSingle />
          </Route>
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/faq" exact>
            <Faq />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="/coming-soon" exact>
            <Comingsoon />
          </Route>
          <Route path="/bookings" exact>
            <Bookings />
          </Route>
          <Route path="/favourite" exact>
          < Favourite />
          </Route>
          <Route path="/reviews" exact>
            <Reviews />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Layout>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
