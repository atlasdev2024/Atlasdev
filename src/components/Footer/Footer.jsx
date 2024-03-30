import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaze } from "@fortawesome/free-brands-svg-icons"; // Import Waze icon

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  const wazeLink = "https://www.waze.com/en/live-map/directions/atlas-premium-autoshield-tanguile-bacoor?place=w.79298704.792724900.37056866";
  
  return (
    <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Car Rental
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <a href={wazeLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWaze} className="text-3xl" /> {/* Waze icon */}
              </a>
              <p>B13 L33 Tanguile St. Meadowood Exec. Vill. , Bacoor, Philippines</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>0917 182 5453</p>
            </div>
            {/* Social Handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/atlas_premiumautoshield/">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552184784190&mibextid=LQQJ4d">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              {/* <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a> */}
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            {FooterLinks.map((link, index) => (
              <div key={index}>
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    {link.title}
                  </h1>
                  <ul className={`flex flex-col gap-3`}>
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  </ul>
                  {/* Add Waze link */}
                  {link.title === "Location" && (
                    <a href={wazeLink} target="_blank" rel="noopener noreferrer">Navigate with Waze</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;