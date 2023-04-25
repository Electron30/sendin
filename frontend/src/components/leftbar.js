import React from 'react'
import "./css/leftbar.css"
import {Link} from "react-router-dom";
export default function rightbar() {
  return (
    <div className="left-bar">
  <div className="menu-type">
  <Link className='side-bar-button upperb side-bar-link ' to="/"> <img className='side-bar-upper-img' src="./images/icons8-link-96.png" alt=''/><p className='side-bar-button-text'>Add connection</p></Link>
  <Link className='side-bar-button upperb side-bar-link ' to="connections"> <img className='side-bar-upper-img' src="./images/icons8-network-96.png" alt=''/><p className='side-bar-button-text'> Connections</p></Link>
  </div>
  <div className="side-bar">
  <Link className='side-bar-button middleb side-bar-link ' to=""> <img className='side-bar-middle-img' src="./images/icons8-pro-display-xdr-96.png" alt=''/><p className='side-bar-button-text'>My Device</p></Link>
  <Link className='side-bar-button middleb side-bar-link ' to=""> <img className='side-bar-middle-img' src="./images/icons8-iphone-14-96.png" alt=''/><p className='side-bar-button-text'>My Phone</p></Link>
  <Link className='side-bar-button middleb side-bar-link ' to=""> <img className='side-bar-middle-img' src="./images/icons8-room-96.png" alt=''/><p className='side-bar-button-text'>Rooms</p></Link>

  </div>
  <div className="side-bar-lower">
  <div id="fileTransferButton" className="side-bar-button lowerb"><img className='side-bar-lower-img' src="./images/icons8-data-transfer-96.png" alt=''/><p className='side-bar-button-text'>Transfers</p></div>
    <div id="account" className="side-bar-button lowerb"><img className='side-bar-lower-img' src="./images/icons8-test-account-96.png" alt=''/><p className='side-bar-button-text'>Account</p></div>
    <div data-tab-target="#settings" id="settings-button" className="side-bar-button lowerb" alt=''><img className='side-bar-lower-img' src="./images/icons8-settings-144.png" alt='' /><p className='side-bar-button-text'>Settings</p></div>
    <div id="info" className="side-bar-button lowerb"><img className='side-bar-lower-img' src="./images/icons8-info-240.png" alt=''/><p className='side-bar-button-text'>About</p></div>
    
    
  </div>
</div>

  )
}
