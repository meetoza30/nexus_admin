import React from "react";
import { Link } from "react-router-dom";
import './IPDhome.css';
import Navbar from "./Navbar";

function IPDhome() {
    return (
        <>
        <Navbar />
        <h1 id="navighead">Navigate through various wards to see the availability of the beds</h1>
            <div className="maincontains">
                <div className="cardbox fstrow">
                    <div className="carditem">
                        <Link to="/ipd/general_ward" className="cardlink">
                            <div className="carditembg"></div>
                            <p id="carditemname">General Ward</p>
                        </Link>
                    </div>
                    <div className="carditem">
                        <Link to="#" className="cardlink">
                            <div className="carditembg"></div>
                            <p id="carditemname">Female Ward</p>
                        </Link>
                    </div>
                    <div className="carditem">
                        <Link to="#" className="cardlink">
                            <div className="carditembg"></div>
                            <p id="carditemname">Pediatric Ward</p>
                        </Link>
                    </div>
                </div>

                <div className="cardbox scndrow">
                    <div className="carditem">
                        <Link to="#" className="cardlink">
                            <div className="carditembg"></div>
                            <p id="carditemname">Maternity Ward</p>
                        </Link>
                    </div>
                    <div className="carditem">
                        <Link to="#" className="cardlink">
                            <div className="carditembg"></div>
                            <p id="carditemname">Private Rooms</p>
                        </Link>
                    </div>
                    <div className="carditem">
                        <Link to="#" className="cardlink">
                            <div className="carditembg"></div>
                            <p id="carditemname">ICU</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IPDhome;
