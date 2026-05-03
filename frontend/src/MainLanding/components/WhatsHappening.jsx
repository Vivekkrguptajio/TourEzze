import React from "react";
import { ChevronRight, Heart } from "lucide-react";
import "../styles/WhatsHappening.css";

const featuredArticle = {
  category: "THINGS TO DO",
  title: "Fabulous things to do in Jharkhand for free",
  desc: "Experience the state's best sights and natural attractions that won't even cost you a single rupee, from serene public parks to magnificent lakes.",
  image: "/Photos/Articles/patratu_valley.png",
  linkText: "Read now"
};

const subArticles = [
  {
    id: 1,
    title: "Where to experience 2026 eco-tourism trends in Jharkhand",
    readTime: "5 MIN READ",
    image: "/Photos/Articles/netarhat_forest.png"
  },
  {
    id: 2,
    title: "The best tribal village tours in Jharkhand",
    readTime: "14 MIN READ",
    image: "/Photos/Articles/tribal_village.png"
  },
  {
    id: 3,
    title: "Ultimate guide to Betla National Park",
    readTime: "7 MIN READ",
    image: "/Photos/Articles/betla_park.png"
  },
  {
    id: 4,
    title: "The best nature-inspired retreats in Jharkhand",
    readTime: "5 MIN READ",
    image: "/Photos/Articles/eco_resort.png"
  }
];

export default function WhatsHappening() {
  return (
    <section className="whats-happening-section">
      <div className="wh-container">
        <h2 className="wh-main-title">What's happening now</h2>

        {/* Featured Article */}
        <div className="wh-featured-card">
          <div className="wh-featured-image-wrapper">
            <img src={featuredArticle.image} alt={featuredArticle.title} className="wh-featured-image" />
          </div>
          <div className="wh-featured-content">
            <span className="wh-category">{featuredArticle.category}</span>
            <h3 className="wh-featured-title">{featuredArticle.title}</h3>
            <p className="wh-featured-desc">{featuredArticle.desc}</p>
            
            <div className="wh-featured-footer">
              <button className="wh-read-btn">
                {featuredArticle.linkText} <ChevronRight size={16} />
              </button>
              <button className="wh-heart-btn">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Sub Articles Grid */}
        <div className="wh-grid">
          {subArticles.map((article) => (
            <div key={article.id} className="wh-sub-card">
              <div className="wh-sub-image-wrapper">
                <img src={article.image} alt={article.title} className="wh-sub-image" />
              </div>
              <div className="wh-sub-content">
                <button className="wh-heart-btn-floating">
                  <Heart size={18} />
                </button>
                <h4 className="wh-sub-title">{article.title}</h4>
                <span className="wh-sub-time">{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="wh-bottom-actions">
          <button className="wh-see-more-btn">
            See more articles
          </button>
        </div>
      </div>
    </section>
  );
}
