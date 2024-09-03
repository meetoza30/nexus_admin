import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import './AppointInfo.css'
import { useParams } from "react-router-dom";

function AppointInfo(){
    const patients = [ {
        name: 'Ranveer Pensalwar',
        category: 'Drug Reaction',
        severity: 'Low',
        doctorAssigned: 'Dr. Pradeep Kumari',
        selectedTimeSlot: '10 September | 12PM',
        id: 12345,
        patientid: 2456,
        user_symptoms: "I've been having a really uncomfortable pain in my stomach. It feels like a burning sensation when I pee, and my skin has been breaking out in rashes. Lately, I've noticed some spotting when I go to the bathroom, and I've been feeling itchy too.",
        sypmtoms: "Stomach Pain, burning micturition, skin rash, spotting urination, Itching",
      },
      {
        name: 'Darshith Shetty',
        category: 'Malaria',
        severity: 'Medium',
        doctorAssigned: 'Dr. Amit Seth',
        selectedTimeSlot: '10 September | 12PM',
        id: 54321,
        patientid: 6245,
        user_symptoms: "I've been feeling really sick lately. I've been sweating a lot, getting frequent headaches, and feeling nauseous. I've also had diarrhea several times, and my temperature has been very high. I've been shivering a lot, and my whole body aches.",
        sypmtoms: "sweating, headache, nausea, diarrhea, high fever, chills, Body pain.",
      },
      {
        name: 'Meet Oza',
        category: 'Tuberculosis',
        severity: 'Medium',
        doctorAssigned: 'Dr. Amit Seth',
        selectedTimeSlot: '8 September | 5PM',
        id: 15417,
        patientid: 5726,
        user_symptoms: "I've been feeling a bit under the weather. I have a low-grade fever, and I've been vomiting. I'm also feeling tired and weak, and I have a lot of phlegm. My chest hurts, and I've been coughing a lot. My eyes have turned yellow, and I've noticed some swollen lymph nodes in the past few days.",
        sypmtoms: "Fever, Vomiting, Malaise, Phlegm , Chest Pain, Yellowing of Eyes , Swelled Lymph Nodes, Cough",
      },
      {
        name: 'Komal Patil',
        category: 'Common Cold',
        severity: 'Medium',
        doctorAssigned: 'Dr. Pratham Gaikwad',
        selectedTimeSlot: '9 September | 1PM',
        id: 51221,
        patientid: 2146,
        user_symptoms: "I've been feeling really bad lately. My muscles ache, and I've lost my sense of smell. I've been coughing occasionally, and my sinuses feel really congested. My nose has been running a lot, and I've had a high fever, headache, and swollen lymph nodes for the past few days.",
        sypmtoms: "Stomach Pain, burning micturition, skin rash, spotting urination, Itching",

      }]
    
      const { id } = useParams();
      const [foundPatient, setFoundPatient] = useState('');
    
      useEffect(() => {
        const patient = patients.find((p) => p.id === Number(id));
        
        setFoundPatient(patient);
      }, [id]);
      console.log(foundPatient);
    return(
        <>
        <Navbar />
        <div className="maincontainer">
        <h1 id="apphead">{`Appointment Information | ${foundPatient.name}`}</h1>
        <div className="infobox">
            <div className="div1">
                <div className="det">Name : {foundPatient.name}</div>
                <div className="det">Appointment No. : {foundPatient.id}</div>
                <div className="det">Patient ID: {foundPatient.user_id}</div>
            </div>
            <div className="div2">
                <div id="div2_p1">Appointment Date & Time : {foundPatient.selectedTimeSlot}</div>
                <div id="div2_p1">Doctor Assigned: {foundPatient.doctorAssigned}</div>
            </div>

            <div className="div3">
                <h3 id="baymaxhead">Baymax Report</h3>
                <div className="reports">
                <div className="genrep">
                    <h4>Symptoms described by user :</h4>
                    <div className="rep">{foundPatient.user_symptoms}</div>
                </div>

                <div className="genrep">
                    <h4>Symptoms</h4>
                    <div className="rep">{foundPatient.sypmtoms}</div>
                </div>
                <div className="genrep">
                    <h4>Predicted Primary Disease</h4>
                    <div className="predictrep">{foundPatient.category}</div>
                </div>

            </div>
            
            </div>
            <div className="div4">
                <h4>Select the severity : </h4>
           <form>
            <label className="optns">
                <input name="optn" type="radio" value="Moderate" />
                Moderate
            </label>
            <label className="optns">
                <input name="optn" type="radio" value="Moderate" />
                Severe
            </label>
            <label className="optns">
                <input name="optn" type="radio" value="Moderate" />
                Normal
            </label>
           </form>
            </div>
           
        </div>
        </div>
        </>
    )
}

export default AppointInfo;