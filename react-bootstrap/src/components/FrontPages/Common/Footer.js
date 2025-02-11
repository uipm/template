"use client";

import { Link } from "react-router-dom";

const footerData = {
  logo: {
    black: "/images/landing/logo.svg",
    white: "/images/white-logo.svg",
  },
  description:
    "With customizable dashboards tailored to your needs, collaborate effortlessly with your team and stay ahead with real-time updates.",
  socialLinks: [
    { url: "https://www.facebook.com/", icon: "ri-facebook-fill" },
    { url: "https://www.twitter.com/", icon: "ri-twitter-x-line" },
    { url: "https://www.linkedin.com/", icon: "ri-linkedin-fill" },
    { url: "https://www.dribbble.com/", icon: "ri-dribbble-line" },
  ],
  sections: [
    {
      title: "Our Products",
      links: [
        { label: "Trezo Dashboard", url: "#" },
        { label: "Tagus Admin", url: "#" },
        { label: "eCademy LMS", url: "#" },
        { label: "Admash Template", url: "#" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Home", url: "#" },
        { label: "Features", url: "#" },
        { label: "Testimonials", url: "#" },
        { label: "Our Team", url: "#" },
      ],
    },
    {
      title: "Privacy Policy",
      links: [
        { label: "Terms & Conditions", url: "#" },
        { label: "Cookie Policy", url: "#" },
        { label: "Notice at Collection", url: "#" },
        { label: "Privacy Policy", url: "#" },
      ],
    },
  ],
  brand: "Trezo",
  copyright: {
    ownerName: "EnvyTheme",
    ownerUrl: "https://envytheme.com/",
  },
};

const Footer = () => {
  return (
    <>
      <div className="footers-area pb-125 position-relative z-2">
        <div className="container">
          <div className="row">
            {/* Logo and Description */}
            <div className="col-lg-3 col-sm-6">
              <div className="footer-single-item mb-4">
                <Link to="/" className="footer-logo d-inline-block mb-4">
                  <img
                    src={footerData.logo.black}
                    alt="logo"
                    width={132}
                    height={34}
                    className="black-logo"
                  />
                  <img
                    src={footerData.logo.white}
                    alt="logo"
                    width={132}
                    height={34}
                    className="white-logo"
                  />
                </Link>

                <p className="mb-4 pb-lg-2">{footerData.description}</p>

                <ul className="ps-0 mb-0 list-unstyled d-flex flex-wrap gap-3">
                  {footerData.socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none fs-20 text-primary"
                      >
                        <i className={link.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dynamic Sections */}
            {footerData.sections.map((section, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <div
                  className={`footer-single-item mb-4 ${
                    section.addClasses || ""
                  }`}
                >
                  <h3 className="mb-md-4 mb-3 fw-semibold">{section.title}</h3>
                  <ul className="ps-0 mb-0 list-unstyled">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="mb-2 pb-1">
                        <a href={link.url} className="text-decoration-none">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="copyright-area bg-white text-center py-4">
        <div className="container">
          <p className="fs-14">
            © <span className="text-primary-div">{footerData.brand}</span> is
            Proudly Owned by{" "}
            <a
              href={footerData.copyright.ownerUrl}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-primary"
            >
              {footerData.copyright.ownerName}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
