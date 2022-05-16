import {React, useContext} from 'react';
import {motion} from 'framer-motion';
import kennethsPortfolio from '../images/kennethsPortfolio.png';
import adminPortal from '../images/adminPortal.png';
import phoneInsurance from '../images/phoneInsuranceCalc.png';
import {ViewSize} from "../App.js";
import {Link} from 'react-router-dom';
function Portfolio() {
  
  const variants = {
    visible: {opacity:1},
    hidden:{opacity: 0},
}
  const PageSize = useContext(ViewSize);
  
  return (
    <motion.div style ={{display: "flex", justifyContent:"center", width: "100%", margin: "0", padding: "0", flexDirection: "column", textAlign: "center"}}
    initial="hidden" 
    animate="visible"
    variants={variants}
    transition={{ease: "easeInOut", duration: 1.5}}
    >
      <h1 style ={{fontFamily: "'Monoton', cursive", fontSize: PageSize.width >= 500 ? "4rem":"2rem", color: "#0DF1BA", marginTop: PageSize.width >450 ? "4rem": "2rem"}}>Welcome to my portfolio!</h1>
      <p style ={{color: "white", fontWeight: "800", marginBottom: ".5rem" }}>This section is continously being updated. Please be on the lookout for more.</p>
      <p style ={{color: "white", fontWeight: "500"}}>Click any card to view the source code or hosted site!</p>
      <div className='cardBox'>
          <a href ="https://github.com/vivazavala/KennethPortfolio">
          <div className='card'>
              <img src={kennethsPortfolio} style ={{width: "16rem", height: '10rem', border: "#0DF1BA solid 2px"}} />
              <b className='cardHeader' style ={{marginTop: "1rem"}}>Kenneth's Portfolio Website</b>
              <p className='cardHeader' style={{marginBottom: ".5rem", fontWeight: "500"}}>Side Project</p>
          </div>
        </a>
        <a href='https://github.com/vivazavala/ReactNodeJSproject'>
          <div className='card'>
              <img src={adminPortal} style ={{width: "16rem", height: '10rem', border: "#0DF1BA solid 2px"}} />
              <b className='cardHeader' style ={{marginTop: "1rem"}}>Admin Portal</b>
              <p className='cardHeader' style={{marginBottom: ".5rem", fontWeight: "500"}}>Side Project</p>
          </div>
        </a>
        <a href='https://github.com/vivazavala/InsuranceApp'>
          <div className='card'>
              <img src={phoneInsurance} style ={{width: "16rem", height: '10rem', border: "#0DF1BA solid 2px"}} />
              <b className='cardHeader' style ={{marginTop: "1rem"}}>Phone Insurance Calculator</b>
              <p className='cardHeader' style={{marginBottom: ".5rem", fontWeight: "500"}}>Side Project</p>
          </div>
        </a>
    </div>
    </motion.div>
  )
}

export default Portfolio