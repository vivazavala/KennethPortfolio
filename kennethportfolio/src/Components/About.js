import { React, useState, useEffect, useContext} from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Brand, Container} from 'react-bootstrap';
import {ViewSize} from "../App.js";
import {motion} from "framer-motion";
import userPhoto from "../images/userPhoto.jpg";
import {FaJava} from 'react-icons/fa'
function About() {
    
    const PageSize = useContext(ViewSize);
 
    return(
<Container fluid>
<Row style ={{backgroundColor: "transparent", borderBottom: "solid 2px #0DF1BA", marginTop: "1rem"}}>
    <Col style ={{padding: "0px"}}>
    <motion.div className="intro"
initial={{scaleY: 0}} 
animate={{scaleY:1}} 
exit={{scaleY:0}}
transition={{duration: .5, delay: 1}}
>   
    <img src={userPhoto} className = "userPh" style={{width: PageSize.width > 605 ? "fit-content" : PageSize.width,
height: PageSize.width > 600 ? "550px" : PageSize.width}}/>
    </motion.div>
    </Col>
    <Col style ={{padding: "0px", display:"flex", justifyContent: "center"}}>
    <motion.div className="aboutMe">
        <h1 style ={{fontFamily: "'Monoton', cursive", fontSize: "5rem", color: "#0DF1BA"}}>About</h1>
        <b style ={{marginTop:"1rem"}}>I am a Software Engineer based out of Houston, TX.</b>
        <p style ={{marginTop:"2rem", fontSize: "17px"}}>I graduated from the University of Houston in 2020 with a Bachelor's Degree in Computer Science and have since began a development role in Houston.
I love to spend my spare time developing full stack applications and traveling! Software Development has given me the creative freedom I've 
always searched for while keeping me consistenly learning which is something I love to do. Lets connect!</p>

    </motion.div>
           
    </Col>  
        
</Row> 
<Row style={{backgroundColor: "transparent", justifyContent:"center", display:"flex", flexDirection: "column", textAlign:"center", paddingTop:"2rem"}}>
    <h1 style ={{fontFamily: "'Monoton', cursive", fontSize: "5rem", color: "#0DF1BA", margin: "1rem"}}>Skills</h1>
            <motion.div className="skillsContainer">
                <motion.div className="skill">Java</motion.div>
                <motion.div className="skill">React</motion.div>
            </motion.div>
</Row>
</Container>
    );
}

export default About