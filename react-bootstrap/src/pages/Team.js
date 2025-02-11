import React from 'react';
import Navbar from "../components/FrontPages/Common/Navbar";
import OurTeamSlider from "../components/FrontPages/Common/OurTeamSlider";
import Cta from "../components/FrontPages/Common/Cta";
import Footer from "../components/FrontPages/Common/Footer";
import PageBanner from "../components/FrontPages/Common/PageBanner";

const Team = () => {
  return (
    <>
      <div className="fp-wrapper">
        <Navbar />

        <PageBanner 
          pageTitle="Our Team"
        />

        <OurTeamSlider />

        <Cta />

        <Footer />
      </div>
    </>
  )
};

export default Team;