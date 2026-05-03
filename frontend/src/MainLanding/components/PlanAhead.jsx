import React from "react";
import { ChevronRight } from "lucide-react";
import "../styles/FinalSections.css";

const planCards = [
  {
    id: 1,
    title: "Travel guide",
    desc: "Essential information before you plan your trip to Jharkhand",
    image: "/Photos/Experiences/weekend_escapes.png",
  },
  {
    id: 2,
    title: "Transport",
    desc: "Learn how to arrive in Jharkhand and the best ways to get around",
    image: "/Photos/Experiences/budget_options.png",
  },
  {
    id: 3,
    title: "Accommodation",
    desc: "Explore an incredible range of stay options, from resorts to eco-camps",
    image: "/Photos/Articles/eco_resort.png",
  },
  {
    id: 4,
    title: "About Jharkhand",
    desc: "See how the state preserves its natural beauty and ancient heritage",
    image: "/Photos/Experiences/history_heritage.png",
  }
];

export default function PlanAhead() {
  return (
    <section className="plan-ahead-section">
      <div className="pa-container">
        <h2 className="pa-main-title">Plan ahead</h2>

        {/* 4 Cards Grid */}
        <div className="pa-grid">
          {planCards.map((card) => (
            <div key={card.id} className="pa-card">
              <div className="pa-image-wrapper">
                <img src={card.image} alt={card.title} className="pa-image" />
              </div>
              <div className="pa-content">
                <h3 className="pa-card-title">{card.title}</h3>
                <p className="pa-card-desc">{card.desc}</p>
                <button className="pa-learn-btn">
                  Learn more <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="pa-banner">
          <div className="pa-banner-image-wrapper">
            <img src="/Photos/Activities/dalma_safari.png" alt="Dalma Safari" className="pa-banner-image" />
          </div>
          <div className="pa-banner-content">
            <h3 className="pa-banner-title">Save up to 60% with the Jharkhand Pass</h3>
            <p className="pa-banner-desc">
              Experience all that's possible with the Jharkhand Pass. Create your own tailor-made itinerary, choosing from over 40 must-visit attractions and activities.
            </p>
            <button className="pa-buy-btn">Buy now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
