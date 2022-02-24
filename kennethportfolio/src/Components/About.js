import { React, useState, useEffect, useContext} from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Brand} from 'react-bootstrap';
import {ViewSize} from "../App.js";

function About() {
    
    const PageSize = useContext(ViewSize);
 
    return(
    <div>

    <div> width:{PageSize.width}</div>
    
    </div>
    );
}

export default About