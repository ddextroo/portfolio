import { ReactComponent as MySVG } from "./AvatarAndIcons.svg";
import { ReactComponent as MySVG2 } from "./github-fill.svg";
import { ReactComponent as MySVG3 } from "./linkedin-box-fill.svg";

import { ReactComponent as MySVG4 } from "./skills/html-5-svgrepo-com.svg";
import { ReactComponent as MySVG5 } from "./skills/tailwind-svgrepo-com.svg";
import { ReactComponent as MySVG6 } from "./skills/java-svgrepo-com.svg";
import { ReactComponent as MySVG7 } from "./skills/cplusplus-svgrepo-com.svg";
import { ReactComponent as MySVG8 } from "./skills/csharp-svgrepo-com.svg";
import { ReactComponent as MySVG9 } from "./skills/figma-svgrepo-com.svg";
import { ReactComponent as MySVG10 } from "./skills/hack-the-box-svgrepo-com.svg";
import { ReactComponent as MySVG11 } from "./skills/art-palette-svgrepo-com.svg";
import { ReactComponent as MySVG12 } from "./skills/flutter-svgrepo-com.svg";

import { ReactComponent as MySVG13 } from "./arrow-up-s-fill.svg";

import mainAvatar from "./about_img.jpg";
import libratech from "./projects_img/libratech.png";
import datm from "./projects_img/datm.png";
import beart from "./projects_img/beart.png";
import iskolar from "./projects_img/iskolar.png";
import cake from "./projects_img/cake.png";
import crispy from "./projects_img/crispyking.png";
import emenu from "./projects_img/emenu.png";
import zlec from "./projects_img/zlec.png";
import burger from "./projects_img/burger.png";
import voting from "./projects_img/voting.png";
import roadgrill from "./projects_img/roadgrill.png";
import onlinegrading from "./projects_img/onlinegrading.png";
import pesoearn from "./projects_img/pesoearn.png";
import movingmarket from "./projects_img/movingmarket.png";
import projbyte from "./projects_img/projbyte.png";
import dmusic from "./projects_img/dmusic.png";
import d3ks from "./projects_img/d3ks.png";
import dcalculator from "./projects_img/dcalculator.png";
import dconverter from "./projects_img/dconverter.png";
import dyoutube from "./projects_img/dyoutube.png";
import dyt from "./projects_img/dyt.png";
import ictmod from "./projects_img/ictmod.png";

import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import { TypeAnimation } from "react-type-animation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ReactDOM from "react-dom";
import Scrollspy from 'react-scrollspy'

