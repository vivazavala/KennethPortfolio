import {React, useContext} from 'react';
import {Form} from 'react-bootstrap';
import {motion} from 'framer-motion';
import {ViewSize} from "../App.js";
import {Link} from 'react-router-dom';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'

function Contact() {

  const variants = {
    visible: {opacity:1},
    hidden:{opacity: 0},
}
  const PageSize = useContext(ViewSize);
  
  function onEmailClick(){
    window.open('mailto:kennethz180@yahoo.com');
    }

  return (
    <motion.div style ={{display: "flex", justifyContent:"center", width: "100%", margin: "0", padding: "0"}}
    initial="hidden" 
    animate="visible"
    variants={variants}
    transition={{ease: "easeInOut", duration: 1.5}}
    >
    <motion.div className='connectDiv'>
        <h1 style ={{fontFamily: "'Monoton', cursive", fontWeight: "800",fontSize: PageSize.width >= 400 ? "3rem":"2rem",color: "#0DF1BA"}}>Let's Connect?</h1>
        <p className='textDiv'>Thank you for visiting my webpage! What's the next step? I am always open to a conversation. 
        Please shoot me an email to continue our journey :)
        </p>
        <div>
        <Link className="button" style ={{margin: PageSize.width >400 ? "2rem 1rem" :"1rem .5rem", padding: PageSize.width > 400? "15px 10px":"10px 5px", fontSize:"20px"}}onClick={onEmailClick}>Connect</Link>
        </div>
        <div style={{marginTop: PageSize.width >390 ? "3rem": "0rem"}}>
         <a href = 'https://github.com/vivazavala'><FaGithub className ="connectIcons" size={"3rem"} /></a>
          <a href ='https://www.linkedin.com/in/kennethzavala/'><FaLinkedin className="connectIcons"size={"3rem"}/></a>
          <a href ='https://www.instagram.com/kenneth.zavala/' ><FaInstagram className="connectIcons" size={"3rem"}/></a>
        </div>
</motion.div>
</motion.div>
  )
}

export default Contact