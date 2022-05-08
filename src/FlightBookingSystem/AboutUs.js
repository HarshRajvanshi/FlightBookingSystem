import Navbar from './Navbar'
import React from 'react'

import './AboutUs.css'

import Footer from './Footer'
import userimag from './user.jpg'

function Aboutus() {
  return (<div>
    <Navbar />
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>King Flayer is flight booking system</p>
        <p>we provide user friendly interface to the user to book international flights taht are available</p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={userimag} alt="amar" className='center' />
            <div className="container">
              <h2>Amar</h2>
              <p className="title">Project Partner</p>
              <p>contibuted admin user interface.</p>
              <p>amar@gmail.com.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={userimag} alt="harsh" className='center' />
            <div className="container">
              <h2>Harsh</h2>
              <p className="title">Project Partner</p>
              <p>contributed home interface and conntivty among diffrent module of projet.</p>
              <p>harsh@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={userimag} alt="Mayank" className='center' />
            <div className="container">
              <h2>Mayank</h2>
              <p className="title">Project Partner</p>
              <p>contibuted Login and SignUp page.</p>
              <p>mayank@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={userimag} alt="Monika" className='center' />
            <div className="container">
              <h2>Monika</h2>
              <p className="title">Project Partner</p>
              <p>contributed to home page and conntivty among diffrent module of projet.</p>
              <p>monika@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={userimag} alt="Manish" className='center' />
            <div className="container">
              <h2>Manish Rawat</h2>
              <p className="title">Project Partner</p>
              <p>contributed serch flight.</p>
              <p>manishraw098@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={userimag} alt="raghav" className='center' />
            <div className="container">
              <h2>raghav</h2>
              <p className="title">Project Partner</p>
              <p>contributed book now.</p>
              <p>raghav@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
export default Aboutus