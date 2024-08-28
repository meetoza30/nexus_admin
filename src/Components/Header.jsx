import React from 'react'
import nexuslogo from '../assets/nexusfinal-removebg-preview.png'
import './Header.css'

function Header(){

    return(
        <>
        <header className="header">
        <div className="nexuslogo">
            <img src={nexuslogo} className="logo-icon"/>
        </div>
        <nav className="nav-menu">
            <a href="#" className="headitems">Log Out</a>
            {/* <a href="#" className="headitems">Plan Your Visit</a> */}
        </nav>
    </header>
    
        </>
    )
}

function Nav(){

    return(
        <>
                <div className="hamburger-menu">
        <div className="menu-heading">
            <h1>Menu</h1>
            <button className="menu-toggle" onclick="toggleMenu()">☰</button>
        </div>
        <nav id="menu" className="hidden">
            <ul>
                <li><a href="#" onclick="openContent('dashboard')">Dashboard</a></li>
                <li><a href="#" onclick="openContent('patient')">Add a Patient</a></li>
                <li><a href="#" onclick="openContent('opd')">Clinic (OPD)</a></li>
                <li><a href="#" onclick="openContent('ipd')">IPD</a></li>
                <li><a href="#" onclick="openContent('lis')">LIS</a></li>
                <li><a href="#" onclick="openContent('pharmacy')">Store & Pharmacy</a></li>
                <li><a href="#" onclick="openContent('billing')">Billing</a></li>
            </ul>
        </nav>
    </div>
    
    <div id="content" className="content-area">
        <h1>Welcome to the Dashboard</h1>
        <p>Click on the menu items to navigate.</p>
    </div>
        </>
    )
}

export default Header;
