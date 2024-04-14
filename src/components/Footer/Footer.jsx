import React from "react";
import { FaFacebook, FaInstagram, FaMobileAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaze } from "@fortawesome/free-brands-svg-icons";
import sponsorLogo from "../../assets/Atlast Assets/SponsorLogo/Zivent.jpg"; // Import sponsor logo image
import sponsorLogo2 from "../../assets/Atlast Assets/SponsorLogo/Rupes.jpg";
import sponsorLogo3 from "../../assets/Atlast Assets/SponsorLogo/XPPF.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  const wazeLink =
    "https://www.waze.com/en/live-map/directions/atlas-premium-autoshield-tanguile-bacoor?place=w.79298704.792724900.37056866";

  return (
    <div className="bg-gray-200 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-4 md:gap-8">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="text-3xl font-bold mb-3">Atlas Premium Auto Shield</h1>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              voluptate.
            </p>
            <div className="flex items-center gap-3 mb-2">
              <FaMobileAlt />
              <p>0917 182 5453</p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon icon={faWaze} className="text-3xl hover:text-primary duration-300" />
              <p>B13 L33 Tanguile St. Meadowood Exec. Vill. , Bacoor, Philippines</p>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-nowrap gap-8 md:gap-16 justify-center md:justify-start">
            {FooterLinks.map((link, index) => (
              <div key={index} className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">{link.title}</h1>
                <ul className="flex flex-col gap-2">
                  <li className="cursor-pointer hover:text-primary duration-300">
                    <span>&#11162;</span>
                    <span>{link.title}</span>
                  </li>
                </ul>
                {/* Add Waze link */}
                {link.title === "Location" && (
                  <a href={wazeLink} target="_blank" rel="noopener noreferrer">Navigate with Waze</a>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Sponsor Logos */}
        <div className="flex justify-center mt-8">
          <img src={sponsorLogo} alt="Sponsor Logo" className="h-12 mx-4 mb-4 md:mb-0" />
          <img src={sponsorLogo2} alt="Sponsor Logo" className="h-12 mx-4 mb-4 md:mb-0" />
          <img src={sponsorLogo3} alt="Sponsor Logo" className="h-12 mx-4 mb-4 md:mb-0" />
        </div>
        {/* Copyright */}
        <div className="text-right pr-4 pb-4">
          <p className="text-xs text-gray-600">© AtlasDev2024</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;