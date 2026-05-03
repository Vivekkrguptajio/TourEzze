import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";

const slides = [
  {
    image: "/Photos/HeroImage/Waterfall.jpg",
    title: "Eco Tourism",
    desc: "Dense forests, national parks, and scenic green landscapes.",
  },
  {
    image: "/Photos/HeroImage/Adventure.jpg",
    title: "Adventure Tourism",
    desc: "Trekking, parasailing, boating, and rock climbing thrills.",
  },
  {
    image: "/Photos/HeroImage/Culture.jpg",
    title: "Cultural Tourism",
    desc: "Tribal dance, art, festivals, and deep-rooted traditions.",
  },
  {
    image: "/Photos/HeroImage/Religious.jpg",
    title: "Religious Tourism",
    desc: "Baba Baidyanath Dham, Parasnath, Rajrappa, and more holy sites.",
  },
  {
    image: "/Photos/HeroImage/Heritage.jpg",
    title: "Heritage Tourism",
    desc: "Ancient temples, forts, and historic architectural marvels.",
  },
  {
    image: "/Photos/HeroImage/Nature.jpg",
    title: "Wellness & Nature Tourism",
    desc: "Netarhat, Patratu Valley, and peaceful natural retreats.",
  },
  {
    image: "/Photos/HeroImage/Urban.png",
    title: "Urban Tourism",
    desc: "City attractions, parks, museums, and modern recreation.",
  },
  {
    image: "/Photos/HeroImage/Waterfalls.jpg",
    title: "Waterfall Tourism",
    desc: "Hundru, Dassam, Jonha, Hirni, and other majestic falls.",
  },
  {
    image: "/Photos/HeroImage/Tribal.jpg",
    title: "Rural & Tribal Tourism",
    desc: "Explore tribal villages, lifestyle, culture, and traditions.",
  },
  {
    image: "/Photos/HeroImage/Industrial.jpg",
    title: "Industrial & Mining Tourism",
    desc: "Coalfields, steel plants, and mineral-rich industrial sites.",
  },
];

const languages = [
  { discover: "Johar Jharkhand", tagline: "Pristine · Indigenous · Timeless" },
  { discover: "जोहड़ झारखण्ड", tagline: "निर्मल · स्वदेशी · शाश्वत" },
  { discover: "जोहाड़ झारखण्ड", tagline: "निरमल · देसी · अमर" },
  { discover: "जोहार झारुखाड़", tagline: "पोरुस · आदिवासी · दखापर" },
  { discover: "जोहार झारखंड", tagline: "सिरी · होरोको · इतोको" },
  { discover: "जोहार झारखंड", tagline: "सिरि · आदिवासी · लेंदे" },
  { discover: "ᱡᱚᱦᱟᱨ ᱡᱷᱟᱨᱠᱟᱱᱰ", tagline: "ᱥᱟᱡᱟᱞ · ᱰᱤᱥᱚᱢ · ᱪᱮᱸᱰᱚ" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [langIndex, setLangIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const langTimer = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % languages.length);
    }, 3000);
    return () => clearInterval(langTimer);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-card">
          {/* Background Images Slider */}
          {slides.map((slide, index) => (
            <img
              key={`bg-${index}`}
              src={slide.image}
              alt=""
              className={`hero-bg-slide ${index === current ? "active" : ""}`}
              aria-hidden="true"
            />
          ))}

          {/* Dark Gradient Overlay for readability */}
          <div className="hero-card-overlay" />

          {/* Content Overlay */}
          <div className="hero-card-content">
            <div className="hero-text-wrapper">
              <h1 key={`discover-${langIndex}`} className="hero-card-title text-slide">
                {languages[langIndex].discover}
              </h1>

              <p className="hero-card-description">
                Experience the untouched beauty of nature, rich tribal culture, and
                spiritual heritage — now enhanced with AI-powered planning.
              </p>

              <div className="hero-card-buttons">
                <Link to="/role/tourist/ai-itinerary" className="hero-card-btn-primary">
                  Plan My Trip <span className="btn-arrow">›</span>
                </Link>
                <Link to="/role/tourist" className="hero-card-btn-secondary">
                  Explore Destinations <span className="btn-arrow">›</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Slide Indicator (optional, matching Dubai style) */}
          <div className="hero-card-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`hero-card-dot ${index === current ? "active" : ""}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
