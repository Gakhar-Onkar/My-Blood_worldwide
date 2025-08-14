import React from 'react';
import './User.css';
import { useNavigate, useLocation } from 'react-router-dom';

const User = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { username, phoneNumber } = location.state || {};

  const donorData = {
    bloodType: "O+",
    donorId: "#D78945",
    fullName: username || "Not a user",
    gender: phoneNumber ? "Male" : "Not a user",
    dob: "15/04/1990",
    contact: phoneNumber ? `${phoneNumber} ` : "Not a user",
    lastDonation: "20/05/2025",
    totalDonations: 7,
    nextDonation: "20/11/2025",
    healthNotes: "Healthy",
    badges: ["Frequent Donor", "Lifesaver Award"]
  };
  return (<>
    <div className="userprofile">

      <div className="profile-container">
        <div className="profile-header">
          <h1>BLOOD DONOR PROFILE</h1>
          <div className="blood-type">{donorData.bloodType}</div>
        </div>

        <div className="profile-section">
          <h2><span className="red-underline">Personal Details</span></h2>
          <div className="info-grid">
            <div>
              <p><span className="label">Full Name:</span> {donorData.fullName}</p>
              <p><span className="label">Gender:</span> {donorData.gender}</p>
              <p><span className="label">Id:</span> {donorData.donorId}</p>
            </div>
            <div>
              <p><span className="label">Date of Birth:</span> {donorData.dob}</p>
              <p><span className="label">Contact:</span> {donorData.contact}</p>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2><span className="red-underline">Donation Information</span></h2>
          <div className="info-grid">
            <div>
              <p><span className="label">Last Donation:</span> {donorData.lastDonation}</p>
              <p><span className="label">Total Donations:</span> <span className="highlight-red">{donorData.totalDonations}</span></p>
            </div>
            <div>
              <p><span className="label">Next Eligible:</span> {donorData.nextDonation}</p>
              <p><span className="label">Health Notes:</span> {donorData.healthNotes}</p>
            </div>
          </div>
        </div>

        <div className="profile-section">
          <h2><span className="red-underline">Achievements</span></h2>
          <div className="badges-container">
            {donorData.badges.map((badge, index) => (
              <span key={index} className="badge">{badge}</span>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          {/* <button className="btn-red" onClick={() => {
            navigate('/contactus');
          }
          }  >Schedule Next Donation</button> */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQsclpw19XTr4TBDqRaqqQ81GRytPySnCh_TFZsE6GkgIiRw/viewform?usp=sharing&ouid=108501510933028181913" className='btn-red' target='_blank'>Schedule next donation</a>
        </div>
      </div>
    </div>
  </>
  );
};

export default User;