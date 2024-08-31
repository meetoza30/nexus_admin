import React, { useContext, useEffect, useState } from "react";
import wardcontext from "../Contexts/WardContext";
import Navbar from "./Navbar";
import { useParams, Link, useNavigate } from "react-router-dom";
import './GWpage.css';
import { BedContext } from "../Contexts/BedContext";
import bedicon from '../assets/bedIcon.png'
import BedAssign from "./BedAssign";

function GWpage() {
    const navigate = useNavigate();
    const { wards } = useContext(wardcontext);
    const [foundGW, setFoundGW] = useState(null);
    const { gw } = useParams();
    const { state, assignBed } = useContext(wardcontext);
    const [selectedBedId, setSelectedBedId] = useState(null);    
    const [selectedColor, setSelectedColor] = useState(null);    
    const [PatientId, setPatientId] = useState(null);    
    const [bedStatus, setBedStatus] = useState([]);
    
    useEffect(() => {
        const foundWard = wards[gw];
        if (foundWard) {
            setFoundGW(foundWard);
            const initialStatus = Array.from({ length: foundWard.totalCapacity }, (_, index) => index < foundWard.filledBeds);
            setBedStatus(initialStatus);
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
    function patientDisplay(){
      
    }

    function moreDetails(patientID){
      console.log(patientID)  
        navigate(`/ipd/general_ward/gw1/patients/${patientID}`)
    }
    return (
        <>
            <Navbar />
            <h1>Layout for General Ward 1</h1>
            <div className="mainscontains">
            <div className="gwlayoutcontain">
            <div className="ward-container">
  {foundGW.beds.slice(0,5).map((bed, index) => (
    
    
    <div
      key={bed.id}
      className={`bed-icon ${bed.color}`}
      onClick={() => handleBedClick(bed.id)}
    >
      {/* <Link to={`/ipd/general_ward/${gw}/patients`}> */}
      <img src={bedicon} className="imgicon"/>
      <p>{bed.id}</p>
      {/* </Link>  */}
      {bed.color === "red" && <button onClick={()=>moreDetails(bed.assignedPatient)} id="more_btn">More Details</button>}
    </div>
  ))}
</div>
<br></br>
{selectedBedId && <div>

  </div>}
<br></br>
            <div className="ward-container">
  {foundGW.beds.slice(5,10).map((bed, index) => (
    
    
    <div
      key={bed.id}
      className={`bed-icon ${bed.color}`}
      onClick={() => handleBedClick(bed.id, bed.color)}
    >
      {/* <Link to={`/ipd/general_ward/${gw}/patients`}> */}
      <img src={bedicon} className="imgicon"/>
      {/* </Link> */}
      
      
      <p>{bed.id}</p>
      {bed.color === "red" && <button id="more_btn"  onClick={()=>moreDetails(bed.assignedPatient)}>More Details</button>}
    </div>
   
    
  ))}
</div>
</div>
{selectedBedId && selectedColor == 'green' && <BedAssign bedId={selectedBedId} />}
</div>
        </>
    );
}

export default GWpage;
