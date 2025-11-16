import React from "react";
import Footer from "../componentsLandingPage/Footer";
import ChatbotButton from "../componentsLandingPage/ChatbotButton";
import ExploreHeader from "../componentsExplorePage/ExploreHeading";
import NavCategory from "../componentsExplorePage/ui/NavCategory";
import ExploreCategory from "../componentsExplorePage/ExploreCategory";

export default function ExplorePage() {
  return (
    <>
      <ExploreHeader />
      <ExploreCategory />
      <Footer />
      <ChatbotButton />
    </>
  );
}
