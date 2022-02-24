import React from 'react';
import {Row} from "react-bootstrap";
import {motion} from "framer-motion";
function Home() {
  return (
    <motion.div 
    initial={{scaleY: 0}} 
    animate={{scaleY:1}} 
    exit={{scaleY:0}}
    transition={{duration: .5, delay: 1}}
    >
    <div>Hello world you are home</div>
    </motion.div>
  );
}

export default Home