import React from 'react'
import './Reviews.css';

const Reviews = () => {
  return (<>
    <div className='customerreviews' >
      <div className="reviewshead">
        Customer Reviews
      </div>
      <div className="reviewsconatiner">
        <div className="box">
          <div className="titlec">
            Life-Saving Platform!
          </div>
          <div className="stars">
            ❤️❤️❤️❤️❤️
          </div>
          <div className="descc">
            MyBlood made it incredibly easy to find a donor when my father needed an urgent transfusion. The response was quick, and the donor was verified and reliable. Truly a lifesaver—thank you!
          </div>
          <div className="author">
            By Rahul K.
          </div>
        </div>


        <div className="box">
          <div className="titlec">
            Smooth Donation Experience
          </div>
          <div className="stars">
            ❤️❤️❤️❤️
          </div>
          <div className="descc">
            I’ve donated blood multiple times through MyBlood, and their process is seamless. The team is professional, and I love getting updates on how my donation helped someone in need. Highly recommend!  </div>
          <div className="author">
            By Priya M.
          </div>
        </div>


        <div className="box">
          <div className="titlec">
            Life-Saving Connection
          </div>
          <div className="stars">
            ❤️❤️❤️❤️❤️
          </div>
          <div className="descc">
            When my mother needed an urgent blood transfusion, MyBlood found a compatible donor in record time. Their efficient system and caring staff made a stressful situation much easier to handle.
          </div>
          <div className="author">
            By Priya M.
          </div>
        </div>

        <div className="box">
          <div className="titlec">
            Reliable in Crisis
          </div>
          <div className="stars">
            ❤️❤️❤️
          </div>
          <div className="descc">
            After a car accident, we needed multiple blood units quickly. MyBlood coordinated with several donors and ensured we got what we needed. One star less only because the app had a minor glitch.
          </div>
          <div className="author">
            By Rajesh K.
          </div>
        </div>

        <div className="box">
          <div className="titlec">
            Exceptional Service
          </div>
          <div className="stars">
            ❤️❤️❤️❤️❤️
          </div>
          <div className="descc">
            As a regular blood recipient, I've used many services but MyBlood stands out. Their verification process is thorough and their donor network is extensive. They've helped me three times this year alone.
          </div>
          <div className="author">
            By Neha P.
          </div>
        </div>

      </div>\
    </div>
  </>
  )
}

export default Reviews
