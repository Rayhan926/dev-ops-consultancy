import React from "react";
import SiteLogo from "./SiteLogo";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const socialIcons = [
  {
    icon: <FaFacebookF size={22} />,
    link: "#",
  },
  {
    icon: <BsTwitter size={22} />,
    link: "#",
  },
  {
    icon: <BsInstagram size={22} />,
    link: "#",
  },
  {
    icon: <FaLinkedinIn size={22} />,
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#101217] py-[83px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <SiteLogo />
          <div className="flex items-center gap-3">
            {socialIcons.map((socialIcon, i) => (
              <a
                href={socialIcon.link}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full flex items-center justify-center bg-white/30 text-white hover:bg-primary hover:text-dark duration-150"
                key={i}
              >
                {socialIcon.icon}
              </a>
            ))}
          </div>
          <button className="__button">Work with us</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