function App() {
  // https://github.com/developedbyed/react-portofolio-with-tailwind/blob/main/pages/index.js
  // https://www.freecodecamp.org/news/build-portfolio-website-react/
  // https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm
  // https://stackoverflow.com/questions/42318673/changing-the-git-user-inside-visual-studio-code

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState();
  const observer = useRef("home");
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);


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
        <header className="relative">
          <nav
            className={`font-poppins py-10 mb-12 flex flex-wrap items-center justify-between sticky top-0 ${isSticky ? "" : ""
              }`}
          >
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
              className={`${isMenuOpen
                ? "fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center bg-primaryDark text-center"
                : "hidden"
                } md:flex md:flex-row md:items-center`}
            >
              <Scrollspy
                className={`${isMenuOpen
                  ? "fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center bg-primaryDark text-center"
                  : "hidden"
                  } scrollspy md:flex md:flex-row md:items-center`} items={['home', 'about', 'skills', 'projects', 'contact']}
                currentClassName="isCurrent">
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${activeSection === "home"
                    ? "bg-colorAccent p-2 rounded-md font-poppins"
                    : ""
                    }`}
                >
                  <a href="#home" onClick={toggleMenu}> 
                    Home
                  </a>
                </li>
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${activeSection === "about"
                    ? "bg-colorAccent p-2 rounded-md font-poppins"
                    : ""
                    }`}
                >
                  <a href="#about" onClick={toggleMenu}>
                    About
                  </a>
                </li>
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${activeSection === "skills"
                    ? "bg-colorAccent p-2 rounded-md font-poppins"
                    : ""
                    }`}
                >
                  <a href="#skills" onClick={toggleMenu}>
                    Skills
                  </a>
                </li>
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${activeSection === "projects"
                    ? "bg-colorAccent p-2 rounded-md font-poppins"
                    : ""
                    }`}
                >
                  <a
                    href="#projects" onClick={toggleMenu}
                  >
                    Projects
                  </a>
                </li>
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${activeSection === "contact"
                    ? "bg-colorAccent p-2 rounded-md font-poppins"
                    : ""
                    }`}
                >
                  <a
                    href="#contact" onClick={toggleMenu}
                  >
                    Contact
                  </a>
                </li>
              </Scrollspy>

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
          {showScrollUpBtn && (
            <div className="fixed bottom-4 right-4">
              <button
                className="bg-primaryDarkLight hover:bg-colorAccent text-white rounded-full w-12 h-12 flex items-center justify-center"
                onClick={handleScrollUp}
              >
                <MySVG13 className="w-8 h-8 hover:brightness-125" />
              </button>
            </div>
          )}
          {/* <div className="fixed h-45 w-42 bg-purple-700 right-30 bottom-10 text-center leading-45 text-white z-50 text-30 rounded-6 cursor-pointer opacity-0 pointer-events-none transition-all duration-300 ease">
            <i>eds</i>
          </div> */}
          <section className="min-h-screen font-poppins" id="home">
            <div className={`p-10 ${isMenuOpen ? "hidden" : ""}`}>
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
                      () => { },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: "2em", display: "inline-block" }}
                  />
                  <div className="text-md py-5 mx-auto md:text-lg">
                    <a href="https://drive.google.com/file/d/1lkAr5cA7sEX_HNTCLiS5WWNddzqk6Sb-/preview">
                      <button class="px-20 py-2 bg-green-200 rounded-lg shadow-xl hover:bg-colorAccent transform hover:scale-105 hover:rotate-1 transition-all duration-250 focus:outline-none select-none font-medium text-primaryDark hover:text-primaryLight">
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
                <div className="md:basis-1/2 md:pr-4 lg:text-left">
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
                    this, my enthusiasm and eagerness to learn keep me going.
                    For the past three years, I've been freelancing and focusing
                    on app development. I'm committed to staying up-to-date with
                    emerging technologies, ensuring that I can adapt to the
                    ever-changing industry. I've also formed a team and
                    successfully created a startup app, which has boosted my
                    experience and fulfillment. Now, I'm ready to expand my
                    knowledge even further and strive for excellence in my
                    future projects.
                  </h3>
                </div>
              </div>
            </div>
          </section>
          {/* skills */}
          <section id="skills">
            <h2 className="font-poppins text-4xl text-colorAccent font-medium md:text-3xl py-10">
              SKILLS
            </h2>
            <div className="md:px-10 sm:px-10 lg:px-20">
              <Marquee
                gradient={false}
                gradientColor={[100, 100, 100]}
                speed={40}
                pauseOnHover={false}
                style={{
                  borderRadius: "10px",
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
                      C#
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
                      FLUTTER/DART
                    </h2>
                    <MySVG12 className="w-20 h-20 hover: brightness-125" />
                  </div>
                </div>
              </Marquee>
            </div>
          </section>
          {/* projects */}
          <section id="projects" className="p-10">
            <h2 className="font-poppins text-4xl text-colorAccent font-medium md:text-3xl py-10">
              PROJECTS
            </h2>
            <div className="p-10 flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Libratech
                  </h2>
                  <h3 className="font-poppins basis-1/3 flex-1 lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    LibraTech is a modern library management system designed to
                    streamline library operations, improve patron experience, and
                    enhance library engagement.
                  </h3>
                  <div className="font-poppins basis-1/3 flex-1 text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Desktop
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        SMTP
                      </h3>
                    </div>
                  </div>
                  <div className="w-3/3 flex-1">
                    <img
                      src={libratech}
                      class="w-auto h-auto rounded-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins basis-1/3 flex-1 text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    DATM Bank - Bank Management System
                  </h2>
                  <h3 className="font-poppins basis-1/3 flex-1 lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    dATM Bank System is a user-friendly banking system with
                    various features. Authenticated users can perform tasks like
                    checking their account balance, withdrawing and depositing
                    cash, viewing account details, transaction history, changing
                    account number and PIN, transferring money, and signing out.
                  </h3>
                  <div className="font-poppins basis-1/3 flex-1 text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Console
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        C
                      </h3>
                    </div>
                  </div>
                  <div className="w-3/3 flex-1">
                    <img
                      src={datm}
                      class="w-auto h-auto rounded-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    D3KS Keylogger
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    It is a powerful software application that discreetly records
                    and captures keystrokes entered on a computer system. This
                    specialized keylogger not only logs the keystrokes but also
                    incorporates an SMTP (Simple Mail Transfer Protocol)
                    functionality.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Desktop
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        C#
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        SMTP
                      </h3>
                    </div>
                  </div>
                  <img
                    src={d3ks}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    DYoutube Downloader
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    YouTube downloader written in C# with an API is a powerful tool that allows users to download videos from YouTube directly to their devices. It leverages the capabilities of the YouTube API to fetch video metadata and download the corresponding video files.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        C#
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        API
                      </h3>
                    </div>
                  </div>
                  <img
                    src={dyoutube}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Cake Onlineshop
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Concept mobile application for contactless doing of order and
                    has an inventory system feature. It is a Digital-Menu where
                    customers can select their desired order and get the total
                    expenses in an instant. It supports in-store purchase and
                    door-to-door delivery purchase.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={cake}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Crispy King
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Concept mobile application for contactless doing of order and
                    has an inventory system feature. It is a Digital-Menu where
                    customers can select their desired order and get the total
                    expenses in an instant. It supports in-store purchase and
                    door-to-door delivery purchase.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={crispy}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>


              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    EMenu
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Concept mobile application for contactless doing of order and
                    has an inventory system feature. It is a Digital-Menu where
                    customers can select their desired order and get the total
                    expenses in an instant. It supports in-store purchase and
                    door-to-door delivery purchase.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={emenu}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    ZLEC
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    It is a social media platform that give user information,
                    tutorials and awareness about cybersecurity. This app contains
                    categories that represents hacking methods and there's a feed
                    that can post their concerns.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={zlec}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                  <div className="text-md py-5 mx-auto md:text-lg text-left">
                    <a href="https://drive.google.com/file/d/1lkAr5cA7sEX_HNTCLiS5WWNddzqk6Sb-/preview">
                      <button class="font-poppins px-5 py-2 bg-primaryDark rounded-lg shadow-xl hover:bg-colorAccent transform hover:scale-105 hover:rotate-1 transition-all duration-250 focus:outline-none select-none font-medium text-primaryLight xl:px-30 lg:px-20 md:px-10 sm:px-5">
                        Preview
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Angels Burger Inventory System
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Commisioned by a student from Surigao State University, It is
                    an automatic inventory system where staff can inventorize
                    their products and materials. It has also an administrator
                    access where managers can see their staffs' records. With this
                    app there is a transparency that minimizes corruption and it
                    helps the stores to be on track with the number of its
                    material and products.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={burger}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    SSCT Voting System
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Commissioned by a Student from Surigao State University, Its
                    main function is an automated voting system where admistrators
                    can add candidates and their respective positions. After the
                    voting process the mobile application hosted in FireBase will
                    automatically compute the tally of votes gathered during the
                    contactless election.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={voting}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Online Grading System
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    It is a concept of Automatic Information Management System
                    a.k.a AIMS, It is a platform where professors or the
                    management can add students, do announcements and can post the
                    ratings/grades of students enrolled in their institution.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={onlinegrading}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Roadgrill Order System
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Concept mobile application for contactless doing of order and
                    has an inventory system feature. It is a Digital-Menu where
                    customers can select their desired order and get the total
                    expenses in an instant. It supports in-store purchase and
                    door-to-door delivery purchase.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={roadgrill}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Projbyte
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Projbyte is an innovative and dynamic mobile application that
                    serves as a thriving hub for developers and technology
                    students. This powerful platform fosters a vibrant community
                    where users can explore a diverse range of engaging content
                    such as blogs, tutorials, and forums.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={projbyte}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>


              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Beart
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Beart is an app that allows artist known by uploading it
                    online and earning money through sales or commission pay.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={beart}
                    class="h-auto w-auto rounded-lg object-contain"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Pesoearn
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Pesoearn is a mobile application that offers users the
                    opportunity to earn rewards while enjoying various audio
                    content such as podcasts, audiobooks, and more. By listening
                    to these audio materials, users can accumulate credits based
                    on the value set by advertisers and sponsors.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={pesoearn}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Moving Market
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Moving Market is a mobile application designed to make
                    shopping for vegetables and necessary items a convenient and
                    hassle-free experience. With its innovative features, the app
                    allows users to access a map that displays the available
                    markets in their vicinity. Users can explore the map, identify
                    nearby markets, and select the ones that suit their
                    preferences. The app provides a platform for users to browse
                    and purchase a variety of vegetables and other essential items
                    directly from these markets.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={movingmarket}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>


              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    DMusic Player
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Java Firebase Console Music Player is a feature-rich app that offers users a seamless music streaming and downloading experience. Developed in Java, the app integrates with Firebase, a popular cloud-based platform, to provide a robust backend infrastructure.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={dmusic}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>


              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    DCalculator
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    The Simple Calculator with Clean UI is a user-friendly app that provides basic arithmetic functionality in a minimalist and intuitive interface. Designed for simplicity and ease of use, this calculator allows users to perform simple calculations quickly and efficiently.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={dcalculator}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>


              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    DConverter
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    The All-in-One Converter app in Java is a comprehensive tool that simplifies conversions in math, geometry, and measurements. It offers users a convenient way to convert values between different units and systems, making calculations and conversions hassle-free.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={dconverter}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    ICT Modules
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    Moving Market is a mobile application designed to make
                    shopping for vegetables and necessary items a convenient and
                    hassle-free experience. With its innovative features, the app
                    allows users to access a map that displays the available
                    markets in their vicinity. Users can explore the map, identify
                    nearby markets, and select the ones that suit their
                    preferences. The app provides a platform for users to browse
                    and purchase a variety of vegetables and other essential items
                    directly from these markets.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={ictmod}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                </div>
              </div>

              <div className="basis-1/3 flex-1 bg-primaryDarkLight rounded-xl shadow-md p-10">
                <div className="flex flex-col justify-between">
                  <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-left">
                    Iskolar ng Bayan
                  </h2>
                  <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark:text-gray-200 mx-auto md:text-md">
                    An application that hosts compiled, comprehensive, and concise
                    reviewers for college entrance examinations. It features
                    groupchats to keep students updated, It has video manuals and
                    readable modules.
                  </h3>
                  <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppin bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray rounded-md text-justify px-5 text-primaryLight dark:text-gray-200 mx-auto md:text-md">
                        Android
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Java
                      </h3>
                    </div>
                    <div className="w-auto px-1 mb-3 md:mb-0">
                      <h3 className="font-poppins bg-primaryDark hover:bg-colorAccent rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md">
                        Firebase
                      </h3>
                    </div>
                  </div>
                  <img
                    src={iskolar}
                    class="w-auto h-auto rounded-lg object-cover"
                    alt=""
                  />
                  <div className="text-md py-5 mx-auto md:text-lg text-left">
                    <a href="https://play.google.com/store/apps/details?id=com.ultima.examviewer&hl=en-PH">
                      <button class="font-poppins px-5 py-2 bg-primaryDark rounded-lg shadow-xl hover:bg-colorAccent transform hover:scale-105 hover:rotate-1 transition-all duration-250 focus:outline-none select-none font-medium text-primaryLight xl:px-30 lg:px-20 md:px-10 sm:px-5">
                        Download
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contacts */}
          <section id="contact" className="contact"></section>
        </header>
      </div>
    </Router>
  );
}

export default App;
