import { React, useState, useEffect, useContext} from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Brand} from 'react-bootstrap';
import {ViewSize} from "../App.js";
import {motion} from "framer-motion";
function About() {
    
    const PageSize = useContext(ViewSize);
 
    return(
<motion.div 
initial={{scaleY: 0}} 
animate={{scaleY:1}} 
exit={{scaleY:0}}
transition={{duration: .5, delay: 1}}
>
    <div>

        <div> width:{PageSize.width}</div>

    </div>
    </motion.div>
    );
}

export default About