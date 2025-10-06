import React from "react";
import Hero from "./components/Hero";
import Promotion from "./components/Promotion";
import Navbar from "./components/Navbar";
import FeaturedDesktop from "./components/FeaturedDesktop";
import Footer from "./components/Footer";
import Membership from "./components/Membership";
import ExploreMoreDesktop from "./components/Desktop/ExploreMoreDesktop";
import MembershipDesktop from "./components/Desktop/MembershipDesktop";
import OurBrand from "./components/OurBrand";
import ReadOnlyCalendar from "./components/Calendar";
import SpecialOffers from "./components/SpecialOffers";
import Mantra from "./components/Mantra";
import LatestNews from "./components/LatestNews";
import SpaWonderFix from "./components/Desktop/SpaWonderFix";
import LatestNewsMobile from "./components/LatestNewsMobile";
import FooterMobile from "./components/FooterMobile";
import FeaturedMobile from "./components/FeaturedMobile";
import ExploreMoreMobile from "./components/ExploreMoreMobile";
import TestExplore from "./components/Desktop/TestExplore";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden gap-40 ">
      <Navbar />
      <Hero />
      <Promotion />
      <FeaturedMobile />
      <FeaturedDesktop />
      <ExploreMoreMobile />
      <TestExplore />
      {/* <ExploreMoreDesktop /> */}
      <MembershipDesktop />
      <Mantra />
      <Membership />
      <SpaWonderFix />
      <SpecialOffers />
      <LatestNews />
      <LatestNewsMobile />
      <OurBrand />
      <Footer />
      <FooterMobile />
    </main>
  );
};

export default App;
