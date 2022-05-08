import {React, useState, useEffect} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';


function ScrollUpButton() {
    const [showScroll, setShowScroll] = useState(false)
  
  
    const checkScrollTop = () => {    
      if (!showScroll && window.pageYOffset > 300){
        setShowScroll(true)    
      } else if (showScroll && window.pageYOffset <= 300){
        setShowScroll(false)    
      }   
    };
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };

      useEffect( () =>{
      window.addEventListener('scroll', checkScrollTop)
  
    return () => window.removeEventListener("scroll", checkScrollTop);
    },);

  return (

    <FaArrowCircleUp size ="xl" className="scrollArrow" style={{height: 40, display: showScroll ? 'flex' : 'none'}} onClick={scrollToTop}/>
    
  );
}

export default ScrollUpButton