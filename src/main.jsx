import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Opd from './Components/Opd.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import AppointInfo from './Components/AppointInfo.jsx'
import IPDhome from './Components/Ipdhome.jsx'
import GWhome from './Components/GWhome.jsx'
import GWpage from './Components/GWpage.jsx'
import { WardProvider } from './Contexts/WardContext.jsx'
import PatientDetails from './Components/PatientDetails.jsx'
import BedAssign from './Components/BedAssign.jsx'
import AddPatient from './Components/AddPatient.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  
    {
      path: '/opd',
      element: <Opd />
    },
    {
      path: '/add_a_patient',
      element: <AddPatient />
    },
    {
      path: '/opd/:id',
      element: <AppointInfo />
    },
    {
      path: '/ipd',
      element: <IPDhome />
    },
    {
      path: '/ipd/general_ward',
      element: <GWhome />
    },
    {
      path: '/ipd/general_ward/:gw',
      element: <GWpage />

    },
    {
      path: '/ipd/general_ward/:gw/patients/:patientID',
      element: <PatientDetails />

    },
    // {
    //   path: '/ipd/general_ward/:gw/patients',
    //   element: <BedAssign />

    // }
  
])

createRoot(document.getElementById('root')).render(
  <WardProvider >
  <RouterProvider router={router}>
  <StrictMode>
    <App />
  </StrictMode>
  </RouterProvider>
  </WardProvider>
)
