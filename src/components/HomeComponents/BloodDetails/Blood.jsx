

import React, { useState } from 'react';
import './Blood.css';

const Blood = () => {
  const [selected, setSelected] = useState('A+');

  const bloodTypes = ['A+', 'O+', 'B+', 'AB+', 'A-', 'O-', 'B-', 'AB-'];

  const bloodCompatibility = {
    'A+': { give: ['A+', 'AB+'], take: ['A+', 'A-', 'O+', 'O-'] },
    'O+': { give: ['O+', 'A+', 'B+', 'AB+'], take: ['O+', 'O-'] },
    'B+': { give: ['B+', 'AB+'], take: ['B+', 'B-', 'O+', 'O-'] },
    'AB+': { give: ['AB+'], take: ['Everyone'] },
    'A-': { give: ['A+', 'A-', 'AB+', 'AB-'], take: ['A-', 'O-'] },
    'O-': { give: ['Everyone'], take: ['O-'] },
    'B-': { give: ['B+', 'B-', 'AB+', 'AB-'], take: ['B-', 'O-'] },
    'AB-': { give: ['AB+', 'AB-'], take: ['AB-', 'A-', 'B-', 'O-'] },
  };

  const giveList = selected ? bloodCompatibility[selected]?.give : [];
  const takeList = selected ? bloodCompatibility[selected]?.take : [];

  return (
    <div className='Blood'>
      <div className="bloodheading">Blood Details</div>

      <div className="bloodbox">
        <div className="differentbloods">
          {bloodTypes.map((type) => (
            <button
              key={type}
              className={`bloodbtn ${selected === type ? 'active' : ''}`}
              onClick={() => setSelected(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="blooddetails">
          <div className="bloodbox1">
            You can give to
            <div className="givedetails">
              {giveList.map((type, index) => (
                <span key={index} >
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div className="bloodbox2">
            You can take from
            <div className="takedetails">
              {takeList.map((type, index) => (<>
                <span key={index}>
                  {type}
                </span>
              </>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Blood;
