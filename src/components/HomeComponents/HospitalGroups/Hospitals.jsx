import React from 'react'
import './Hospitals.css';
import { FaHospital } from "react-icons/fa";
import { FaHospitalSymbol } from "react-icons/fa";
import { GiHospitalCross } from "react-icons/gi";
import { PiHospitalFill } from "react-icons/pi";





const Hospitals = () => {
  return (
    <div className='Hospitals' >
      <div className="hospitalsheading">
        Group Hospitals
      </div>
      <div className="boxes">

        <div className="hospitalsbox">
          <div className="logoh">
            <FaHospital className='hospitallogo' />
          </div>
          <div className="hospitalstitle">
            Lifeline Hospitals
          </div>
          <div className="desch">
            Partnered with MyBlood for 5+ years, ensuring 24/7 blood supply.
          </div>
          <div className="location">
            Mumbai, Delhi, Bangalore
          </div>
        </div>
        <div className="hospitalsbox">
          <div className="logoh">
            <FaHospitalSymbol className='hospitallogo' />

          </div>
          <div className="hospitalstitle">
            Sunrise Medical Group
          </div>
          <div className="desch">
            Trusts MyBlood for rare blood type reserves and fast delivery.
          </div>
          <div className="location">
            Chennai, Hyderabad, Pune
          </div>
        </div>
        <div className="hospitalsbox">
          <div className="logoh">
            <GiHospitalCross className='hospitallogo' />

          </div>
          <div className="hospitalstitle">
            Apollo Healthcare
          </div>
          <div className="desch">
            Exclusive blood bank partner for emergency transfusions.
          </div>
          <div className="location">
           Pan-India | 50+ Branches
          </div>
        </div>
        <div className="hospitalsbox">
          <div className="logoh">
            <PiHospitalFill className='hospitallogo' />

          </div>
          <div className="hospitalstitle">
            GreenCross Healthcare
          </div>
          <div className="desch">
            Relies on MyBlood’s donor network for critical patient needs.
          </div>
          <div className="location">
            Kolkata, Ahmedabad, Kochi
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hospitals
