import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import Listings from "./Components/Listings";
import ListSingle from "./Components/ListSingle";

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/listing-single">
          <ListSingle />
        </Route>
        <Route path="/listings">
          <Listings />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
