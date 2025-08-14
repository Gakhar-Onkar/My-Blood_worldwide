import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const gridItems = [
    {
      id: 1,
      title: "Blood Donation",
      description: "Learn about the blood donation process and how you can save lives by donating blood regularly.",
      image: "https://tse3.mm.bing.net/th/id/OIP.iZAZBGUHnhpCu6GlrJnopAHaEc?pid=Api&P=0&h=180"
    },
    {
      id: 2,
      title: "Blood Types",
      description: "Discover the different blood types and why some are more in demand than others.",
      image: "https://tse4.mm.bing.net/th/id/OIP.rKts5xm-6Hk18mdofODOjgHaHH?pid=Api&P=0&h=180"
    },
    {
      id: 3,
      title: "Plasma Donation",
      description: "Find out how plasma donation differs from whole blood donation and who can benefit.",
      image: "https://tse4.mm.bing.net/th/id/OIP.GxJtx2qmMeays-zYz2Un4gHaD6?pid=Api&P=0&h=180"
    },
    {
      id: 4,
      title: "Platelets",
      description: "Understand the importance of platelet donations for cancer patients and others in need.",
      image: "https://tse2.mm.bing.net/th/id/OIP.3YcxLyUAJ_2TbaCeR7Uq1wHaHa?pid=Api&P=0&h=180"
    },
    {
      id: 5,
      title: "Donor Eligibility",
      description: "Check if you meet the requirements to become a blood donor in our facility.",
      image: "https://tse3.mm.bing.net/th/id/OIP.c-KkMrfJYxXYMM3dyDoO4QHaHa?pid=Api&P=0&h=180"
    },
    {
      id: 6,
      title: "Blood Testing",
      description: "Learn about the various tests we perform on donated blood to ensure safety.",
      image: "https://tse2.mm.bing.net/th/id/OIP.U2eETNAjnX57bIjmQmnthgHaE8?pid=Api&P=0&h=180"
    },
    {
      id: 7,
      title: "Storage & Handling",
      description: "See how we store and handle blood products to maintain their quality and safety.",
      image: "https://tse1.mm.bing.net/th/id/OIP.jQTzvO8XUHfL4-PA3oQIlgHaFi?pid=Api&P=0&h=180"
    },
    {
      id: 8,
      title: "Donor Benefits",
      description: "Discover the health benefits and rewards that come with being a regular blood donor.",
      image: "https://tse2.mm.bing.net/th/id/OIP.M_E0yD27qfzbpdIxywassQHaFS?pid=Api&P=0&h=180"
    },
    {
      id: 9,
      title: "Blood Drives",
      description: "Find upcoming blood drive events in your area and how to participate or volunteer.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 10,
      title: "Donor Appreciation",
      description: "See how we recognize and thank our regular donors for their life-saving contributions.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 11,
      title: "Blood Shortages",
      description: "Learn which blood types are currently in critical shortage and how you can help.",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 12,
      title: "Donation Safety",
      description: "Understand the rigorous safety protocols we follow during blood collection.",
      image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 13,
      title: "Blood Research",
      description: "Discover how donated blood contributes to medical research and advancements.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 14,
      title: "Mobile Units",
      description: "Track our mobile blood collection units and their schedules across the region.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 15,
      title: "Donor Health",
      description: "Learn about the health benefits donors receive from regular blood donation.",
      image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 16,
      title: "Emergency Response",
      description: "How our blood bank responds to emergencies and mass casualty events.",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className='grid-page'>
      
      <div className="grid-container">
        <div className="header">
          <h1>Blood Bank Gallery</h1>
          <p>Explore our comprehensive range of blood-related services</p>
        </div>
        
        <div className="grid">
          {gridItems.map((item) => (
            <div className="grid-item" key={item.id}>
              <div className="image-container">
                <img src={item.image} alt={item.title} />
                <div className="overlay"></div>
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
