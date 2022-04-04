import {React, useContext} from 'react';
import {Row, Container, Col} from "react-bootstrap";
import {motion, useSpring} from "framer-motion";
import './Home.css';
import TypeWriter from 'typewriter-effect';
import {ViewSize} from "../App.js";




function Home() {
  const PageSize = useContext(ViewSize);
  const variants ={

  }
  return (
    <motion.div style ={{background: "white"}}
    initial={{scaleY: 0}} 
    animate={{scaleY:1}} 
    exit={{scaleY:0}}
    transition={{duration: .5, delay: 1}}
    >
    
    <Container style={{padding: "0px",}} fluid>
      <ul style ={{padding: "10px"}}>
      <motion.li className={PageSize.width >= 500 ? "li" : "phoneli"} whileHover={{scale: 1.1}}>
      Hi, I'm Kenneth 
      </motion.li>
      <motion.li className ={PageSize.width >= 500 ? "typeWriterText" : "phonetypeWriterText"} whileHover={{color:'#c227e6'}}>
         <TypeWriter options={{
          strings: ['Software Engineer', 'Full-Stack Engineer'],
          autoStart: true,
          loop: true,
          delay: 65, deleteSpeed: 60, pauseFor: 1000
           }} />
      </motion.li>
      <div style ={{textAlign: "center"}}>
      <motion.button className= {PageSize.width >= 500 ? "button" : "phoneButton"}whileTap={{scale: .5}} whileHover={{scale: 1.1}}>Contact Me!</motion.button>
      <motion.button className= {PageSize.width >= 500 ? "button" : "phoneButton"} whileTap={{scale: .5}} whileHover={{scale: 1.1}}>View My Work!</motion.button>
      </div>
      </ul>
    </Container>
    </motion.div>
  );
}

export default Home