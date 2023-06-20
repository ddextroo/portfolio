import { ReactComponent as MySVG } from "./AvatarAndIcons.svg";
import { ReactComponent as MySVG2 } from "./github-fill.svg";
import { ReactComponent as MySVG3 } from "./linkedin-box-fill.svg";

import { ReactComponent as MySVG4 } from "./html-5-svgrepo-com.svg";
import { ReactComponent as MySVG5 } from "./tailwind-svgrepo-com.svg";
import { ReactComponent as MySVG6 } from "./java-svgrepo-com.svg";
import { ReactComponent as MySVG7 } from "./cplusplus-svgrepo-com.svg";
import { ReactComponent as MySVG8 } from "./csharp-svgrepo-com.svg";
import { ReactComponent as MySVG9 } from "./figma-svgrepo-com.svg";
import { ReactComponent as MySVG10 } from "./hack-the-box-svgrepo-com.svg";
import { ReactComponent as MySVG11 } from "./art-palette-svgrepo-com.svg";
import { ReactComponent as MySVG12 } from "./flutter-svgrepo-com.svg";


import mainAvatar from "./about_img.jpg";
import "./App.css";
import React, { useState, useEffect } from "react";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import { TypeAnimation } from "react-type-animation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
function App() {
  // https://github.com/developedbyed/react-portofolio-with-tailwind/blob/main/pages/index.js
  // https://www.freecodecamp.org/news/build-portfolio-website-react/
  // https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm
  // https://stackoverflow.com/questions/42318673/changing-the-git-user-inside-visual-studio-code

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const target = event.target.getAttribute("href");
    const element = document.querySelector(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div className="App bg-primaryDark">
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <DrifterStars className="h-full" numStars={1000} speed={0.5} />
        </div>
        <header className="relative">
          <section className="min-h-screen font-poppins" id="nav">
            <nav className="py-10 mb-12 flex flex-wrap items-center justify-between">
              <h1 className="text-xl px-8 text-colorAccent font-medium">
                <a href="#home" onClick={handleMenuItemClick}>
                  DDev
                </a>
              </h1>
              <div className="md:hidden">
                <button
                  className="text-primaryLight hover:text-colorAccent focus:outline-none px-10"
                  onClick={toggleMenu}
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isMenuOpen ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19 9h-14v-2h14v2zm0 4h-14v2h14v-2zm0 4h-14v2h14v-2z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 6h16v2h-16v-2zm0 5h16v2h-16v-2zm0 5h16v2h-16v-2z"
                      />
                    )}
                  </svg>
                </button>
              </div>
              <ul
                className={`${
                  isMenuOpen
                    ? "fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center bg-primaryDark text-center"
                    : "hidden"
                } md:flex md:flex-row md:items-center`}
              >
                <li className="mr-7 text-primaryLight text-lg scroll-smooth hover:scroll-auto">
                  <a href="#home" onClick={handleMenuItemClick}>
                    Home
                  </a>
                </li>
                <li className="mr-7 text-primaryLight text-lg scroll-smooth hover:scroll-auto">
                  <a href="#about" onClick={handleMenuItemClick}>
                    About
                  </a>
                </li>
                <li className="mr-7 text-primaryLight text-lg scroll-smooth hover:scroll-auto">
                  <a href="#skills" onClick={handleMenuItemClick}>
                    Skills
                  </a>
                </li>
                <li className="mr-7 text-primaryLight text-lg scroll-smooth hover:scroll-auto">
                  <a href="#projects" onClick={handleMenuItemClick}>
                    Projects
                  </a>
                </li>
                <li className="mr-7 text-primaryLight text-lg scroll-smooth hover:scroll-auto">
                  <a href="#contact" onClick={handleMenuItemClick}>
                    Contact
                  </a>
                </li>

                {isMenuOpen && (
                  <li className="absolute top-0 right-0 mt-2 mr-4">
                    <button
                      className="text-primaryLight hover:text-colorAccent focus:outline-none p-10"
                      onClick={toggleMenu}
                    >
                      <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4 5.414l1.414-1.414L12 10.586l6.586-6.586L20 5.414 13.414 12l6.172 6.586L20 18.586l-6.586-6.172L6.414 19H4v-2.414l6.586-6.172L4 5.414z"
                        />
                      </svg>
                    </button>
                  </li>
                )}
              </ul>
            </nav>
            <div className={`p-10 lg:-mt-24 ${isMenuOpen ? "hidden" : ""}`}>
              <div className="flex flex-col lg:flex-row items-center text-sm">
                <div className="md:w-1/2 md:pr-4 lg:text-left">
                  <h2 className="text-5xl text-colorAccent font-medium md:text-5xl">
                    Dexter G. Inguito
                  </h2>
                  <TypeAnimation
                    className="text-md py-5 text-gray dark:text-gray-200 max-w-xl mx-auto md:text-xl"
                    sequence={[
                      "Android Developer",
                      1000,
                      "Software Developer",
                      2000,
                      () => {},
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: "2em", display: "inline-block" }}
                  />
                  <div className="text-md py-5 mx-auto md:text-lg">
                    <a href="https://drive.google.com/file/d/1lkAr5cA7sEX_HNTCLiS5WWNddzqk6Sb-/preview">
                      <button class="px-20 py-2 bg-green-200 rounded-lg shadow-xl hover:bg-colorAccent transform hover:scale-105 hover:rotate-1 transition-all duration-250 focus:outline-none select-none font-medium text-primaryDark">
                        Open CV
                      </button>
                    </a>
                  </div>
                  <div className="text-md mx-auto md:text-lg text-left flex items-end justify-center xl:justify-start lg:justify-start">
                    <a href="https://github.com/ddextroo">
                      <MySVG2 className="mr-2 w-8 h-8 hover:brightness-125" />
                    </a>
                    <a href="https://www.linkedin.com/in/dexter-inguito-b039a827b">
                      <MySVG3 className="w-8 h-8 hover:brightness-125" />
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-4">
                  <MySVG className="w-full h-auto" />
                </div>
              </div>
            </div>
          </section>
          <section id="about">
          <div className={`p-10 lg:-mt-24 ${isMenuOpen ? "hidden" : ""}`}>
            <div className="flex flex-col lg:flex-row items-center text-sm">
              <div class="p-10 md:w-1/2 md:pl-4">
                <img
                  src={mainAvatar}
                  class="lg:p-10 h-auto max-w-full rounded-full xl:p-20"
                  alt=""
                />
              </div>
              <div className="md:w-1/2 md:pr-4 lg:text-left">
                <h2 className="font-poppins text-5xl text-colorAccent font-medium md:text-5xl">
                  About me
                </h2>
                <h3 className="font-poppins text-justify py-5 text-gray dark:text-gray-200 mx-auto md:text-xl">
                  I'm Dexter G. Inguito, a self-taught developer passionate
                  about coding and creativity. My goal is to become a senior
                  developer, constantly pushing my limits to find innovative
                  ways to serve others. Alongside coding, I'm studying digital
                  and multimedia art to enhance my artistic skills. I've
                  explored various artistic forms like vexel art, vector art,
                  and landscape art, and even dabbled in creating short films
                  using multimedia techniques. Although I'm relatively new to
                  this, my enthusiasm and eagerness to learn keep me going. For
                  the past three years, I've been freelancing and focusing on
                  app development. I'm committed to staying up-to-date with
                  emerging technologies, ensuring that I can adapt to the
                  ever-changing industry. I've also formed a team and
                  successfully created a startup app, which has boosted my
                  experience and fulfillment. Now, I'm ready to expand my
                  knowledge even further and strive for excellence in my future
                  projects.
                </h3>
              </div>
            </div>
          </div>
          </section>
          {/* skills */}  
          <section id="skills">
          <h2 className="font-poppins pb-10 text-5xl text-colorAccent font-medium md:text-5xl">
                  Skills
                </h2>
            <div className="md:px-10 sm:px-10 lg:px-20">
              <Marquee
                gradient={true}
                gradientColor={[100,100,100]}
                speed={40}
                pauseOnHover={false}
                style={{
                  borderRadius: '10px',
                }}
              >
                <div className="flex flex-wrap justify-center text-primaryLight py-5 font-poppins">
                  <div className="flex flex-col items-center px-5">
                    <h2 className=" text-primaryLight font-medium text-2lg py-5">
                      HTML
                    </h2>
                    <MySVG4 className="w-20 h-20 hover: brightness-125" />
                  </div>
                  <div className="flex flex-col items-center px-5">
                    <h2 className=" text-primaryLight font-medium text-2lg py-5">
                      JAVA
                    </h2>
                    <MySVG6 className="w-20 h-20 hover: brightness-125" />
                  </div>
                  <div className="flex flex-col items-center px-5">
                    <h2 className=" text-primaryLight font-medium text-2lg py-5">
                      Tailwind CSS
                    </h2>
                    <MySVG5 className="w-20 h-20 hover: brightness-125" />
                  </div>
                  <div className="flex flex-col items-center px-5">
                    <h2 className=" text-primaryLight font-medium text-2lg py-5">
                      C++
                    </h2>
                    <MySVG7 className="w-20 h-20 hover: brightness-125" />
                  </div>
                  <div className="flex flex-col items-center px-5">
                    <h2 className=" text-primaryLight font-medium text-2lg py-5">
                      CSHARP
                    </h2>
                    <MySVG8 className="w-20 h-20 hover: brightness-125" />
                  </div>
                  <div className="flex flex-col items-center px-5">
                    <h2 className=" text-primaryLight font-medium text-2lg py-5">
                      UI/UX DESIGN
                    </h2>
                    <MySVG9 className="w-20 h-20 hover: brightness-125" />
                  </div>
                  <div className="flex flex-col items-center px-5">
                    <h2 className=" text-primaryLight font-medium text-2lg py-5">
                      CYBERSECURITY
                    </h2>
                    <MySVG10 className="w-20 h-20 hover: brightness-125" />
                  </div>
                  <div className="flex flex-col items-center px-5">
                    <h2 className=" text-primaryLight font-medium text-2lg py-5">
                      ART
                    </h2>
                    <MySVG11 className="w-20 h-20 hover: brightness-125" />
                  </div>
                  <div className="flex flex-col items-center px-5">
                    <h2 className=" text-primaryLight font-medium text-2lg py-5">
                      FLUTTER
                    </h2>
                    <MySVG12 className="w-20 h-20 hover: brightness-125" />
                  </div>
                </div>
              </Marquee>
            </div>
          </section>
          {/* projects */}
          <section id="projects"></section>
          {/* contacts */}
          <section id="contact" className="about"></section>
        </header>
      </div>
    </Router>
  );
}

export default App;
