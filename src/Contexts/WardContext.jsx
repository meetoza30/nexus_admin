import {useContext, createContext, useState} from 'react'

const wardcontext = createContext();

const wardData = {
    gw1: {
        totalCapacity: 10,
        filledBeds: 4,
        beds:[
            {id: 1, color:'green', isAllocated: false, assignedPatient: null},
            {id: 2, color:'green', isAllocated: false, assignedPatient: null},
            {id: 3, color:'red', isAllocated: true, assignedPatient: 5726},
            {id: 4, color:'green', isAllocated: false, assignedPatient: 8752},
            {id: 5, color:'green', isAllocated: false, assignedPatient: null},
            {id: 6, color:'red', isAllocated: true, assignedPatient: 2146},
            {id: 7, color:'green', isAllocated: false, assignedPatient: null},
            {id: 8, color:'green', isAllocated: false, assignedPatient: null},
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
            {id: 3, color:'red', isAllocated: true, assignedPatient: 5726},
            {id: 4, color:'red', isAllocated: true, assignedPatient: 8752},
            {id: 5, color:'green', isAllocated: false, assignedPatient: null},
            {id: 6, color:'red', isAllocated: true, assignedPatient: 9874},
            {id: 7, color:'green', isAllocated: false, assignedPatient: null},
            {id: 8, color:'red', isAllocated: true, assignedPatient: 2146},
            {id: 9, color:'green', isAllocated: false, assignedPatient: null},
            {id: 10, color:'green', isAllocated: false, assignedPatient: null},
        ]
    },
    patients:[
        {  id: 12345,
            name: 'Ranveer Pensalwar',
            category: 'Drug Reaction',
            severity: 'Low',
            doctorAssigned: 'Dr. Pradeep Kumari',
            selectedTimeSlot: '10 September | 12PM',
           
            patientid: 2456,
            user_symptoms: "I've been having a really uncomfortable pain in my stomach. It feels like a burning sensation when I pee, and my skin has been breaking out in rashes. Lately, I've noticed some spotting when I go to the bathroom, and I've been feeling itchy too.",
            sypmtoms: "Stomach Pain, burning micturition, skin rash, spotting urination, Itching",
            isAllocated: false
          },
          {
            id: 54321,
            name: 'Darshith Shetty',
            category: 'Malaria',
            severity: 'Medium',
            doctorAssigned: 'Dr. Amit Seth',
            selectedTimeSlot: '10 September | 12PM',
            
            patientid: 6245,
            user_symptoms: "I've been feeling really sick lately. I've been sweating a lot, getting frequent headaches, and feeling nauseous. I've also had diarrhea several times, and my temperature has been very high. I've been shivering a lot, and my whole body aches.",
            sypmtoms: "sweating, headache, nausea, diarrhea, high fever, chills, Body pain.",
            isAllocated: false
          },
          {
            patientid: 5726,
            name: 'Meet Oza',
            category: 'Tuberculosis',
            severity: 'Medium',
            doctorAssigned: 'Dr. Amit Seth',
            selectedTimeSlot: '8 September | 5PM',
            id: 15417,
            
            user_symptoms: "I've been feeling a bit under the weather. I have a low-grade fever, and I've been vomiting. I'm also feeling tired and weak, and I have a lot of phlegm. My chest hurts, and I've been coughing a lot. My eyes have turned yellow, and I've noticed some swollen lymph nodes in the past few days.",
            sypmtoms: "Fever, Vomiting, Malaise, Phlegm , Chest Pain, Yellowing of Eyes , Swelled Lymph Nodes, Cough",
            isAllocated: true
          },
          {
            patientid: 2146,
            name: 'Komal Patil',
            category: 'Common Cold',
            severity: 'Medium',
            doctorAssigned: 'Dr. Pratham Gaikwad',
            selectedTimeSlot: '9 September | 1PM',
            id: 51221,
            
            user_symptoms: "I've been feeling really bad lately. My muscles ache, and I've lost my sense of smell. I've been coughing occasionally, and my sinuses feel really congested. My nose has been running a lot, and I've had a high fever, headache, and swollen lymph nodes for the past few days.",
            sypmtoms: "Stomach Pain, burning micturition, skin rash, spotting urination, Itching",
            isAllocated: true
    
          }
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
