import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner' >
      <div className="overlay-content">
        <div className="title">
          <h1>Welcome to <span> MyBlood</span> – Your Lifeline in Times of Need!</h1>
        </div>
        <div className="bannerdescription">
          At <span>MyBlood</span>, we are dedicated to saving lives by connecting blood donors with those in urgent need. Our mission is simple yet powerful: to ensure that no patient ever suffers due to a shortage of blood. Whether you're a compassionate donor looking to make a difference or someone seeking a safe and reliable blood supply, MyBlood provides a seamless, secure, and efficient platform. With real-time updates, verified donors, and a user-friendly interface, we bridge the gap between generosity and necessity. Join us in our lifesaving journey—because every drop counts, and together, we can create a healthier, stronger community. Donate today. Save a life tomorrow.
        </div>
      </div>

    </div>
  )
}

export default Banner
