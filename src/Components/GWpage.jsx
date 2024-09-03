import React, { useContext, useEffect, useState } from "react";
import wardcontext from "../Contexts/WardContext";
import Navbar from "./Navbar";
import { useParams, useNavigate } from "react-router-dom";
import './GWpage.css';
import bedicon from '../assets/bedIcon.png'
import BedAssign from "./BedAssign";

function GWpage() {
    const navigate = useNavigate();
    const { wards } = useContext(wardcontext);
    const [foundGW, setFoundGW] = useState(null);
    const { gw } = useParams();
    const { assignBed } = useContext(wardcontext);
    const [selectedBedId, setSelectedBedId] = useState(null);    
    const [selectedColor, setSelectedColor] = useState(null);    
    
    useEffect(() => {
        const foundWard = wards[gw];
        if (foundWard) {
            setFoundGW(foundWard);
        }
    }, [gw, wards]);
    
    const handleBedClick = (bedId, color) => {
        setSelectedBedId(bedId);
        setSelectedColor(color);
        assignBed(gw, bedId);
    };

    if (!foundGW) {
        return <div>Loading...</div>;  // or some other fallback UI
    }

    const moreDetails = (patientID) => {
        console.log(patientID);  
        navigate(`/ipd/general_ward/gw1/patients/${patientID}`);
    }

    return (
        <>
            <Navbar />
            <h1 id="layouthead">Layout for General Ward 1</h1>
            <div className="mainscontains">
                <div className="gwlayoutcontain">
                    <div className="ward-container">
                        {foundGW.beds.slice(0, 5).map((bed) => (
                            <div
                                key={bed.id}
                                className={`bed-icon ${bed.color}`}
                                onClick={() => handleBedClick(bed.id, bed.color)}
                            >
                                <img src={bedicon} className="imgicon" />
                                <p>{bed.id}</p>
                                {bed.color === "red" && (
                                    <button onClick={() => moreDetails(bed.assignedPatient)} id="more_btn">
                                        More Details
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                    <br />
                    {selectedBedId && selectedColor === "green" && (
                        <div style={{ marginLeft: 460 }}>
                            *Scroll Down, to view the patients list
                        </div>
                    )}
                    <br />
                    <div className="ward-container">
                        {foundGW.beds.slice(5, 10).map((bed) => (
                            <div
                                key={bed.id}
                                className={`bed-icon ${bed.color}`}
                                onClick={() => handleBedClick(bed.id, bed.color)}
                            >
                                <img src={bedicon} className="imgicon" />
                                <p>{bed.id}</p>
                                {bed.color === "red" && (
                                    <button id="more_btn" onClick={() => moreDetails(bed.assignedPatient)}>
                                        More Details
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                {selectedBedId && selectedColor === "green" && <BedAssign bedId={selectedBedId} />}
            </div>
        </>
    );
}

export default GWpage;
