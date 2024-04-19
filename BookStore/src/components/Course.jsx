import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Coursepage from './Coursepage'

function Course() {
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
      <Coursepage />
      </div>
      <Footer/>
    </>
  )
}

export default Course
