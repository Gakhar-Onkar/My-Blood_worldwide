import React from 'react'
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();
 
const handleSubmit = () => {
    navigate('/dashboardlogin'
    );
  };

  return (<>
  <div className="dashloginpage">

    <div class="dashlogin-box" onSubmit={handleSubmit}>
    <h2>Authority Login</h2>
    <form>
      <div class="dashinput-group">
        <label>Username</label>
        <input type="text" placeholder="Enter your username" required />
      </div>
      <div class="dashinput-group">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" required />
      </div>
      <button type="submit" onSubmit={handleSubmit}>Login</button>
    </form>
  </div>
  </div>

    </>
  )
}

export default Dashboard