import { ReactComponent as MySVG } from "./AvatarAndIcons.svg";
import { ReactComponent as MySVG2 } from "./github-fill.svg";
import { ReactComponent as MySVG3 } from "./linkedin-box-fill.svg";
import { ReactComponent as MySVG33 } from "./mail-fill.svg";

import { ReactComponent as MySVG4 } from "./skills/html-5-svgrepo-com.svg";
import { ReactComponent as MySVG5 } from "./skills/tailwind-svgrepo-com.svg";
import { ReactComponent as MySVG6 } from "./skills/java-svgrepo-com.svg";
import { ReactComponent as MySVG7 } from "./skills/cplusplus-svgrepo-com.svg";
import { ReactComponent as MySVG8 } from "./skills/csharp-svgrepo-com.svg";
import { ReactComponent as MySVG9 } from "./skills/figma-svgrepo-com.svg";
import { ReactComponent as MySVG10 } from "./skills/hack-the-box-svgrepo-com.svg";
import { ReactComponent as MySVG11 } from "./skills/art-palette-svgrepo-com.svg";
import { ReactComponent as MySVG12 } from "./skills/flutter-svgrepo-com.svg";
import audio from "./skills/audio.mp3";
import vid from "./skills/vid.mp4";
import Projs from "./components/projs";
  
import { ReactComponent as MySVG13 } from "./arrow-up-s-fill.svg";
import { ReactComponent as MySVG14 } from "./menu-3-line.svg";
import { ReactComponent as MySVG15 } from "./close-line.svg";
import {
  Input,
  Textarea,
} from "@material-tailwind/react";

import mainAvatar from "./about_img.jpg";

