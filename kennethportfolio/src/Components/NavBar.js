import axios from 'axios';
import { Link, useLocation} from 'react-router-dom';
import { React, useState, useEffect, useContext} from "react";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import cvicon from "../images/cvicon.png";
import Pdf from "../documents/ZavalaKennethResume2022pdfWeb.pdf";
import {ViewSize} from "../App.js";
import {motion} from "framer-motion";
import { FaFileExcel } from 'react-icons/fa';

var navLinkStyle ={
    fontSize: '20px',
}
var hamburgerLinkStyle ={
    width: '15%'
}
var navBarCustomCol = {
    backgroundImage: "linear-gradient(to right,#000000, #202020)"
}
var linkStyle ={
    display: 'flex',
    padding: '5px',
    justifyContent: 'center'
}
var phoneLinkStyle={  
    transition: '0.2s all ease-out',
    display: 'flex',
    fontSize: '18px',
    justifyContent: 'center',
    padding: '10px',
}
var iconStyle ={
    marginRight: "0px"
}
var phoneIconStyle={
    marginLeft: "1rem",
    marginRight: "1rem",
    padding: "5px",
    justifyContent: 'center',
    display: 'flex'
}
var logoStyle = {
    height: '55px',
    width: '70px'
}
var phoneLogoStyle = {
    height: '30px',
    width: '45px'
}



function NavBar() {
       const PageSize = useContext(ViewSize);
       const location = useLocation();
         const variants = {
            visible: {opacity:1},
            hidden:{opacity: 0},
        }

function onEmailClick(){
window.open('mailto:kennethz180@yahoo.com');
}

var tagString = "<Kenneth's World>";

	return (
        <motion.div 
initial="hidden" 
animate="visible"
variants={variants}
transition={{ease: "easeInOut", duration: 1}}
>
        <div>
            <Navbar collapseOnSelect expand="lg" fluid style={navBarCustomCol} variant="dark">
            <Container style = {{margin: "0", padding: "0"}} fluid>

                <Nav className='ms-auto'>
                <motion.div whileHover={{scale: 1.1}}>
                    <Navbar.Brand href="/" title ="Home"><p style ={{fontSize: PageSize.width >350 ? "20px" : "15px"}}className ="tagStyling">{tagString}</p></Navbar.Brand>
                </motion.div>   
                </Nav>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">   

                <Nav className="m-auto" style = {PageSize.width >= 991 ?  navLinkStyle : hamburgerLinkStyle} activeKey ={location.pathname}>                  
                    <Nav.Link href="/About" className= {PageSize.width >=991 ? navLinkStyle : phoneLinkStyle} style = {{marginRight: PageSize.width >= 991 ? "6rem" : "0"}}>About</Nav.Link>
                    <Nav.Link href="/Portfolio" className= {PageSize.width >=991 ? navLinkStyle : phoneLinkStyle} style = {{marginRight: PageSize.width >= 991 ? "6rem" : "0"}}>Portfolio</Nav.Link>
                    <Nav.Link href="/Contact" className= {PageSize.width >=991 ? navLinkStyle : phoneLinkStyle}>Contact</Nav.Link>                  
                </Nav>
                
                <Nav className={PageSize.width >= 991 ? "m1-auto" : "flex-row justify-content-center"}>     
                    <motion.div whileHover={{scale: 1.1}}><Nav.Link href="https://www.linkedin.com/in/kennethzavala/" style={PageSize.width >= 991 ? iconStyle : phoneIconStyle} title="LinkedIn"><SocialMediaIconsReact  borderColor="#FFFFFF" borderWidth="3" borderStyle="solid" icon="linkedin" iconColor="#000000" backgroundColor="#FFFFFF" iconSize="3" roundness="50%" url="https://www.linkedin.com/in/kennethzavala/" size={PageSize.width >= 991 ? "50": "30"} /></Nav.Link></motion.div>
                    <motion.div whileHover={{scale: 1.1}}><Nav.Link href ="https://github.com/vivazavala" style= {PageSize.width >= 991 ? iconStyle : phoneIconStyle} title="github"><SocialMediaIconsReact borderColor="#000000" borderWidth="0" borderStyle="solid" icon="github" iconColor="#000000" backgroundColor="#FFFFFF" iconSize="8" roundness="50%" url="https://github.com/vivazavala" size={PageSize.width >= 991 ? "50": "30"} /></Nav.Link></motion.div>
                    <motion.div whileHover={{scale: 1.1}}><Nav.Link href={Pdf} style={PageSize.width >= 991 ? iconStyle : phoneIconStyle} title="View Resume">
                    <img src={cvicon} style={{borderRadius: "50%"}} alt="Resume" width={PageSize.width >= 991 ? "50": "30"} height ={PageSize.width >= 991 ? "50": "30"} size="50"/>
                   </Nav.Link></motion.div>
                   <motion.div whileHover={{scale: 1.1}}><Nav.Link eventKey={2} href ="/Contact" onClick ={onEmailClick} style= {PageSize.width >= 991 ? iconStyle : phoneIconStyle} title="Email Me"><SocialMediaIconsReact borderColor="#000000" borderWidth="0" borderStyle="solid" icon="mail" iconColor="#000000" backgroundColor="#FFFFFF" iconSize="6" roundness="50%" size={PageSize.width >= 991 ? "50": "30"} /></Nav.Link></motion.div>
                </Nav>

                </Navbar.Collapse>
            </Container>
            </Navbar>
		</div>
        </motion.div>
		);
}

export default NavBar
