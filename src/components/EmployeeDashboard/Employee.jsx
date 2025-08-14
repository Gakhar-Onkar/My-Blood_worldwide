
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Employee.css';

const DonationIcon = () => <span className="icon">🩸</span>;
const AlertIcon = () => <span className="icon">⚠️</span>;

const Employee = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [urgentAlerts] = useState([
    "O- blood supply critical (2 units remaining)",
    "Platelet donation scheduled for tomorrow needs confirmation",
    "Equipment maintenance due this week"
  ]);
  

  const [todaydonation, settodaydonation] = useState(() => {
    const saved = localStorage.getItem('todayDonations');
    return saved !== null ? parseInt(saved) : 29;
  });

  useEffect(() => {
    localStorage.setItem('todayDonations', todaydonation);
  }, [todaydonation]);

  const [staff, setstaff] = useState(() => {
    const saved = localStorage.getItem('staff');
    return saved !== null ? parseInt(saved) : 21;
  });

  useEffect(() => {
    localStorage.setItem('staff', staff);
  }, [staff]);

  const [schedule, setschedule] = useState(() => {
    const saved = localStorage.getItem('schedule');
    return saved !== null ? parseInt(saved) : 23;
  });

  useEffect(() => {
    localStorage.setItem('schedule', schedule);
  }, [schedule]);

  const [bloodInventory, setBloodInventory] = useState(() => {
    const saved = localStorage.getItem('bloodInventory');
    return saved !== null ? JSON.parse(saved) : [
      { type: 'O+', units: 28, status: 'healthy' },
      { type: 'O-', units: 2, status: 'critical' },
      { type: 'A+', units: 15, status: 'moderate' },
      { type: 'A-', units: 8, status: 'moderate' },
      { type: 'B+', units: 12, status: 'healthy' },
      { type: 'B-', units: 5, status: 'moderate' },
      { type: 'AB+', units: 6, status: 'healthy' },
      { type: 'AB-', units: 3, status: 'moderate' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('bloodInventory', JSON.stringify(bloodInventory));
  }, [bloodInventory]);

  const updateBloodUnits = (index, change) => {
    setBloodInventory(prev => {
      const newInventory = [...prev];
      const newUnits = newInventory[index].units + change;
      
      newInventory[index].units = Math.max(0, newUnits);
      
      if (newInventory[index].units <= 3) {
        newInventory[index].status = 'critical';
      } else if (newInventory[index].units <= 10) {
        newInventory[index].status = 'moderate';
      } else {
        newInventory[index].status = 'healthy';
      }
      
      return newInventory;
    });
  };

  const recentDonations = [
    { donor: 'John Smith', type: 'Whole Blood', date: '2023-06-15', amount: '450ml' },
    { donor: 'Sarah Johnson', type: 'Platelets', date: '2023-06-14', amount: '1 unit' },
    { donor: 'Michael Brown', type: 'Whole Blood', date: '2023-06-14', amount: '450ml' },
    { donor: 'Emily Davis', type: 'Plasma', date: '2023-06-13', amount: '600ml' }
  ];

  return (
    <div className='dashboard-page'>

      <div className="dashboard-container">
        <div className="sidebar">
          <div className="logo">
            <h2>MyBlood <span>Dashboard</span></h2>
          </div>

          <nav>
            <ul>
              <li className={"active"}>
                <DonationIcon /> Overview
              </li>
            </ul>
          </nav>

          <div className="user-profile">
            <div className="avatar">
              ⚕
            </div>
            <div className="user-info">
              <strong>Admin</strong>
              <span>Admin</span>
            </div>
          </div>
        </div>

        <div className="main-content">
          <header>
            <h1>MyBlood Bank Dashboard</h1>
            <div className="date-display">{new Date().toLocaleDateString('en-US')}</div>
          </header>

          <div className="alerts-section">
            <h2><AlertIcon /> Urgent Alerts</h2>
            <div className="alerts-grid">
              {urgentAlerts.map((alerts, index) => (
                <div key={index} className="alert-card critical">
                  <div className="alert-content">
                    <h3>Critical Alert</h3>
                    <p>{alerts}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="stats-section">
            <div className="stat-card">
              <h3>Today's Donations</h3>
              <div className="stat-value">
                <div className="minusdonation changedonations" onClick={() => {settodaydonation(prev => prev - 1);}}>-</div>
                <div className="donations">{todaydonation}</div>
                <div className="plusdonation changedonations" onClick={() => {settodaydonation(prev => prev + 1);}}>+</div>
              </div>
            </div>

            <div className="stat-card">
              <h3>Inventory Status</h3>
              <div className="stat-value">
                {bloodInventory.reduce((total, item) => total + item.units, 0)} units
              </div>
            </div>

            <div className="stat-card">
              <h3>Scheduled Donations</h3>
              <div className="stat-value">
                <div className="minusdonation changedonations" onClick={() => {setschedule(prev => prev - 1);}}>-</div>
                <div className="donations">{schedule}</div>
                <div className="plusdonation changedonations" onClick={() => {setschedule(prev => prev + 1);}}>+</div>
              </div>
            </div>

            <div className="stat-card">
              <h3>Staff On Duty</h3>
              <div className="stat-value">
                <div className="minusdonation changedonations" onClick={() => {setstaff(prev => prev - 1);}}>-</div>
                <div className="staff">{staff}</div>
                <div className="plusdonation changedonations" onClick={() => {setstaff(prev => prev + 1);}}>+</div>
              </div>
            </div>
          </div>

          <div className="inventory-section">
            <h2>Blood Inventory</h2>
            <div className="inventory-grid">
              {bloodInventory.map((bloodType, index) => (
                <div key={index} className={`blood-type-card ${bloodType.status} blodinventory`}>
                  <div className="blood-type">{bloodType.type}</div>
                  <div className="units">
                    <div className="minusunits changeunits" onClick={() => updateBloodUnits(index, -1)}>-</div>
                    {bloodType.units} units
                    <div className="plusunits changeunits" onClick={() => updateBloodUnits(index, 1)}>+</div>
                  </div>
                  <div className="status-indicator"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="donations-section">
            <h2>Recent Donations</h2>
            <table className="donations-table">
              <thead>
                <tr>
                  <th>Donor</th>
                  <th>Type</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentDonations.map((donation, index) => (
                  <tr key={index}>
                    <td>{donation.donor}</td>
                    <td>{donation.type}</td>
                    <td>{donation.date}</td>
                    <td>{donation.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;