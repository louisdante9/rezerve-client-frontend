import React, {useEffect} from 'react'
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux"
import "./App.css"
import routes from "./routes";


function App() {
  useEffect(() => {
  }, [])
  const { isAuthenticated } = useSelector((state) => state.setCurrentUser);
  const routing = useRoutes(routes(isAuthenticated));
  return (
    <>
      { routing }
    </>
  );
}

export default App;
