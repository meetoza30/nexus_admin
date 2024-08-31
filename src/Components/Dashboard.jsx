import React, { useState } from 'react';
import Dashcard from './Dashcard';
import './Dashboard.css';
// import './hamburger.css'; // Import CSS for the vertical navbar

function Dashboard() {

return(
    <>
      
        <h1 id='dashead'>Welcome Doctor! This is your Dashboard.</h1>
        <div className="container">
        <Dashcard cardname="Add a patient" img="add_patient" bgColor="green"/>
        <Dashcard cardname="Clinic (OPD)" img="opd" bgColor="red" />
        <Dashcard cardname="IPD" img="ipd" bgColor="orange"/>
        </div>
        <div className="container">
        <Dashcard cardname="LIS" img="lis" bgColor="FFA500"/>
        <Dashcard cardname="Store & Pharmacy" img="pharmacy" bgColor="FFA500"/>
        <Dashcard cardname="Billing" img="billing" bgColor="FFA500"/>
        </div>
      
    
    </>
  )
}

export default Dashboard;