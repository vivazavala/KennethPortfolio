import {React, useContext} from 'react';
import {Row, Container, Col} from "react-bootstrap";
import {motion, useSpring} from "framer-motion";
import './Home.css';
import TypeWriter from 'typewriter-effect';
import {ViewSize} from "../App.js";




function Home() {
  const PageSize = useContext(ViewSize);
 
  return (
    
    <motion.div fluid 
    initial={{scaleY: 0}} 
    animate={{scaleY:1}} 
    exit={{scaleY:0}}
    transition={{duration: .5, delay: 1}}
    >
    <Container style={{padding: "0px", margin: "0px"}} fluid>
      <ul style ={{padding: "10px", paddingBottom: "0px"}}>
      <motion.li className={PageSize.width >= 500 ? "li" : "phoneli"}>
      <motion.div style ={{textAlign: "center", alignItems:"center"}}whileHover={{scale: 1.1}}>Hi, I'm <b style ={{color: "#0DF1BA", fontFamily: "'Fredoka One', cursive",
fontFamily: "'Montserrat', sans-serif"}}>Kenneth.</b> </motion.div> 
      </motion.li>
      <motion.li className ={PageSize.width >= 500 ? "typeWriterText" : "phonetypeWriterText"} whileHover={{color:'#0DF1BA'}}>
         <TypeWriter options={{
          strings: ['Software Engineer', 'Full-Stack Engineer'],
          autoStart: true,
          loop: true,
          delay: 65, deleteSpeed: 60, pauseFor: 1000
           }} />
      </motion.li>
      <div style ={{textAlign: "center"}}>
      <motion.button href ="/Contact"className= {PageSize.width >= 500 ? "button" : "phoneButton"}whileTap={{scale: .5}} whileHover={{scale: 1.1}}>Contact Me!</motion.button>
      <motion.button href ="/Portfolio" className= {PageSize.width >= 500 ? "button" : "phoneButton"} whileTap={{scale: .5}} whileHover={{scale: 1.1}}>View My Work!</motion.button>
      </div>
      </ul>
    </Container>
    </motion.div>
  );
}

export default Home