import React from 'react';
import './Patientable.css'
import {Link} from 'react-router-dom'
function PatientTable() {
  const patients = [
    // Replace with your actual patient data
    {
      name: 'Ranveer Pensalwar',
      category: 'Drug Reaction',
      severity: 'Low',
      doctorAssigned: 'Dr. Pradeep Kumari',
      selectedTimeSlot: '10 September | 12PM',
      id: 12345,
    },
    {
      name: 'Darshith Shetty',
      category: 'Malaria',
      severity: 'Medium',
      doctorAssigned: 'Dr. Amit Seth',
      selectedTimeSlot: '10 September | 12PM',
      id: 54321
    },
    {
      name: 'Meet Oza',
      category: 'Tuberculosis',
      severity: 'Medium',
      doctorAssigned: 'Dr. Amit Seth',
      selectedTimeSlot: '8 September | 5PM',
      id: 15417
    },
    {
      name: 'Komal Patil',
      category: 'Common Cold',
      severity: 'Medium',
      doctorAssigned: 'Dr. Pratham Gaikwad',
      selectedTimeSlot: '9 September | 1PM',
      id:  51221
    },
    
  ];

  return (
    <div className='maincontain'>
      <h1 id='paheads'>Patients's Appointments:</h1>
    <table>
      <thead className='headers'>
        <tr className='headers'>
          <th>Patient Name</th>
          <th>Predicted Disease</th>
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