import React from 'react'
import './Working.css';
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { MdAppRegistration } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { FaBottleDroplet } from "react-icons/fa6";





const Working = () => {
    return (
        <div className='working' >
            <div className="heading">
                <h1>Working of <span>MyBlood </span></h1>
            </div>
            <div className="workingcontainers">

                <div className="workingcontainer">
                    <div className="logow"><MdAppRegistration className='workinglogo' /></div>
                    <div className="title">Registration Process</div>
                    <div className="description">Sign up and schedule your first with ease</div>
                </div>
                <TbPlayerTrackNextFilled style={{ color: 'white', fontSize: '2rem' }} />

                <div className="workingcontainer">
                    <div className="logow"><MdHealthAndSafety className='workinglogo' /></div>
                    <div className="title">Health Screening</div>
                    <div className="description">A simple check-up to ensure you’re ready to donate</div>
                </div>
                <TbPlayerTrackNextFilled style={{ color: 'white', fontSize: '2rem' }} />

                <div className="workingcontainer">
                    <div className="logow"><FaBottleDroplet className='workinglogo' /></div>
                    <div className="title">Donation Day</div>
                    <div className="description">Our professional staff guide you through</div>
                </div>
            </div>
        </div>
    )
}

export default Working
