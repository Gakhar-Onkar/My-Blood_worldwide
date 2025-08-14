import React from 'react'
import './Footer.css';
import { FcSignature } from "react-icons/fc";





const Footer = () => {
  return (<>
    <div className='Footer' >
      <div>

      Warm regards,
      Team MyBlood
      "Every Drop Counts – Donate Today, Save a Life Tomorrow.
      </div>
      <br />
      <div>

      📞 +91 0123456789 | ✉ xyz@zyx.com | 🌐 MyBloodBank.com
      </div>
      <br />
      <br />
      <br />
      <div>

      &copy;  All rights reserved || Copyrights reserved || Since 1975
      </div>

      <FcSignature className='signature' />
    </div>
    </>


  )
}

export default Footer
