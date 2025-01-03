import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './commoncomponent/Footer'

export default function Commonroute() {
  return (
    <div>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}
