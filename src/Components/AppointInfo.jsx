import React from "react";
import Navbar from "./Navbar";
import './AppointInfo.css'

function AppointInfo(){
    const patients = {
          name: 'Rohit Kohli',
          category: 'Dermatology',
          severity: 'Low',
          doctorAssigned: 'Dr. Pradeep Kumari',
          selectedTimeSlot: '30 August | 12PM',
          id: 12345,
          user_id: 15045,
        }
console.log()
    return(
        <>
        <Navbar />
        <div className="maincontainer">
        <h1>Here is the appointment info</h1>
        <div className="infobox">
            <div className="div1">
                <div className="det">Name : {patients.name}</div>
                <div className="det">Appointment No. : {patients.id}</div>
                <div className="det">Patient ID: {patients.user_id}</div>
            </div>
            <div className="div2">
                <div id="div2_p1">Category : {patients.category}</div>
                <div id="div2_p1">Doctor Assigned: {patients.doctorAssigned}</div>
            </div>

            <div className="div3">
                <h3 id="baymaxhead">Baymax Report</h3>
                <div className="reports">
                <div className="genrep">
                    <h4>General Report</h4>
                    <div className="rep">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione atque ea recusandae, magni quas perspiciatis non ipsum quidem similique, ad voluptates dolores sit distinctio quis cumque! Eius, sint minus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione atque ea recusandae, magni quas perspiciatis non ipsum quidem similique, ad voluptates dolores sit distinctio quis cumque! Eius, sint minus?</div>
                </div>

                <div className="genrep">
                    <h4>Symptoms</h4>
                    <div className="rep">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ratione atque ea recusandae, magni quas perspiciatis non ipsum quidem similique, ad voluptates dolores sit distinctio quis cumque! Eius, sint minus?</div>
                </div>
                <div className="genrep">
                    <h4>Predicted Diseases</h4>
                    <div className="predictrep">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>

            </div>
            
            </div>
            <div className="div4">
                <h4>Select the severity of the disease</h4>
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