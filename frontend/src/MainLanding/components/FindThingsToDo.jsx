import React, { useState } from "react";
import { Heart } from "lucide-react";
import "../styles/ThingsToDo.css";

const categories = ["All", "Adventure", "Arts & Culture", "Nature", "Spiritual", "Entertainment"];

const activities = [
  {
    id: 1,
    title: "Dalma Wildlife Safari",
    category: "ADVENTURE",
    desc: "An exciting open-jeep safari through the dense forests of Dalma Wildlife Sanctuary.",
    image: "/Photos/Activities/dalma_safari.png",
    filterCategory: "Adventure",
  },
  {
    id: 2,
    title: "Hundru Falls",
    category: "NATURE",
    desc: "Marvel at the breathtaking beauty of one of India's most spectacular waterfalls.",
    image: "/Photos/Activities/hundru_falls.png",
    filterCategory: "Nature",
  },
  {
    id: 3,
    title: "State Museum Hotwar",
    category: "ARTS & CULTURE",
    desc: "Discover the rich tribal history, ancient sculptures, and beautiful artifacts of Jharkhand.",
    image: "/Photos/Experiences/shopping_crafts.png",
    filterCategory: "Arts & Culture",
  },
  {
    id: 4,
    title: "Baidyanath Dham",
    category: "SPIRITUAL",
    desc: "A major Hindu pilgrimage center and one of the twelve Jyotirlingas in India.",
    image: "/Photos/Events/maluti_temples.png",
    filterCategory: "Spiritual",
  }
];

export default function FindThingsToDo() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredActivities = activeFilter === "All" 
    ? activities 
    : activities.filter(a => a.filterCategory === activeFilter);

  return (
    <section className="things-to-do-section">
      <div className="ttd-container">
        <h2 className="ttd-main-title">Find things to do</h2>

        {/* Filters */}
        <div className="ttd-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`ttd-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="ttd-grid">
          {filteredActivities.map(activity => (
            <div key={activity.id} className="ttd-card">
              <div className="ttd-image-wrapper">
                <img src={activity.image} alt={activity.title} className="ttd-image" />
                <button className="ttd-heart-btn">
                  <Heart size={18} />
                </button>
              </div>
              <div className="ttd-content">
                <span className="ttd-category">{activity.category}</span>
                <h3 className="ttd-card-title">{activity.title}</h3>
                <p className="ttd-card-desc">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="ttd-bottom-actions">
          <button className="ttd-see-more-btn">See more</button>
        </div>
      </div>
    </section>
  );
}
