// import React, { useContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/Login/Login'
import Layout from './Components/Layout/Layout'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import AnotherHome from './Components/AnotherHome/AnotherHome'
import JobDetails from './Components/JobDetails/JobDetails'
import AllJobs from './Components/AllJobs/AllJobs'
import AdminPage from './Components/AdminPage/AdminPage'
import EmployerPage from './Components/EmployerPage/EmployerPage'
// import Home from './Components/Home/Home'
// import { tokenContext } from './Context/token'



const routes = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      // { path: 'home', element: <Home /> },
      { path: 'home', element: <AnotherHome /> },
      { path: 'JobDetails', element: <JobDetails /> },
      { path: 'AllJobs', element: <AllJobs /> },
      { path: 'AdminPage', element: <AdminPage /> },
      { path: 'EmployerPage', element: <EmployerPage /> },
      { path: '', element: <AnotherHome /> },
      // {
      //   path: 'home', element:
      //     <ProtectedRoutes>
      //       <Products />
      //     </ProtectedRoutes>
      // },
      // {
      //   path: '', element:
      //     <ProtectedRoutes>
      //       <Home />
      //     </ProtectedRoutes>
      // },
      // { path: '*', element: <NotFound /> },
    ],
  }
])



export default function App() {

  // const { setToken, token } = useContext(tokenContext)

  // useEffect(() => {
  //   if (localStorage.getItem("tkn") != null) {
  //     setToken(localStorage.getItem("tkn"))
  //   }
  // }, [])

  return <RouterProvider router={routes}>

  </RouterProvider>
}