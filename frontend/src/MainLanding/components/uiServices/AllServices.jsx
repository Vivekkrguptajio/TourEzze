import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft, ChevronUp } from "lucide-react";
import { servicesData } from "./servicesData";
import "../../styles/AllServices.css";
import "../../styles/HassleFree.css"; // Reuse card styles

const categories = ["All", "Attractions", "Events", "Transport", "Travel"];

export default function AllServices() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredServices = activeTab === "All"
    ? servicesData
    : servicesData.filter(s => s.category === activeTab);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="all-services-page">
      <div className="all-services-container">
        {/* Breadcrumbs */}
        <div className="as-breadcrumbs">
          <Link to="/" className="as-breadcrumb-link">Visit Jharkhand</Link>
          <ChevronRight size={14} className="as-breadcrumb-icon" />
          <span className="as-breadcrumb-current">Jharkhand services</span>
        </div>

        {/* Hero Section */}
        <div className="as-hero">
          <h1 className="as-hero-title">Jharkhand city services for you</h1>
          <p className="as-hero-subtitle">Relax and enjoy a stress-free holiday with these helpful services.</p>
        </div>

        {/* Filters */}
        <div className="as-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`as-filter-pill ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <h2 className="as-section-title">Browse services</h2>

        {/* Grid */}
        <div className="as-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="hf-card as-card">
              <div className="hf-icon-circle">{service.icon}</div>
              <h3 className="hf-card-title">{service.title}</h3>
              <p className="hf-card-desc">{service.desc}</p>
              <div className="hf-card-arrow">
                <ChevronRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="as-scroll-top-btn" onClick={scrollToTop}>
        <ChevronUp size={24} />
      </button>
    </div>
  );
}
