import React from "react";
import Navbar from "./Navbar";
import PatientTable from "./Patientable";
import './Opd.css'

function Opd(){

    return(
        <>
        <Navbar />
        <div className="main-content">
            <PatientTable />
        </div>
        </>
    )
}

export default Opd;