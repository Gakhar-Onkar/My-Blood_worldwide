import React, { useState } from 'react';
import './Enquiry.css';
import { Link } from 'react-router-dom';

const Enquiry = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Who can donate blood?",
      answer: "Most people in good health, at least 17 years old (16 with parental consent in some states), and weighing at least 110 pounds can donate blood. You must also pass the physical and health history assessments at the donation site."
    },
    {
      question: "How often can I donate blood?",
      answer: "You can donate whole blood every 56 days (8 weeks). Platelet donations can be made more frequently - up to 24 times per year. Your body replaces the donated blood components within a few weeks."
    },
    {
      question: "Does donating blood hurt?",
      answer: "You may feel a slight pinch when the needle is inserted, but the donation process itself is generally painless. Most donors report feeling only minor discomfort during the procedure."
    },
    {
      question: "How long does a blood donation take?",
      answer: "The actual blood donation typically takes about 8-10 minutes. The entire process, from registration to post-donation refreshments, takes about an hour."
    },
    {
      question: "What should I do before donating blood?",
      answer: "Eat a healthy meal before your donation, drink plenty of water (an extra 16 oz), and ensure you've had adequate sleep. Avoid fatty foods before donating as they can affect tests we do on the blood."
    },
    {
      question: "Is it safe to donate blood?",
      answer: "Yes, donating blood is safe. All needles and equipment used are sterile, used only once, and then discarded. There's no risk of contracting any disease through blood donation."
    },
    {
      question: "What blood types are most needed?",
      answer: "All blood types are needed. Type O-negative blood (the universal donor type) is especially valuable because it can be transfused to patients with any blood type in emergency situations."
    },
    {
      question: "Can I donate if I have a tattoo or piercing?",
      answer: "In most cases, yes, as long as the tattoo or piercing was done at a licensed facility in your state and has fully healed (typically 3-6 months). Check with your local blood center for specific guidelines."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return ( 
    <div className='enquirypage'>
      <div className="enquire">
      
      <div className="faq-container">
        <div className="header">
          <h1>Blood Bank FAQs</h1>
          <p>Find answers to common questions about blood donation</p>
        </div>
        
        {faqs.map((faq, index) => (
          <div 
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
              >
              <span>{faq.question}</span>
              <span className="faq-toggle">
                {activeIndex === index ? '×' : '+'}
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='enquirycontact'>
        For more details , <Link to="/contactus" className='buylink' >Contact Us</Link>
      </div>
        </div>
    </div>
  );
};

export default Enquiry;