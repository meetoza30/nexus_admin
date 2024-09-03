import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import wardcontext from '../Contexts/WardContext';
import Navbar from './Navbar';

function PatientDetails() {
    const { patientID } = useParams();  // This gets the patientID from the URL
    const { wards } = useContext(wardcontext);  // Access the ward context
    const [patientDetails, setPatientDetails] = useState(null);

    useEffect(() => {
        // Find the patient with the matching ID in the patients array
        const foundPatient = wards.patients.find(patient => patient.patientid === Number(patientID));
        setPatientDetails(foundPatient);
    }, [patientID, wards.patients]);

    if (!patientDetails) {
        return <div>Loading patient details...</div>;
    }

    return (
        <>
            <Navbar />
            <h1>Patient Details</h1>
            <div style={{ marginLeft: 200 }}>
                <p><strong>Name:</strong> {patientDetails.name}</p>
                <p><strong>Patient ID:</strong> {patientDetails.patientid}</p>
                <p><strong>Category:</strong> {patientDetails.category}</p>
                <p><strong>Severity:</strong> {patientDetails.severity}</p>
                <p><strong>Doctor Assigned:</strong> {patientDetails.doctorAssigned}</p>
                <p><strong>Selected Time Slot:</strong> {patientDetails.selectedTimeSlot}</p>
                <p><strong>Patient Syptoms : </strong>{patientDetails.sypmtoms}</p>
                <p><strong>Predicted Primary Disease : </strong>{patientDetails.category}</p>
                {/* <button>View More Details</button> */}
            </div>
        </>
    );
}

export default PatientDetails;
