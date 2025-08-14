import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const navigate = useNavigate();
  return (<>
    
<div className="Navbar">
        <div className="logo" onClick={() => navigate('/')}>
        <img src="https://imgs.search.brave.com/PLI7dMnn3okwdx3cnjGMk6eDKq_1sTSZG33kqGJAZ2o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9ibG9vZC1i/YW5rLTE1OTM4MTIt/MTM0ODc3MS5wbmc_/Zj13ZWJwJnc9MTI4" alt=""  ></img>
        <div className='logotitle' >MyBlood</div>
        </div>

    <div className='navlinks'>
      <div className="Navigations">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/enquiry">Enquiry</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/policy">Policies</Link></li>
            <li><Link to="/buyblood" className='buylink' >Charges</Link></li>
            <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLSewNWJ2JFfwieCej3EyRLajR_Ejlt5NF4SfkOUPLBGhmIHK5A/viewform?usp=header" className='buylink' target="_blank" >Join us</Link></li>
          </ul>
        </div>
    </div>
      </div>

    </>
  )
}

export default Navbar
