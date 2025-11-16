import React from "react";
import Footer from "../componentsLandingPage/Footer";
import ChatbotButton from "../componentsLandingPage/ChatbotButton";
import ExploreHeader from "../componentsExplorePage/ExploreHeading";
import NavCategory from "../componentsExplorePage/NavCategory";


export default function ExplorePage() {
  return (
    <>
      <ExploreHeader />
      <NavCategory/>
      <Footer />
      <ChatbotButton />

    </>
  );
}
