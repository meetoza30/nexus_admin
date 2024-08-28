import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Opd from './Components/Opd.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import AppointInfo from './Components/AppointInfo.jsx'
import IPDhome from './Components/Ipdhome.jsx'
import GWhome from './Components/GWhome.jsx'

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
    }
  
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  <StrictMode>
    <App />
  </StrictMode>
  </RouterProvider>
)
