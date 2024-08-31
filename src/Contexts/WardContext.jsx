import {useContext, createContext, useState} from 'react'

const wardcontext = createContext();

const wardData = {
    gw1: {
        totalCapacity: 10,
        filledBeds: 4,
        beds:[
            {id: 1, color:'green', isAllocated: false, assignedPatient: null},
            {id: 2, color:'green', isAllocated: false, assignedPatient: null},
            {id: 3, color:'red', isAllocated: true, assignedPatient: 8754},
            {id: 4, color:'red', isAllocated: true, assignedPatient: 8752},
            {id: 5, color:'green', isAllocated: false, assignedPatient: null},
            {id: 6, color:'red', isAllocated: true, assignedPatient: 9874},
            {id: 7, color:'green', isAllocated: false, assignedPatient: null},
            {id: 8, color:'red', isAllocated: true, assignedPatient: 9870},
            {id: 9, color:'green', isAllocated: false, assignedPatient: null},
            {id: 10, color:'green', isAllocated: false, assignedPatient: null},
        ]
    },
    gw2: {
        totalCapacity: 15,
        filledBeds: 6,
        beds:[
            {id: 1, color:'green', isAllocated: false, assignedPatient: null},
            {id: 2, color:'green', isAllocated: false, assignedPatient: null},
            {id: 3, color:'red', isAllocated: true, assignedPatient: 8754},
            {id: 4, color:'red', isAllocated: true, assignedPatient: 8752},
            {id: 5, color:'green', isAllocated: false, assignedPatient: null},
            {id: 6, color:'red', isAllocated: true, assignedPatient: 9874},
            {id: 7, color:'green', isAllocated: false, assignedPatient: null},
            {id: 8, color:'red', isAllocated: true, assignedPatient: 9870},
            {id: 9, color:'green', isAllocated: false, assignedPatient: null},
            {id: 10, color:'green', isAllocated: false, assignedPatient: null},
        ]
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

export const WardProvider = ({children})=>{

    const [state, setState] = useState({ wardData});
    
    const assignBed = (wardID, bedID) => {
        setState(prevState => {
            // Create a deep copy of the previous state
            const updatedWards = { ...prevState.wardData };
            const updatedBeds = updatedWards[wardID].beds.map(bed =>
                bed.id === bedID ? { ...bed, color: 'red', isAllocated: true } : bed
            );

            // Update the ward's beds with the new bed information
            updatedWards[wardID] = { ...updatedWards[wardID], beds: updatedBeds };

            return { ...prevState, wardData: updatedWards };
        });
    };
    return(
        <>
        <wardcontext.Provider value={{ wards : state.wardData,assignBed}}>
            {children}
        </wardcontext.Provider>
        </>

    )
}

export default wardcontext;
