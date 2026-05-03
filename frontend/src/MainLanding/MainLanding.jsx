import React, { useRef } from "react";
import Navbar from "./components/MainNavbar";
import HeroSection from "./components/HeroSection";
import HassleFree from "./components/HassleFree";
import TopThings from "./components/TopThings";
import WhatsHappening from "./components/WhatsHappening";
import ExperienceJharkhand from "./components/ExperienceJharkhand";
import FindThingsToDo from "./components/FindThingsToDo";
import UpcomingEvents from "./components/UpcomingEvents";
import ExploreRegion from "./components/ExploreRegion";
import PlanAhead from "./components/PlanAhead";
import GlobalFooter from "./components/GlobalFooter";


export default function MainLanding() {
  const exploreRef = useRef(null);
  const roleRef = useRef(null);
  const eventsRef = useRef(null);
  const marketplaceRef = useRef(null); // ⭐ NEW

  return (
    <div>
      <Navbar 
        exploreRef={exploreRef} 
        roleRef={roleRef} 
        eventsRef={eventsRef}
        marketplaceRef={marketplaceRef} // ⭐ Send to navbar
      />

      <HeroSection />
      
      {/* Hassle-free Jharkhand Section */}
      <HassleFree />

      {/* Top 4 Things to do this week */}
      <TopThings />

      {/* What's Happening Now */}
      <WhatsHappening />

      {/* Experience Jharkhand */}
      <ExperienceJharkhand />

      {/* Find Things To Do */}
      <FindThingsToDo />

      {/* Upcoming Events */}
      <div ref={eventsRef}>
        <UpcomingEvents />
      </div>

      {/* Explore by Region */}
      <div ref={exploreRef}>
        <ExploreRegion />
      </div>

      {/* Plan Ahead */}
      <PlanAhead />

      <GlobalFooter />
    </div>
  );
}
