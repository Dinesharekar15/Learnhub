import React from 'react'
import Header from '../App/Header'
import Sidebar from '../App/Sidebar'
import Courses from '../App/Courses'
import Footer from '../App/Footer'
const Dashboard = () => {
  return (
    <>
  {/* Header (Sticky at the Top) */}
  <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
    <Header />
  </div>

  {/* Sidebar and Main Content Wrapper */}
  <div className="flex w-full min-h-screen pt-16">
    {/* Sidebar (Sticky to the Left) */}
    <div className="w-full h-screen fixed top-16 left-0  shadow-md">
      <Sidebar />
    </div>

    {/* Main Content (Pushes Sidebar) */}
    <div className="flex-1 ml-64 ">
      <div >
      <Courses />
      </div>
      <div>
        <Footer/>
      </div>
      {/* <Footer /> */}

    </div>
  </div>
</>

  )
}

export default Dashboard
