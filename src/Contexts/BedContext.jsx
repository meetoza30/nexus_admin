import { createContext } from "react";
import { useState, useEffect } from "react";

const initialState = {
   wards:{
    gw1: {beds:[
        {id: 1, color:'green', isAllocated: false, assignedPatient: null},
        {id: 2, color:'green', isAllocated: false, assignedPatient: null},
        {id: 3, color:'red', isAllocated: false, assignedPatient: 8754},
        {id: 4, color:'red', isAllocated: false, assignedPatient: 8752},
        {id: 5, color:'green', isAllocated: false, assignedPatient: null},
        {id: 6, color:'red', isAllocated: false, assignedPatient: 9874},
        {id: 7, color:'green', isAllocated: false, assignedPatient: null},
        {id: 8, color:'red', isAllocated: false, assignedPatient: 9870},
        {id: 9, color:'green', isAllocated: false, assignedPatient: null},
        {id: 10, color:'green', isAllocated: false, assignedPatient: null},
    ]},
    gw2: {beds:[
        {id: 1, color:'green', isAllocated: false, assignedPatient: null},
        {id: 2, color:'green', isAllocated: false, assignedPatient: null},
        {id: 3, color:'red', isAllocated: false, assignedPatient: 8754},
        {id: 4, color:'red', isAllocated: false, assignedPatient: 8752},
        {id: 5, color:'green', isAllocated: false, assignedPatient: null},
        {id: 6, color:'red', isAllocated: false, assignedPatient: 9874},
        {id: 7, color:'green', isAllocated: false, assignedPatient: null},
        {id: 8, color:'red', isAllocated: false, assignedPatient: 9870},
        {id: 9, color:'green', isAllocated: false, assignedPatient: null},
        {id: 10, color:'green', isAllocated: false, assignedPatient: null},
    ]}
   },
   patients:[
    {id: 8754, name:"Rohit Kohli", isAllocated: true},
    {id: 8752, name:"Joe Root", isAllocated: true},
    {id: 9874, name:"Steve", isAllocated: true},
    {id: 9870, name:"Babar", isAllocated: true},
    {id: 7410, name:"Bravo", isAllocated: false},
    {id: 7414, name:"Gayle", isAllocated: false},
   ]
}

const BedContext = createContext(initialState);
const BedProvider = ({children})=>{
    const [state, setState] = useState(initialState);
    
    const assignBed = (wardID, bedID, patientID)=>{
        setState(prevState =>{
            const updateWards = {...prevState.wards};
            updateWards[wardID].beds[bedID] = 'red';
            return {...prevState, wards:updateWards};
        });
    };

    return(
        <BedContext.Provider value={{state, assignBed}}>
            {children}
        </BedContext.Provider>
    )
}

export {BedProvider, BedContext}