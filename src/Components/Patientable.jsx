import React from 'react';
import './Patientable.css'
import {Link} from 'react-router-dom'
function PatientTable() {
  const patients = [
    // Replace with your actual patient data
    {
      name: 'Rohit Kohli',
      category: 'Dermatology',
      severity: 'Low',
      doctorAssigned: 'Dr. Pradeep Kumari',
      selectedTimeSlot: '30 August | 12PM',
      id: 12345
    },
    {
      name: 'Akaay Kohli',
      category: 'Dermatology',
      severity: 'Medium',
      doctorAssigned: 'Dr. Pradeep Kumari',
      selectedTimeSlot: '31 August | 12PM',
      id: 54321
    },
    // Add more patients here
  ];

  return (
    <div className='maincontain'>
      <h1>Patients's Appointments:</h1>
    <table>
      <thead className='headers'>
        <tr className='headers'>
          <th>Patient Name</th>
          <th>Category</th>
          <th>Severity</th>
          <th>Dr. Assigned</th>
          <th>Selected Time Slot</th>
        </tr>
      </thead>
      
      <tbody>
        {patients.map((patient, index) => (
          <tr className='patientrow' key={index}>
           <td> <Link to={`/opd/${patient.id}`} id='pt-name'>{patient.name}</Link></td>
            <td id='detailelement'>{patient.category}</td>
            <td id='detailelement'>{patient.severity}</td>
            <td id='detailelement'>{patient.doctorAssigned}</td>
            <td id='detailelement'>{patient.selectedTimeSlot}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default PatientTable;