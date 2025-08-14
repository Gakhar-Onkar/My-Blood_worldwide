import React from 'react';
import './Buyblood.css';

const Buyblood = () => {

  const pricingData = [
    {
      service: 'Whole Blood Donation',
      price: 'Free',
      notes: 'Standard blood donation'
    },
    { service: 'Platelet Donation', price: 'Free', notes: 'Specialized donation for platelets' },
    { service: 'Plasma Donation', price: 'Free', notes: 'Plasma collection only' },
    { service: 'Double Red Cell Donation', price: 'Free', notes: 'Two units of red cells' },
    { service: 'Blood Typing Test', price: '₹250', notes: 'Basic blood type identification' },
    { service: 'Comprehensive Blood Panel', price: '₹1200', notes: 'Full health screening' },
    { service: 'Emergency Blood Reserve', price: '₹5000', notes: 'Guaranteed blood supply' },
    { service: 'VIP Donor Program', price: '₹3000/year', notes: 'Priority services & benefits' }
  ];

  return (<>
  <div className="buyblood">

    <div className='pricing-page'>
      
      <div className="pricing-container">
        <div className="header">
          <h1>MyBlood Services Pricing</h1>
          <p>Transparent costs for our life-saving services</p>
        </div>
        
        <div className="pricing-table-container">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index}>
                  <td>{item.service}</td>
                  <td className={item.price === 'Free' ? 'free' : 'paid'}>{item.price}</td>
                  <td>{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="footer-note">
          <p>* All donation services are free as they rely on volunteer donors</p>
          <p>** Testing and specialty services have associated costs</p>
        </div>
      </div>
    </div>
  </div>            
    </>
  );}

export default Buyblood;
