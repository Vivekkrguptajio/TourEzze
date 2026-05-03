import React from "react";
import { Moon, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import "../styles/FinalSections.css";

const tags = [
  "Food", "Adventure", "Culture", "Relaxation", "Beach", "Entertainment", "Business travel",
  "Shopping", "Sports", "Family", "Lifestyle", "Arts", "Community"
];

export default function GlobalFooter() {
  return (
    <footer className="global-footer">
      {/* Weather Section */}
      <div className="gf-weather-section">
        <div className="gf-container">
          <h3 className="gf-weather-title">Weather in Jharkhand</h3>
          
          <div className="gf-weather-main">
            <div className="gf-weather-temp">
              <span className="gf-temp-value">32.1°</span>
              <Moon size={40} color="#7B2CBF" strokeWidth={1.5} />
              <span className="gf-temp-desc">Clear</span>
            </div>
            
            <div className="gf-weather-details">
              <div className="gf-weather-stat">
                <span className="gf-stat-label">Sunrise</span>
                <span className="gf-stat-value">05:20</span>
              </div>
              <div className="gf-weather-stat">
                <span className="gf-stat-label">Sunset</span>
                <span className="gf-stat-value">18:35</span>
              </div>
              <div className="gf-weather-stat">
                <span className="gf-stat-label">Low</span>
                <span className="gf-stat-value">22.5°</span>
              </div>
              <div className="gf-weather-stat">
                <span className="gf-stat-label">High</span>
                <span className="gf-stat-value">34.2°</span>
              </div>
              <div className="gf-weather-stat">
                <span className="gf-stat-label">Humidity</span>
                <span className="gf-stat-value">45%</span>
              </div>
              <div className="gf-weather-stat">
                <span className="gf-stat-label">Wind</span>
                <span className="gf-stat-value">12.4 km/h</span>
              </div>
            </div>
          </div>
          
          <div className="gf-weather-links">
            <span className="gf-temp-unit active">Celcius</span>
            <span className="gf-temp-unit">Farenheit</span>
            <button className="gf-weather-learn">Learn more &gt;</button>
          </div>
        </div>
      </div>

      <div className="gf-divider-thick"></div>

      {/* Stay Updated & Apps Section */}
      <div className="gf-newsletter-section">
        <div className="gf-container gf-newsletter-grid">
          
          <div className="gf-stay-updated">
            <h3 className="gf-section-title">Stay updated</h3>
            <p className="gf-section-desc">Get the latest updates on things to do in Jharkhand</p>
            
            <div className="gf-tags">
              {tags.map(tag => (
                <button key={tag} className="gf-tag-btn">{tag}</button>
              ))}
            </div>
            
            <div className="gf-subscribe-form">
              <input type="email" placeholder="Your email address" className="gf-email-input" />
              <button className="gf-subscribe-btn">Subscribe</button>
            </div>
          </div>

          <div className="gf-apps">
            <h3 className="gf-section-title">Download our apps</h3>
            <div className="gf-app-links">
              <div className="gf-app-item">
                <h4 className="gf-app-logo blue">JHARKHAND</h4>
                <a href="#" className="gf-app-link">Get Visit Jharkhand</a>
              </div>
              <div className="gf-app-item">
                <h4 className="gf-app-logo red">JHARKHAND</h4>
                <a href="#" className="gf-app-link">Get Jharkhand Calendar</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="gf-divider-thin"></div>

      {/* Main Footer Links */}
      <div className="gf-links-section">
        <div className="gf-container gf-links-grid">
          
          <div className="gf-brand">
            <h2 className="gf-brand-logo">Tour<span className="blue">Ezze</span></h2>
            <p className="gf-brand-desc">
              Visit Jharkhand is the official tourism guide to Jharkhand. From the state's iconic landmarks to vibrant neighbourhoods, world-class shopping and rich cultural experiences, find out all you need to know and plan your trip now.
            </p>
            <div className="gf-socials">
              <Facebook size={20} />
              <Instagram size={20} />
              <Twitter size={20} />
              <Youtube size={20} />
            </div>
          </div>

          <div className="gf-link-column">
            <h4 className="gf-col-title">Popular links</h4>
            <ul className="gf-col-list">
              <li>Explore Jharkhand</li>
              <li>Things to do</li>
              <li>What's on</li>
              <li>Articles</li>
              <li>Places to visit</li>
            </ul>
          </div>

          <div className="gf-link-column">
            <h4 className="gf-col-title">Helpful information</h4>
            <ul className="gf-col-list">
              <li>Plan your trip</li>
              <li>Travel guide</li>
              <li>Contact us</li>
              <li>Frequently Asked Questions</li>
              <li>Travel advisory</li>
            </ul>
          </div>

          <div className="gf-link-column">
            <h4 className="gf-col-title">Related sites</h4>
            <ul className="gf-col-list">
              <li>Invest in Jharkhand</li>
              <li>Jharkhand DET</li>
              <li>Consumer Rights</li>
              <li>Jharkhand Founders HQ</li>
              <li>Travel trade</li>
              <li>Retire in Jharkhand</li>
              <li>Study Jharkhand</li>
              <li>MICE</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="gf-divider-thin"></div>

      {/* Bottom Legal */}
      <div className="gf-legal-section">
        <div className="gf-container gf-legal-flex">
          <div className="gf-legal-links">
            <a href="#">Terms of use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Cookie notice</a>
            <a href="#">Cookie preference centre</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="gf-copyright">
            <p>Site last updated [03/05/2026]</p>
            <p>Copyright © 2026. This site is maintained by Jharkhand Department of Tourism.</p>
            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
