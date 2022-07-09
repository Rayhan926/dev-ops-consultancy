import React, { useEffect, useRef, useState } from "react";
import SiteLogo from "./SiteLogo";
import { FiMenu } from "react-icons/fi";

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
      className="fixed top-0 left-0 z-[50] w-full pt-6 lg:pt-7 pb-5 duration-150"
    >
      <div className="container flex items-center justify-between">
        <div className="max-w-[100px] lg:max-w-[136px]">
          <SiteLogo />
        </div>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-11">
            {navLinks.map((navLink, i) => (
              <NavLink {...navLink} key={i} />
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;

const NavLink = ({ url, text, onClick }) => {
  return (
    <li>
      <a
        onClick={onClick}
        href={url}
        className="text-white text-lg hover:text-primary duration-150 block px-7 py-3.5 lg:p-0"
      >
        {text}
      </a>
    </li>
  );
};

const MobileMenu = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const shouldCloseSidebar = (e) => {
    if (e.target.id === "overlay_container") {
      setIsOpenSidebar(false);
    }
  };

  const forceCloseSidebar = () => setIsOpenSidebar(false);

  return (
    <div className="lg:hidden">
      <div onClick={() => setIsOpenSidebar(true)}>
        <FiMenu color="#fff" size={28} />
      </div>

      <div
        id="overlay_container"
        onClick={shouldCloseSidebar}
        className={`fixed top-0 left-0 w-full h-screen overflow-y-auto bg-dark/50 z-50 duration-150
      ${
        isOpenSidebar
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
      `}
      >
        <div
          className={`w-[80%] bg-dark h-full py-5 duration-150 
        ${
          isOpenSidebar
            ? "translate-x-0 pointer-events-auto"
            : "-translate-x-full pointer-events-none"
        }
        `}
        >
          <ul>
            {navLinks.map((navLink, i) => (
              <NavLink {...navLink} onClick={forceCloseSidebar} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
