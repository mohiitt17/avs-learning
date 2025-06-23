import React from 'react'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import "./App.css"
import Nav from './components/Nav'
import HeadText from "./components/HeadText"

const App = () => {
  return (
    <>
    <HeadText />
        <Nav />
        <Outlet />
        <Footer />
        </>
  )
}

export default App