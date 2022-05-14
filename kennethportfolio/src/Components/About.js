import { React, useState, useEffect, useContext} from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Container, Tab, Nav} from 'react-bootstrap';
import {ViewSize} from "../App.js";
import {motion} from "framer-motion";
import userPhoto from "../images/userPhoto.jpg";

function About() {
    
    const PageSize = useContext(ViewSize);

    const variants = {
        visible: {opacity:1},
        hidden:{opacity: 0},
    }
    const skills =["Java", "React", "JavaScript", "HTML", "CSS", "Node.js", "Postgres"
    , "MongoDB", "SQL", "AWS", "Full Stack Development", "Object Oriented Programming",
    "Git", "GitHub", "Jenkins Pipelines", "Flask", "Docker"
];

const introRowStyle={
    backgroundColor: "transparent", 
    borderBottom: "solid 2px #0DF1BA", 
    marginTop: "1rem",
    display: "flex",
}
const skillsRowStyle={
    backgroundColor: "transparent", 
    justifyContent: "center",
     display:"flex",
      flexDirection: "column", 
      textAlign:"center",
       paddingTop:"2rem",
        paddingBottom:"2rem",
        borderBottom: "solid 2px #0DF1BA", 
}
const careerRowStyle ={
    backgroundColor: "transparent", 
     display:"flex",
      flexDirection: "column", 
      textAlign:"center",
       paddingTop:"2rem",
        paddingBottom:"2rem"
}
const tabStyling={
      fontSize: "17px",
      fontWeight: "800",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
}
const roleStyle={
    color: "white",
    padding: "5px",
    margin: "10px"
}

    return(
<Container fluid>
<Row style ={introRowStyle}>
    <Col style ={{padding: "0px", justifyContent: "center", alignContent: "center"}}>
    <motion.div className="intro"
    initial="hidden" 
    animate="visible"
    variants={variants}
    transition={{ease: "easeInOut", duration: 1.5}}>  

    <img src={userPhoto} className = "userPh" style={{width: PageSize.width > 605 ? "fit-content" : PageSize.width -15,
height: PageSize.width > 600 ? "550px" : PageSize.width -25}}/>
    </motion.div>
    </Col>
    <Col style ={{padding: "0px", display:"flex", justifyContent: "center"}}>
    <motion.div className="aboutMe"
    initial="hidden" 
    animate="visible"
    variants={variants}
    transition={{ease: "easeInOut", duration: 1.5}}
    >
        <h1 style ={{fontFamily: "'Monoton', cursive", fontSize: PageSize.width >= 500 ? "5rem":"2rem", color: "#0DF1BA"}}>About</h1>
        <b style ={{marginTop:"1rem"}}>I am a Software Engineer based out of Houston, TX.</b>
        <p style ={{marginTop:"2rem", fontSize: PageSize.width >450 ? "17px": "12px"}}>I graduated from the University of Houston in 2020 with a Bachelor's Degree in Computer Science and have since began a development role in Houston.
I love to spend my spare time developing full stack applications and traveling! Software Development has given me the creative freedom I've 
always searched for while keeping me consistenly learning which is something I love to do. Lets connect!</p>

    </motion.div>
           
    </Col>       
</Row> 
<Row style={skillsRowStyle}>
    <h1 style ={{fontFamily: "'Monoton', cursive", fontSize: PageSize.width >= 500 ? "5rem":"2rem", color: "#0DF1BA", margin: "1rem"}}>Skills</h1>
           <div style ={{display:"flex", justifyContent: "center"}}>
            <motion.div className="skillsContainer">
              {skills.map((skill) => <motion.div whileHover ={{scale: 1.1}} className ="skill" key ={skill}>{skill}</motion.div>
              )}
            </motion.div></div>
</Row>
<Row style ={careerRowStyle}>
<h1 style ={{fontFamily: "'Monoton', cursive", fontSize: PageSize.width >= 500 ? "5rem":"2rem", color: "#0DF1BA", margin: "1rem"}}>Career</h1>
<div style ={{display: "flex", justifyContent:"center"}}>
<motion.div className ="careerBox">
<h7 className="careerBoxHeader">Where Kenneth Has Worked ?</h7>
<Tab.Container  defaultActiveKey="first">
  <Row style={{width: "100%", height: "fit-content"}}>
    <Col style ={tabStyling}sm={3}>
    <Nav variant="pills">
        <Nav.Item>
            <Nav.Link style={roleStyle} eventKey="first"><b style={{color: "#0DF1BA"}}>1.</b>&nbsp;&nbsp; AIG</Nav.Link>
        </Nav.Item>
    </Nav>
    <Nav variant="pills">
        <Nav.Item>
            <Nav.Link style={roleStyle}eventKey="second"><b style={{color: "#0DF1BA"}}>2.</b>&nbsp;&nbsp; AIG</Nav.Link>
        </Nav.Item>
    </Nav>
    <Nav variant="pills">
        <Nav.Item>
            <Nav.Link style={roleStyle}eventKey="third"><b style={{color: "#0DF1BA"}}>3.</b>&nbsp;&nbsp;H-E-B</Nav.Link>
        </Nav.Item>
    </Nav>
    </Col>
    <Col className ="roleDesc"sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <div className="roleDiv">
                <h4>Infrastructure Software Developer <b style={{color: "#0DF1BA"}}>@ AIG</b></h4>
                <p>April 2022 - Present</p>
                <ul>
                    <li>Developing, Designing, and implementation of company applications</li>   
                    <li>Software Development using React, Node.js, Postgres, Express, and Java</li>   
                    <li>CI/CD pipelines using Jenkins</li>   
                    <li>Server reporting and maintenance</li>   
                </ul> 
            </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <div className="roleDiv">
                <h4>DevOps Engineer <b style={{color: "#0DF1BA"}}>@ AIG</b></h4>
                <p>July 2021 - April 2022</p>
                <ul>
                    <li>Worked with Senior DevOps Engineers to develop CI/CD pipelines using Jenkins</li>   
                    <li>Build infrastructure using AWS and Terraform</li>   
                    <li>Scrum meetings to ensure project success and resolve project blockers</li>   
                    <li>Used GitHub repositories to automate pipeline responsibilities</li>   
                </ul> 
            </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        <div className="roleDiv">
                <h4>Digital and Information Solutions Intern <b style={{color: "#0DF1BA"}}>@ H-E-B</b></h4>
                <p>June 2020 - August 2020</p>
                <ul>
                    <li>Collaborated with a team of System Engineers to mitigate and ensure successful acquisitions for H-E-B</li>   
                    <li>Daily standup meetings to touch base with managers</li>   
                    <li>Worked with the H-E-B design team to ﬁnd an alternative solution to demoing in store changes using VR technology</li>   
                </ul> 
            </div>
        </Tab.Pane>
      </Tab.Content>
        </Col>
        </Row>
    </Tab.Container>
    </motion.div>
    </div>
</Row>
</Container>
    );
}

export default About