import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'
import nexusimg from '../assets/nexusfinal-removebg-preview.png'

function Navbar(){
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const toggleNavbar = () => {
      setIsNavbarVisible(!isNavbarVisible);
    };
  
    const handleCardClick = (section) => {
      console.log(`Clicked card: ${section}`);
    };
  
    return (
      <div className="dashboard-container">
        <div className="hamburger-menu">
          <div className="menu-heading">
            <img src={nexusimg} id=""/>
            <button className="menu-toggle" onClick={toggleNavbar}>☰</button>
          </div>
          <nav id="menu" className={isNavbarVisible ? 'active' : 'hidden'}>
            <ul>
              <li><Link to="/"  onClick={() => handleCardClick('dashboard')}>Dashboard</Link></li>
              <li><Link to={`/add_a_patient`} onClick={() => handleCardClick('patient')}>Add a Patient</Link></li>
              <li><Link to={`/opd`} onClick={() => handleCardClick('opd')}>Clinic (OPD)</Link></li>
              <li><Link to="/ipd" onClick={() => handleCardClick('ipd')}>IPD</Link></li>
              <li><Link to={``} onClick={() => handleCardClick('lis')}>LIS</Link></li>
              <li><Link to={``} onClick={() => handleCardClick('pharmacy')}>Store & Pharmacy</Link></li>
              <li><Link to={``} onClick={() => handleCardClick('billing')}>Billing</Link></li>
            </ul>
          </nav>
        </div>
        </div>
        )
}

export default Navbar;