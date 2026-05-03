import React from "react";
import { Heart, CalendarClock, ChevronDown } from "lucide-react";
import "../styles/ThingsToDo.css";

const events = [
  {
    id: 1,
    title: "Sarhul Festival Celebrations",
    category: "FESTIVALS",
    date: "MULTIPLE DAYS, NEXT ON 15 MAY",
    image: "/Photos/Experiences/must_try.png"
  },
  {
    id: 2,
    title: "Ranchi Music Carnival",
    category: "LIVE SHOWS & CONCERTS",
    date: "20 MAY",
    image: "/Photos/Events/chhau_dance.png"
  },
  {
    id: 3,
    title: "Jharkhand Handicraft Expo",
    category: "SHOPPING",
    date: "25 APR - 30 MAY",
    image: "/Photos/Experiences/budget_options.png"
  },
  {
    id: 4,
    title: "Tribal Food Festival",
    category: "FOOD & DINING",
    date: "10 JUN - 12 JUN",
    image: "/Photos/Events/tribal_food.png"
  }
];

export default function UpcomingEvents() {
  return (
    <section className="things-to-do-section upcoming-events-section">
      <div className="ttd-container">
        <h2 className="ttd-main-title">
          Upcoming events in <span className="ue-month-dropdown">May <ChevronDown size={24} /></span>
        </h2>

        {/* Grid */}
        <div className="ttd-grid">
          {events.map(event => (
            <div key={event.id} className="ttd-card">
              <div className="ttd-image-wrapper">
                <img src={event.image} alt={event.title} className="ttd-image" />
                <button className="ttd-heart-btn">
                  <Heart size={18} />
                </button>
              </div>
              <div className="ttd-content">
                <span className="ttd-category">{event.category}</span>
                <h3 className="ttd-card-title">{event.title}</h3>
                <span className="ue-date">{event.date}</span>
                
                <div className="ue-divider"></div>
                
                <button className="ue-remind-btn">
                  <span className="ue-remind-text"><CalendarClock size={16} /> Remind me</span>
                  <span className="ue-plus">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="ttd-bottom-actions">
          <button className="ttd-see-more-btn">See more events</button>
        </div>
      </div>
    </section>
  );
}
