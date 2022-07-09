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
    <footer className="bg-[#101217] py-[50px] lg:py-[83px]">
      <div className="container">
        <div className="flex items-center flex-col lg:flex-row gap-y-8 gap-x-5 flex-wrap justify-between">
          <div className="max-w-[130px] lg:max-w-full">
            <SiteLogo />
          </div>
          <div className="flex items-center gap-3">
            {socialIcons.map((socialIcon, i) => (
              <a
                href={socialIcon.link}
                target="_blank"
                rel="noreferrer"
                className="w-11 lg:w-14 h-11 lg:h-14 rounded-full flex items-center justify-center bg-white/30 text-white hover:bg-primary hover:text-dark duration-150"
                key={i}
              >
                <div className="scale-90 lg:scale-100">{socialIcon.icon}</div>
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
