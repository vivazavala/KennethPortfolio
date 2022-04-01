import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom"
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import { useState, useEffect, useContext} from "react";
import Axios from 'axios';
import {Container} from 'react-bootstrap'; 
import {AnimatePresence, motion} from "framer-motion";


export const ViewSize = React.createContext();

function App() {
  const size = useWindowSize();
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <ViewSize.Provider value={size}>
        
          <div className="App">
              <NavBar/>         
              <Switch location={location} key={location.pathname}>  
              <Route exact path="/"component={Home}/>      
              <Route path="/About" component={About}/>
              </Switch>
          </div>
    
    </ViewSize.Provider>
    </AnimatePresence>
);
}

function useWindowSize() {
  // Initialize state with undefined width/height
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    
    function handleResize() {
      //Set window width/height
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export default App;
