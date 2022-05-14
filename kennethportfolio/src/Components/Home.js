import {React, useContext} from 'react';
import {Row, Container, Col} from "react-bootstrap";
import {motion, useSpring} from "framer-motion";
import './Home.css';
import TypeWriter from 'typewriter-effect';
import {ViewSize} from "../App.js";
import { Link } from 'react-router-dom';




function Home() {
  const PageSize = useContext(ViewSize);
  const variants = {
    visible: {opacity:1},
    hidden:{opacity: 0},
}
  return (
    
    <motion.div fluid 
    initial="hidden" 
    animate="visible"
    variants={variants}
    transition={{ease: "easeInOut", duration: 2}}
    >
    <Container style={{padding: "0px", margin: "0px"}} fluid>
      <ul style ={{padding: "10px", paddingBottom: "0px"}}>
      <motion.li className={PageSize.width >= 500 ? "li" : "phoneli"}>
      <motion.div style ={{textAlign: "center", alignItems:"center", fontWeight: "500"}}whileHover={{scale: 1.1}}>Hi, I'm <b style ={{color: "#0DF1BA", fontFamily: "'Montserrat', sans-serif"}}>Kenneth.</b> </motion.div> 
      </motion.li>
      <motion.li className ="typeWriterText" whileHover={{color:'#0DF1BA'}}>
         <TypeWriter options={{
          strings: ['Software Engineer', 'Full-Stack Engineer'],
          autoStart: true,
          loop: true,
          delay: 65, deleteSpeed: 60, pauseFor: 1000
           }} />
      </motion.li>
      <div style ={{textAlign: "center"}}>
        <Link to="/Contact" className= "button">Contact Me!</Link>
        <Link to="/Portfolio" className= "button">View My Work!</Link>
      </div>
      </ul>
    </Container>
    </motion.div>
  );
}

export default Home