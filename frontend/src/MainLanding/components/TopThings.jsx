import React from "react";
import { ChevronRight } from "lucide-react";
import "../styles/TopThings.css";

const topThingsData = [
  {
    id: 1,
    image: "/Photos/Events/tribal_food.png",
    date: "15-20 MAY",
    title: "1. Taste authentic tribal cuisine",
    desc: "Discover amazing local flavors at the Ranchi Food Festival, with 50+ traditional stalls to explore.",
    linkText: "Discover more"
  },
  {
    id: 2,
    image: "/Photos/Events/chhau_dance.png",
    date: "18 MAY",
    title: "2. Experience Chhau Dance",
    desc: "Prepare for a mesmerizing evening as local artists perform the vibrant traditional Chhau dance in Jamshedpur.",
    linkText: "Discover more"
  },
  {
    id: 3,
    image: "/Photos/Events/dassam_falls.png",
    date: "20-22 MAY",
    title: "3. Visit Dassam Falls",
    desc: "Enjoy the breathtaking views of the cascading waterfalls and lush greenery during the eco-tourism week.",
    linkText: "Discover more"
  },
  {
    id: 4,
    image: "/Photos/Events/maluti_temples.png",
    date: "24-25 MAY",
    title: "4. Explore Maluti Temples",
    desc: "Witness the captivating terracotta architecture of the ancient Maluti temples in Dumka with guided tours.",
    linkText: "Discover more"
  }
];

export default function TopThings() {
  return (
    <section className="top-things-section">
      <div className="top-things-container">
        <h2 className="top-things-title">Top 4 things to do this week</h2>
        
        <div className="top-things-grid">
          {topThingsData.map((item) => (
            <div key={item.id} className="top-thing-card">
              <div className="tt-image-wrapper">
                <img src={item.image} alt={item.title} className="tt-image" />
              </div>
              <div className="tt-content">
                <span className="tt-date">{item.date}</span>
                <h3 className="tt-card-title">{item.title}</h3>
                <p className="tt-card-desc">{item.desc}</p>
                <button className="tt-link-btn">
                  {item.linkText} <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
