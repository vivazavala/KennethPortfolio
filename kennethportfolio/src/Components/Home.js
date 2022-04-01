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
    <motion.div 
    initial={{scaleY: 0}} 
    animate={{scaleY:1}} 
    exit={{scaleY:0}}
    transition={{duration: .5, delay: 1}}
    >
    
    <Container fluid>
      <ul >
      <motion.li className={PageSize.width >= 500 ? "li" : "phoneli"} whileHover={{color: '#c227e6'}}>
      Hi, <br></br>
      I'm Kenneth, 
      </motion.li>
      <motion.li className ={PageSize.width >= 500 ? "typeWriterText" : "phonetypeWriterText"} whileHover={{color:'#c227e6'}}>
         <TypeWriter options={{
          strings: ['Software Engineer', 'Full-Stack Engineer'],
          autoStart: true,
          loop: true,
          delay: 65, deleteSpeed: 60, pauseFor: 1000
           }} />
      </motion.li>
      <motion.button className='button' whileTap={{scale: .5}} whileHover={{scale: 1.1}}>Contact Me!</motion.button>
      <motion.button className='button' whileTap={{scale: .5}} whileHover={{scale: 1.1}}>View My Work!</motion.button>
      
      </ul>
    </Container>
    </motion.div>
  );
}

export default Home