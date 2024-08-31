import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WardProvider } from './Contexts/WardContext'
import { BedProvider } from './Contexts/BedContext'
function App() {
 

  return (
    <>
    <WardProvider>
      <BedProvider >
    <Header />
    <Dashboard />
    </BedProvider>
    </WardProvider>

    </>
  )
}

export default App
