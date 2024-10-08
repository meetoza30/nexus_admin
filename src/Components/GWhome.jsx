import React from "react";
import Navbar from "./Navbar";
import './GWhome.css'
import { Link } from "react-router-dom";

function GWhome(){

    return(
        <>
        <div id="heads">
        <h1>General Wards</h1>
        <h2 className="navihead">Navigate through various General Wards to see the availability of beds</h2>
        </div>
        <Navbar />
        <div className="gwcontain">
        <div className="gwcardscontain">
            <Link to="/ipd/general_ward/gw1" className="gwcard">General Ward-1</Link>
            <Link to="/ipd/general_ward/gw2" className="gwcard">General Ward-2</Link>
            </div>
            <div className="gwcardscontain">
            <Link className="gwcard">General Ward-3</Link>
            <Link className="gwcard">General Ward-4</Link>
            </div>
            </div>

        
        </>
    )
}

export default GWhome;