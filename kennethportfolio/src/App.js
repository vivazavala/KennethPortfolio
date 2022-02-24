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
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default App;
