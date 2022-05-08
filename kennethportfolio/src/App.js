import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom"
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import ScrollUpButton from './Components/ScrollUpButton';
import { useState, useEffect, useContext} from "react";
import Axios from 'axios';
import {Container} from 'react-bootstrap'; 
import {AnimatePresence, motion} from "framer-motion";
import "./Components/Home.css"
import "./App.css";
import {} from 'react-icons/fa';


export const ViewSize = React.createContext();

function App() {
  const size = useWindowSize();
  const location = useLocation();
 
  
  var closeString = "</Kenneth's World>";
  var closeTag ={
      justifyContent: "end", 
      marginTop: "3rem",
      marginBottom: "0",
      position: "absolute",
      bottom: "10px",
      right: "10px"
  }
  var smallCloseTag ={
    justifyContent: "end",
    marginTop: "3rem",
    marginBottom: "0",  
  
  }

  return (
    <AnimatePresence exitBeforeEnter>
    <ViewSize.Provider value={size}>
        
          <div className="backgroundImg">
              <NavBar/>         
              <Switch location={location} key={location.pathname}>  
              <Route exact path="/"component={Home}/>      
              <Route path="/About" component={About}/>
              <Route path="/Portfolio" component={Portfolio}/>   
              <Route path="/Contact" component={Contact}/>   
              </Switch>
            <ScrollUpButton/>
            {/* <p style ={size.height > 600 ? closeTag : smallCloseTag}className='tagStyling'>{closeString}</p> */}
          </div> 
    
    </ViewSize.Provider>
    </AnimatePresence>
);
}

///function for dynamic width /height
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
