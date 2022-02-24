import axios from 'axios';
import { Link } from 'react-router-dom';
import { React, useState, useEffect, useContext} from "react";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { Navbar, Nav, Container, Row, Col, Brand} from 'react-bootstrap';
import cvicon from "../images/cvicon.png";
import Pdf from "../documents/ZavalaKennethResume2022pdfWeb.pdf";
import {ViewSize} from "../App.js";

var navLinkStyle ={
    fontSize: '20px'   
}
var navBarCustomCol = {
    backgroundColor: '#000000'
}
var linkStyle ={
    paddingLeft: "60px",
    paddingRight: "60px"
}
var iconStyle ={
    paddingRight: "5px"
}
var phoneIconStyle={
    paddingRight: "5px",
    justifyContent: 'center',
    display: 'flex',
    width: '50',
    height: '40'
}
var phoneNav ={
    fontSize: '15px',
    padding: '2px',
    transition: '0.3s all ease-out'
}
var phoneLinkStyle={  
    transition: '0.2s all ease-out',
    display: 'flex',
    fontSize: '15px',
    justifyContent: 'center'
}


function NavBar() {
       const PageSize = useContext(ViewSize);
    
	return (
        <div>
            <Navbar collapseOnSelect expand="lg" fluid style={navBarCustomCol} variant="dark">
            <Container fluid>
           
                <Nav className='ms-auto'>
                    <Navbar.Brand href="/Home"style ={PageSize.width >= 700 ? navLinkStyle : phoneNav}>KENNETH ZAVALA</Navbar.Brand>
                </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">   

                <Nav className="m-auto" style= {navLinkStyle}>                  
                    <Nav.Link href="#About" style={PageSize.width >= 991 ? linkStyle : phoneLinkStyle}>About</Nav.Link>
                    <Nav.Link href="#Projects" style={PageSize.width >= 991 ? linkStyle : phoneLinkStyle}>Projects</Nav.Link>
                    <Nav.Link href="#Contact" style={PageSize.width >= 991 ? linkStyle : phoneLinkStyle}>Contact</Nav.Link>                  
                </Nav>
           
                <Nav className={PageSize.width >= 991 ? "m1-auto" : "flex-row justify-content-center"}>     
                    <Nav.Link href="https://www.linkedin.com/in/kennethzavala/" style={PageSize.width >= 991 ? iconStyle : phoneIconStyle} title="LinkedIn"><SocialMediaIconsReact  borderColor="#FFFFFF" borderWidth="3" borderStyle="solid" icon="linkedin" iconColor="#000000" backgroundColor="#FFFFFF" iconSize="3" roundness="50%" url="https://www.linkedin.com/in/kennethzavala/" size={PageSize.width >= 991 ? "50": "30"} /></Nav.Link>
                    <Nav.Link href ="https://github.com/vivazavala" style= {PageSize.width >= 991 ? iconStyle : phoneIconStyle} title="github"><SocialMediaIconsReact  borderColor="#000000" borderWidth="0" borderStyle="solid" icon="github" iconColor="#000000" backgroundColor="#FFFFFF" iconSize="8" roundness="50%" url="https://github.com/vivazavala" size={PageSize.width >= 991 ? "50": "30"} /></Nav.Link>
                    <Nav.Link href={Pdf} style={PageSize.width >= 991 ? iconStyle : phoneIconStyle} title="View Resume">
                    <img src={cvicon} style={{borderRadius: "50%"}} alt="Resume" width={PageSize.width >= 991 ? "50": "30"} height ={PageSize.width >= 991 ? "50": "30"} size="50"/>
                   </Nav.Link>
                   <Nav.Link eventKey={2} href ="#Contact" style={PageSize.width >= 991 ? iconStyle : phoneIconStyle} title="Email Me"><SocialMediaIconsReact  borderColor="#000000" borderWidth="0" borderStyle="solid" icon="mail" iconColor="#000000" backgroundColor="#FFFFFF" iconSize="6" roundness="50%" size={PageSize.width >= 991 ? "50": "30"} /></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
		</div>
		);
}

export default NavBar
