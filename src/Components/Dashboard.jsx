import React, { useState } from 'react';
import Dashcard from './Dashcard';
import './Dashboard.css';
// import './hamburger.css'; // Import CSS for the vertical navbar

function Dashboard() {

return(
    <>
      
        <h1 id='dashead'>Welcome Doctor! This is your Dashboard.</h1>
        <div className="thecontainer">
        <div className="cardscontainer">
        <Dashcard cardname="Add a patient" img="addapatientfinalize" bgColor="green" link="add_a_patient"/>
        <Dashcard cardname="Clinic (OPD)" img="opdfinal" bgColor="red" link="opd"/>
        <Dashcard cardname="IPD" img="opd" bgColor="orange" link="ipd"/>
        </div>
        <div className="cardscontainer">
        <Dashcard cardname="LIS" img="lis" bgColor="FFA500"/>
        <Dashcard cardname="Store & Pharmacy" img="pharmacy" bgColor="FFA500"/>
        <Dashcard cardname="Billing" img="billing" bgColor="FFA500"/>
        </div>
        </div>
    
    </>
  )
}

export default Dashboard;