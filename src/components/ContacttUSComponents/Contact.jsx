import React from 'react'
import './Contact.css';

const Contact = () => {

  const handleSubmit = () => {
    alert("We will reach you shortly.Please wait ❤️");
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (<>
    <div className="contactpage">
      <div className="contactus " onSubmit={handleSubmit}>

        <div class="contact-section">
          <div class="contact-card">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Drop us a message!</p>
            <form>
              <input type="text" placeholder="Your Name" required onChange={handleInputChange}/>
              <input type="tel" placeholder="Your phone number" required onChange={handleInputChange}/>
              <input type="email" placeholder="Your Email" required onChange={handleInputChange} />
              <input type="text" placeholder="Your Message" rows="5" required onChange={handleInputChange} ></input>
              <button type="submit" onSubmit={handleSubmit} >Send Message</button>
            </form>
          </div>
        </div>

      </div>
    </div>

  </>)
}

export default Contact
