import React from 'react'
import Header from './compoments/header/Header'
import Footer from './compoments/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
<Header/>
<Outlet/>
<Footer/>
    </>
  )
}

export default Layout