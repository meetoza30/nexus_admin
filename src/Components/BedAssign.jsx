import React, { useContext, useState } from "react";
import wardcontext from "../Contexts/WardContext";
import './BedAssign.css';

function BedAssign({ bedId }) {
    const { wards, assignBed } = useContext(wardcontext);
    const unassignedPatients = Object.values(wards.patients).filter(patient => !patient.isAllocated);

    const [selectedBedId, setSelectedBedId] = useState(null);

    const handleBedClick = (patID,bedId, patName) => {
      setSelectedBedId(bedId);
      alert(`Bed with ID ${bedId} has been booked for ${patName} with ID ${patID}`)
    };

    
    return (
        <div className="bed-assign-container">
            <h3>Assign Bed {bedId}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {unassignedPatients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td>{patient.name}</td>
                            <td>
                                <button onClick={() => handleBedClick(patient.id, bedId, patient.name)}>
                                    Assign Bed
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BedAssign;