import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import { TypeAnimation } from "react-type-animation";
import { BrowserRouter as Router} from "react-router-dom";
import Scrollspy from "react-scrollspy";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // https://github.com/developedbyed/react-portofolio-with-tailwind/blob/main/pages/index.js
  // https://www.freecodecamp.org/news/build-portfolio-website-react/
  // https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm
  // https://stackoverflow.com/questions/42318673/changing-the-git-user-inside-visual-studio-code

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState();
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);

  const videoRef = useRef(null);


  const items = [
    {
      text: "HTML",
      component: <MySVG4 className="w-10 h-10 hover:brightness-125" />,
    },
    {
      text: "JAVA",
      component: <MySVG6 className="w-10 h-10 hover:brightness-125" />,
    },
    {
      text: "Tailwind CSS",
      component: <MySVG5 className="w-10 h-10 hover:brightness-125" />,
    },
    {
      text: "C++",
      component: <MySVG7 className="w-10 h-10 hover:brightness-125" />,
    },
    {
      text: "C#",
      component: <MySVG8 className="w-10 h-10 hover:brightness-125" />,
    },
    {
      text: "UI/UX DESIGN",
      component: <MySVG9 className="w-10 h-10 hover:brightness-125" />,
    },
    {
      text: "CYBERSECURITY",
      component: <MySVG10 className="w-10 h-10 hover:brightness-125" />,
    },
    {
      text: "FLUTTER/DART",
      component: <MySVG12 className="w-10 h-10 hover:brightness-125" />,
    },
  ];

  const handleSectionClick2 = (sectionId) => {
    setActiveSection(sectionId);
  };

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
    let options = {
      rootMargin: "0px",
      threshold: [0.25, 0.75]
    };
    let handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };
    let observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  });

  useEffect(() => {
    AOS.init();

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
        console.log(isSticky);
      } else {
        setIsSticky(false);
      }

      if (window.scrollY > 500) {
        setShowScrollUpBtn(true);
      } else {
        setShowScrollUpBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

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
        <header className="sticky top-0 z-10">
          <nav
            className={`font-poppins py-10 mb-12 flex flex-wrap items-center justify-between sticky top-0 ${
              isSticky ? "" : ""
            }`}
          >
            <h1 className="text-xl px-8 text-colorAccent font-darknet">
              <a
                href="#home"
                onClick={handleMenuItemClick}
                className="font-bold"
              >
                &lt;/DDev&gt;
              </a>
            </h1>
            <div className="md:hidden">
              <button
                className="text-primaryLight hover:text-colorAccent focus:outline-none px-10"
                onClick={toggleMenu}
              >
                <MySVG14 className="w-5 h-5 hover: brightness-125" />
              </button>
            </div>
            <ul
              className={`${
                isMenuOpen
                  ? "fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center bg-primaryDark text-center"
                  : `${
                      isSticky
                        ? " rounded-l-lg backdrop-filter backdrop-blur-lg border-white/30 border bg-primaryDarkLight/30 pl-3 p-2 "
                        : ""
                    }hidden`
              } md:flex md:flex-row md:items-center`}
              onClick={handleMenuItemClick}
            >
              <Scrollspy
                className={`${
                  isMenuOpen
                    ? "fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center bg-primaryDark text-center"
                    : "hidden"
                } scrollspy md:flex md:flex-row md:items-center`}
                items={["home", "about", "projects", "contact"]}
                currentClassName="isCurrent"
              >
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${
                    activeSection === "home"
                      ? "bg-colorAccent p-2 rounded-md font-poppins"
                      : ""
                  }`}
                >
                  <a href="#home" onClick={handleMenuItemClick}>Home</a>
                </li>
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${
                    activeSection === "about"
                      ? "bg-colorAccent p-2 rounded-md font-poppins"
                      : ""
                  }`}
                  
                >
                  <a href="#about" onClick={handleMenuItemClick}>About</a>
                </li>
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${
                    activeSection === "projects"
                      ? "bg-colorAccent p-2 rounded-md font-poppins"
                      : ""
                  }`}
                  
                >
                  <a href="#projects" onClick={handleMenuItemClick}>Projects</a>
                </li>
              </Scrollspy>

              {isMenuOpen && (
                <li className="absolute top-0 right-0 mt-2 mr-4">
                  <button
                    className="text-primaryLight hover:text-colorAccent focus:outline-none p-10"
                    onClick={toggleMenu}
                  >
                    <MySVG15 className="w-5 h-5 hover: brightness-125" />
                  </button>
                </li>
              )}
            </ul>
          </nav>
          {showScrollUpBtn && (
            <div className="fixed bottom-4 right-4">
              <button
                className="backdrop-filter backdrop-blur-lg bg-primaryDarkLight/30 border-white/30 border hover:bg-colorAccent/30 text-white rounded-full w-12 h-12 flex items-center justify-center"
                onClick={handleScrollUp}
              >
                <MySVG13 className="w-8 h-8 hover:brightness-125" />
              </button>
            </div>
          )}
          {/* <div className="fixed h-45 w-42 bg-purple-700 right-30 bottom-10 text-center leading-45 text-white z-50 text-30 rounded-6 cursor-pointer opacity-0 pointer-events-none transition-all duration-300 ease">
            <i>eds</i>
          </div> */}
        </header>
        <section className="home min-h-fit font-poppins" id="home">
          <div className={`p-10 ${isMenuOpen ? "hidden" : ""}`}>
            <div className="flex flex-col items-center text-sm">
              <div
                className="md:pr-4 lg:text-center"
                data-aos="fade-right"
              >
                <h2 className="text-4xl text-teal-400 font-poppins whitespace-nowrap md:text-4xl lg:text-5xl">
                  Dexter G. Inguito
                </h2>
                <TypeAnimation
                  className="text-md py-5 text-gray dark:text-gray-200 max-w-xl mx-auto md:text-lg sm:text-sm"
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
                  <a href="#contact" className="contact">
                   <button class="px-20 py-2 bg-colorAccentDark rounded-lg shadow-xl hover:bg-colorAccent transform hover:scale-105 hover:rotate-1 transition-all duration-250 focus:outline-none select-none font-medium text-primaryLight hover:text-primaryLight">
                      Let's talk
                    </button>
                  </a>
                </div>
                <audio className="w-full mt-5" controls>
                  <source src={audio} type="audio/mp3" />
                  Your browser does not support the audio tag.
                </audio>
              </div>
              <div className="md:px-10 sm:px-10 lg:px-20 flex-row justify-center items-center">
                {/* <Marquee
                  gradient={false}
                  gradientColor={[100, 100, 100]}
                  speed={40}
                  pauseOnHover={false}
                  style={{
                    borderRadius: "10px",
                  }}
                > */}
                <div className="flex flex-wrap justify-center text-primaryLight py-5 font-poppins md:flex-nowrap">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center px-5 md: mb-3 mr-0 sm:mb-3"
                    >
                      {item.component}
                    </div>
                  ))}
                </div>
                <video
                    className="video__player w-full lg:max-w-5xl flex justify-center items-center rounded-lg"
                    loop
                    controls
                    ref={videoRef}
                  >
                    <source src={vid} type="video/mp4" />
                  Your browser does not support the audio tag.
                  </video>
                <div
                  className="flex-row lg:w-2/3 items-center"
                  data-aos="fade-left"
                >
                  {/* <MySVG className="w-full h-auto" /> */}
                </div>
                {/* </Marquee> */}
              </div>
            </div>
          </div>
        </section>
        <section className="about min-h-fit" id="about">
          <div className={`p-10 ${isMenuOpen ? "hidden" : ""}`}>
            <div className="flex flex-col lg:flex-row items-center text-sm">
              <div class="p-10 md:w-1/2 md:pl-4" data-aos="zoom-in">
                <img
                  src={mainAvatar}
                  class="lg:p-10 h-auto max-w-full rounded-full xl:p-20"
                  alt=""
                />
              </div>
              <div
                className="md:basis-1/2 md:pr-4 lg:text-left"
                data-aos="zoom-in-left"
              >
                <h2 className="font-poppins text-4xl text-colorAccent font-medium md:text-3xl">
                  About me
                </h2>
                <h3 className="font-poppins text-justify py-5 text-gray dark:text-gray-200 mx-auto md:text-lg">
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
                {/* <div className="text-md mx-auto md:text-lg text-center flex items-end justify-start xl:justify-start lg:justify-start">
                  <a href="https://github.com/ddextroo">
                    <MySVG2 className="mr-2 w-8 h-8 hover:brightness-125" />
                  </a>
                  <a href="https://www.linkedin.com/in/dexter-inguito-b039a827b">
                    <MySVG3 className="mr-2 w-8 h-8 hover:brightness-125" />
                  </a>
                  <a href="mailto:dexteringuito@gmail.com?subject = Feedback&body = Message">
                    <MySVG33 className="w-8 h-8 hover:brightness-125" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* projects */}
        <section id="projects" className="p-10 min-h-fit">
          <h2 className="font-poppins text-4xl text-colorAccent font-medium md:text-3xl py-10">
            PROJECTS
          </h2>
          <div
            className="p-10"
            data-aos="zoom-in-up"
          >
            <Projs></Projs>
          </div>
        </section>
        <section className="contact min-h-fit" id="contact">
          <div className={`p-10 ${isMenuOpen ? "hidden" : ""}`}>
            <div className="flex flex-col lg:flex-row justify-center items-center text-sm">
              <div class="m-5 md:basis-1/2 rounded-md" data-aos="zoom-in">
                <iframe
                  style={{
                    height: "400px",
                    width: "100%",
                    border: "0",
                    borderRadius: "10px",
                  }}
                  src="https://www.google.com/maps/embed/v1/streetview?location=10.3284,123.9305&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </div>
              <div
                className="md:w-1/2 m-2 md:pr-4 lg:text-left font-poppins lg:mt-5"
                data-aos="zoom-in-left"
              >
                <form className="backdrop-filter backdrop-blur-lg rounded-xl border-white/30 border bg-primaryDarkLight/30 p-10">
                <div className="mb-5">
                  <h2 className="text-4xl font-poppins text-colorAccent">
                    Contact me
                  </h2>
                </div>
              
                <div className="mb-5">
                  <Input label="Name" color="teal" className="text-white" />
                </div>
                <div className="mb-5">
                  <Input label="Email" color="teal" className="text-white" />
                </div>
                <div className="mb-5">
                  <Textarea size="xl" color="teal" label="Message" className="text-white placeholder-white" />
                </div>
                <div className="mb-5 flex justify-end items-center">
                  <a href="https://github.com/ddextroo">
                    <MySVG2 className="mr-2 w-8 h-8 hover:brightness-125" />
                  </a>
                  <a href="https://www.linkedin.com/in/dexter-inguito-b039a827b">
                    <MySVG3 className="mr-2 w-8 h-8 hover:brightness-125" />
                  </a>
                  <button class="px-10 py-3 bg-colorAccentDark rounded-lg shadow-xl hover:bg-colorAccent transform hover:scale-105 hover:rotate-1 transition-all duration-250 focus:outline-none select-none font-medium text-primaryLight hover:text-primaryLight">
                      Send Message
                    </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
