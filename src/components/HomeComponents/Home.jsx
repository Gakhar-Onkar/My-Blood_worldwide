import React from 'react'
import Banner from './Banner/Banner.jsx'
import Reviews from './Customer_Reviews/Reviews.jsx';
import Working from './Working/Working.jsx';
import Footer from './Footer/Footer.jsx';
import Hospitals from './HospitalGroups/Hospitals.jsx';
import Blood from './BloodDetails/Blood.jsx';
import './Home.css';



const Home = () => {
  return (<>
    <div className='homepage' >
      <div className="welcomeinfo">
        <div className="welcome">
          Welcome to <span>MyBlood</span>
        </div>
        <div className="quote">
          <marquee behavior="" direction="down">LifeSaver <br /> Blessed <br /> Gratitude <br /> Courage </marquee>
        </div>
      </div>
      <div className="supervisor">
        <div className="supervisordetails">

          <span className='supervisorname' >Dr. Rajesh Malhotra</span>
          <br />
          <span><span>Position: </span>Senior Blood Bank Supervisor & Hematology Expert</span>

          <br />
          <span><span>Blood Bank: </span>MyBlood National Headquarters (Delhi)</span>

          <br />
          <span><span>Experience: </span>15+ Years in Blood Transfusion Services</span>

          <br />
        </div>
      </div>
      
    </div>
    <Banner />
    <Working />
    <Reviews />
    <Blood />
    <Hospitals />
    <Footer />
  </>
  )
}

export default Home
