import {React, useContext} from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {ViewSize} from '../App.js'

function Footer() {

    var closeString = "</Kenneth's World>";

  return (
    <div className='footerCustom'>
        <div className='footerCustomDiv1'>
        <p className='footerCustomP'>&#169; 2022 Kenneth Zavala</p>
        </div>
        <div className="footerCustomDiv2">
        <h4><p style={{margin: "0"}}>{closeString}</p></h4>
        </div>
    </div>
  )
}

export default Footer