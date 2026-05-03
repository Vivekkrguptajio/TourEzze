import React, { useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import "../styles/ExperienceJharkhand.css";

const experiences = [
  { id: 1, title: "Family-friendly fun", image: "/Photos/Experiences/family_fun.png" },
  { id: 2, title: "Weekend escapes", image: "/Photos/Experiences/weekend_escapes.png" },
  { id: 3, title: "Must-try experiences", image: "/Photos/Experiences/must_try.png" },
  { id: 4, title: "Budget options", image: "/Photos/Experiences/budget_options.png" },
  { id: 5, title: "Shopping and crafts", image: "/Photos/Experiences/shopping_crafts.png" },
  { id: 6, title: "History and heritage", image: "/Photos/Experiences/history_heritage.png" }
];

export default function ExperienceJharkhand() {
  const [visitorType, setVisitorType] = useState("first-time");
  const [selectedCards, setSelectedCards] = useState([2]); // Pre-select second card for demo

  const toggleCardSelection = (id) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter(cardId => cardId !== id));
    } else {
      setSelectedCards([...selectedCards, id]);
    }
  };

  return (
    <section className="experience-section">
      <div className="ej-container">
        <div className="ej-left-column">
          <h2 className="ej-main-title">Experience Jharkhand through the eyes of a...</h2>
        </div>
        
        <div className="ej-right-column">
          {/* Toggle */}
          <div className="ej-toggle-container">
            <div 
              className={`ej-toggle-option ${visitorType === 'first-time' ? 'active' : ''}`}
              onClick={() => setVisitorType('first-time')}
            >
              First-time visitor
            </div>
            <div 
              className={`ej-toggle-option ${visitorType === 'returning' ? 'active' : ''}`}
              onClick={() => setVisitorType('returning')}
            >
              Returning visitor
            </div>
          </div>

          {/* Grid */}
          <div className="ej-grid">
            {experiences.map((exp) => {
              const isSelected = selectedCards.includes(exp.id);
              return (
                <div 
                  key={exp.id} 
                  className={`ej-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleCardSelection(exp.id)}
                >
                  <img src={exp.image} alt={exp.title} className="ej-card-bg" />
                  <div className="ej-card-gradient"></div>
                  
                  {/* Selector Circle */}
                  <div className={`ej-selector-circle ${isSelected ? 'selected' : ''}`}>
                    {isSelected && <Check size={14} color="#fff" strokeWidth={3} />}
                  </div>
                  
                  <span className="ej-card-title">{exp.title}</span>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <button className="ej-curate-btn">
            Curate my holiday <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
