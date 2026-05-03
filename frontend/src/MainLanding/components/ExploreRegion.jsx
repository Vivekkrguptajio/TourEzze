import React, { useState } from "react";
import { X } from "lucide-react";
import "../styles/FinalSections.css";

const regions = [
  { id: 1, name: "Ranchi", desc: "The City of Waterfalls, famous for its lush landscapes and vibrant culture." },
  { id: 2, name: "Jamshedpur", desc: "The Steel City, known for Jubilee Park and excellent urban planning." },
  { id: 3, name: "Dhanbad", desc: "The Coal Capital, featuring ancient temples and deep industrial heritage." },
  { id: 4, name: "Bokaro", desc: "Home to the steel plant and beautiful parks alongside the Damodar river." },
  { id: 5, name: "Deoghar", desc: "A major Hindu pilgrimage center, famous for the Baidyanath Jyotirlinga temple." },
  { id: 6, name: "Hazaribagh", desc: "A scenic health resort town with dense forests and rich wildlife." },
  { id: 7, name: "Dumka", desc: "The sub-capital of Jharkhand, offering a glimpse into Santhal culture." },
  { id: 8, name: "Giridih", desc: "Known for the Parasnath Hills, a major pilgrimage site for Jains." },
  { id: 9, name: "Netarhat", desc: "The Queen of Chotanagpur, renowned for breathtaking sunrises and pine forests." },
  { id: 10, name: "Betla National Park", desc: "One of the first national parks in India, rich in tigers, elephants, and biodiversity." },
  { id: 11, name: "Patratu Valley", desc: "A stunning valley with winding serpentine roads and a vast, beautiful lake." },
  { id: 12, name: "Hundru Falls", desc: "One of the highest waterfalls in India, cascading down magnificent rocky cliffs." },
  { id: 13, name: "Dassam Falls", desc: "A spectacular waterfall known for its scenic beauty and ten cascading streams." },
  { id: 14, name: "Parasnath Hill", desc: "The highest mountain peak in Jharkhand and a sacred Jain pilgrimage site." },
  { id: 15, name: "Rajrappa", desc: "Famous for the Chhinnamasta Temple and beautiful waterfalls at the confluence of rivers." },
  { id: 16, name: "Dalma Wildlife Sanctuary", desc: "A vast sanctuary near Jamshedpur known for its significant elephant population." },
  { id: 17, name: "Maluti Temples", desc: "A historic village featuring dozens of ancient, intricately carved terracotta temples." },
  { id: 18, name: "Ghatshila", desc: "A charming town on the Subarnarekha river, famous for its hills and tribal culture." }
];

export default function ExploreRegion() {
  const [activeRegion, setActiveRegion] = useState(regions[0]);
  const [showInfo, setShowInfo] = useState(true);

  const handleRegionClick = (region) => {
    setActiveRegion(region);
    setShowInfo(true);
  };

  return (
    <section className="explore-region-section">
      <div className="er-container">
        <h2 className="er-main-title">Explore by region</h2>
        <p className="er-subtitle">Get to know the state one district at a time</p>

        {/* Map Container */}
        <div className="er-map-wrapper">
          {/* Iframe for Google Maps centered on Jharkhand */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872111.4593853112!2d84.14816155700201!3d23.654160416972023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e70e3034f5dd%3A0xc66512ed7e18ab56!2sJharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Jharkhand Map"
            className="er-iframe"
          ></iframe>

          {/* Floating Info Box */}
          {showInfo && (
            <div className="er-info-box">
              <div className="er-info-header">
                <h3 className="er-info-title">{activeRegion.name}</h3>
                <button className="er-close-btn" onClick={() => setShowInfo(false)}>
                  <X size={20} />
                </button>
              </div>
              <p className="er-info-desc">{activeRegion.desc}</p>
              <button className="er-learn-more-btn">Learn more</button>
            </div>
          )}
        </div>

        {/* Regions List */}
        <div className="er-regions-list">
          {regions.map((region) => (
            <div 
              key={region.id} 
              className={`er-region-item ${activeRegion.id === region.id ? 'active' : ''}`}
              onClick={() => handleRegionClick(region)}
            >
              <div className="er-region-number">{region.id}</div>
              <span className="er-region-name">{region.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
