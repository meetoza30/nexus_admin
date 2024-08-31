import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import wardcontext from '../Contexts/WardContext';
import Navbar from './Navbar';

function PatientDetails() {
    const { patientID } = useParams();
    const { wards } = useContext(wardcontext);
    const [patientDetails, setPatientDetails] = useState(null);

    useEffect(() => {
        // Find the patient with the matching ID
        const foundPatient = wards.patients.find(patient => patient.id === parseInt(patientID));
        setPatientDetails(foundPatient);
    }, [patientID, wards.patients]);

    if (!patientDetails) {
        return <div>Loading patient details...</div>;
    }

    return (
        <>
        <Navbar />
        <h1>Patient Details</h1>
        <div style={{marginLeft:200}}>
            
            <p><strong>Name:</strong> {patientDetails.name}</p>
            <p><strong>Patient ID:</strong> {patientDetails.id}</p>
            <button>View More Details</button>
        </div>
        </>
    );
}

export default PatientDetails;
