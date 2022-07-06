import React, { useEffect, useRef } from "react";
import SiteLogo from "./SiteLogo";

const navLinks = [
  {
    text: "Home",
    url: "#home",
  },
  {
    text: "About us",
    url: "#about-us",
  },
  {
    text: "What we do",
    url: "#what-we-do",
  },
  {
    text: "Projects",
    url: "#projects",
  },
  {
    text: "Contact",
    url: "#contact",
  },
];

const NavLink = ({ url, text }) => {
  return (
    <li>
      <a
        href={url}
        className="text-white text-lg hover:text-primary duration-150 block"
      >
        {text}
      </a>
    </li>
  );
};

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const detectFixedHeader = () => {
      if (window.scrollY > 200) {
        headerRef.current.classList.add("fixed_header");
      } else {
        headerRef.current.classList.remove("fixed_header");
      }
    };

    window.addEventListener("scroll", detectFixedHeader);

    return () => {
      window.removeEventListener("scroll", detectFixedHeader);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 z-[50] w-full pt-7 pb-5  duration-150"
    >
      <div className="container flex items-center justify-between">
        <div className="max-w-[136px]">
          <SiteLogo />
        </div>

        <nav>
          <ul className="flex items-center gap-11">
            {navLinks.map((navLink, i) => (
              <NavLink {...navLink} key={i} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
