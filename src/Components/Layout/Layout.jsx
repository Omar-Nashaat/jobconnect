import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import AnotherNav from '../AnotherNav/AnotherNav'


export default function Layout() {
  return <>
    <AnotherNav />

    <Outlet />

    {/* <Footer /> */}
  </>
}
