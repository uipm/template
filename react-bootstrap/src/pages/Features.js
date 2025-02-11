import React from "react";
import Navbar from "../components/FrontPages/Common/Navbar";
import KeyFeatures from "../components/FrontPages/Common/KeyFeatures"; 
import Cta from "../components/FrontPages/Common/Cta";
import Footer from "../components/FrontPages/Common/Footer";
import PageBanner from "../components/FrontPages/Common/PageBanner";
import OurTeamSlider from "../components/FrontPages/Common/OurTeamSlider";


const Features = () => {
  return (
    <>
      <div className="fp-wrapper">
        <Navbar />

        <PageBanner pageTitle="Features" />

        <KeyFeatures />

        <OurTeamSlider />

        <Cta />

        <Footer />
      </div>
    </>
  );
};

export default Features;
