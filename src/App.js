import { ReactComponent as MySVG2 } from "./assets/github-fill.svg";
import { ReactComponent as MySVG3 } from "./assets/linkedin-box-fill.svg";

import { ReactComponent as MySVG4 } from "./skills/html-5-svgrepo-com.svg";
import { ReactComponent as MySVG5 } from "./skills/tailwind-svgrepo-com.svg";
import { ReactComponent as MySVG6 } from "./skills/java-svgrepo-com.svg";
import { ReactComponent as MySVG7 } from "./skills/cplusplus-svgrepo-com.svg";
import { ReactComponent as MySVG8 } from "./skills/csharp-svgrepo-com.svg";
import { ReactComponent as MySVG9 } from "./skills/figma-svgrepo-com.svg";
import { ReactComponent as MySVG10 } from "./skills/hack-the-box-svgrepo-com.svg";
import { ReactComponent as MySVG12 } from "./skills/flutter-svgrepo-com.svg";
import audio from "./skills/audio.wav";
import vid from "./skills/vid.mp4";
import Projs from "./components/projs";

import { ReactComponent as MySVG13 } from "./assets/arrow-up-s-fill.svg";
import { ReactComponent as MySVG14 } from "./assets/menu-3-line.svg";
import { ReactComponent as MySVG15 } from "./assets/close-line.svg";
import { Input, Textarea } from "@material-tailwind/react";

import mainAvatar from "./assets/about_img.jpg";

import "./App.css";
import React, { useState, useEffect, useRef, lazy } from "react";
import DrifterStars from "@devil7softwares/react-drifter-stars";
import { TypeAnimation } from "react-type-animation";
import { BrowserRouter as Router } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import AOS from "aos";
import "aos/dist/aos.css";
import Confetti from "react-confetti";
import ExperienceItem from "./components/experience";
import Marquee from "react-fast-marquee";
import Gallery from './components/gallery'
const video = lazy(() => import('./components/video'))

function App() {
  // https://github.com/developedbyed/react-portofolio-with-tailwind/blob/main/pages/index.js
  // https://www.freecodecamp.org/news/build-portfolio-website-react/
  // https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm
  // https://stackoverflow.com/questions/42318673/changing-the-git-user-inside-visual-studio-code

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState();
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const currentYear = new Date().getFullYear();

  const videoRef = useRef(null);

  const formRef = useRef(null);

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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const Modal = ({ onClose }) => (
    <div className="modal-overlay justify-center items-center flex fixed inset-0 z-50 bg-black bg-opacity-50 rounded-xl">
      <Confetti width={screenWidth} height={screenHeight} />
      <div className="modal justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto relative w-auto my-6 mx-auto max-w-3xl">
        <div className="modal-content p-5 backdrop-filter backdrop-blur-lg rounded-xl border-white/30 border bg-primaryDarkLight/30 max-h-full h-full font-poppins overflow-auto overflow-x-hidden ml-20 mr-20">
          <div className="flex flex-row justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="60"
              height="60"
              p-10
            >
              <path
                d="M22 14H20V7.23792L12.0718 14.338L4 7.21594V19H14V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V14ZM4.51146 5L12.0619 11.662L19.501 5H4.51146ZM19 22L15.4645 18.4645L16.8787 17.0503L19 19.1716L22.5355 15.636L23.9497 17.0503L19 22Z"
                fill="rgba(254,253,253,1)"
              ></path>
            </svg>
          </div>
          <p className="font-poppins text-2xl p-5 text-primaryLight">
            Message successfully sent
          </p>
          <p className="text-md p-5 text-gray">
            Thank you for reaching out to us! We value your feedback and are
            here to assist you.
          </p>
          <button
            class="px-20 py-2 mb-5 bg-colorAccentDark rounded-lg shadow-xl hover:bg-colorAccent transform hover:scale-105 hover:rotate-1 transition-all duration-250 focus:outline-none select-none font-medium text-primaryLight hover:text-primaryLight"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
      threshold: [0.25, 0.75],
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

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxJ_-tyzfd1HAXEHh_wLt62AI-qgGjFrBuLftv-yVx0H0FKYYk3gvwFa_zvxUyyqUzR/exec";

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        openModal();
      })
      .catch((err) => console.log(err));
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
            <h1 className="text-xl px-8 text-colorAccent font-poppins">
              <a
                href="#home"
                onClick={handleMenuItemClick}
                className="font-anurati"
              >
                DEXTRO
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
                items={["home", "about", "experience", "projects", "contact"]}
                currentClassName="isCurrent"
              >
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${
                    activeSection === "home"
                      ? "bg-colorAccent p-2 rounded-md font-poppins"
                      : ""
                  }`}
                >
                  <a href="#home" onClick={handleMenuItemClick}>
                    Home
                  </a>
                </li>
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${
                    activeSection === "about"
                      ? "bg-colorAccent p-2 rounded-md font-poppins"
                      : ""
                  }`}
                >
                  <a href="#about" onClick={handleMenuItemClick}>
                    About
                  </a>
                </li>
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${
                    activeSection === "experience"
                      ? "bg-colorAccent p-2 rounded-md font-poppins"
                      : ""
                  }`}
                >
                  <a href="#experience" onClick={handleMenuItemClick}>
                    Experience
                  </a>
                </li>
                <li
                  className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-colorAccent p-2 rounded-md duration-200 mr-5 text-primaryLight text-lg scroll-smooth hover:scroll-auto ${
                    activeSection === "projects"
                      ? "bg-colorAccent p-2 rounded-md font-poppins"
                      : ""
                  }`}
                >
                  <a href="#projects" onClick={handleMenuItemClick}>
                    Projects
                  </a>
                </li>
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
              </Scrollspy>
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
              <div className="md:pr-4 lg:text-center" data-aos="fade-right">
                <h2 className="text-4xl text-teal-400 font-semibold whitespace-nowrap md:text-4xl lg:text-5xl">
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
                {/* <video
                  className="video__player w-full lg:max-w-5xl flex justify-center items-center rounded-lg"
                  loop
                  controls
                  ref={videoRef}
                >
                  <source src={vid} type="video/mp4" />
                  Your browser does not support the audio tag.
                </video> */}
                <video ref={videoRef} src={vid} className="w-full lg:max-w-5xl flex justify-center items-center rounded-lg"/>
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
        <section className="about min-h-fit font-poppins" id="about">
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
                <h2 className=" text-4xl text-colorAccent font-bold md:text-3xl">
                  About
                </h2>
                <h3 className="text-justify py-5 text-gray dark:text-gray-200 mx-auto md:text-lg">
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

                <audio className="w-full mt-5" controls>
                  <source src={audio} type="audio/wav" />
                  Your browser does not support the audio tag.
                </audio>
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
            <h2 className=" text-4xl text-colorAccent font-bold md:text-3xl md:mt-10 sm:mt-5">
              Gallery
            </h2>
            <Marquee
              gradient={false}
              gradientColor={[100, 100, 100]}
              speed={40}
              pauseOnHover={false}
              style={{
                borderRadius: "10px",
              }}
            >
              <div className="flex flex-row md: mt-10">
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2Fsketch1588494312824.jpg?alt=media&token=be54e4a9-dbaa-45d7-b64c-0c0a75220fb5&_gl=1*14dh3o3*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzYzNTguNDcuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2F1582079745245.jpg?alt=media&token=eb7d2e4e-074b-4d86-ac9d-447b64913d41&_gl=1*ivb3zr*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY1MjEuNDguMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2F1588230595317.jpg?alt=media&token=269769d7-b307-46ab-b68e-a74801299d26&_gl=1*z7xj7j*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY1MzguMzEuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2F1589878996304_95193523.png?alt=media&token=1f422a63-c126-4801-9adc-9c676957d66b&_gl=1*ic921r*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY1NTguMTEuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2F1590068882874.jpg?alt=media&token=777f009d-70eb-41f2-a3bc-77ef309c4ccc&_gl=1*hmp1w3*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY2MjYuNjAuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2F1590673592629_393820671.png?alt=media&token=2ddf7005-2e75-4bbc-89a7-58239d2381eb&_gl=1*atq3b4*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY2NDIuNDQuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2F715cefb1-442f-4fea-a8bb-6b3a5ec35bc9.png?alt=media&token=d773d64b-2d09-4473-8c4e-df6cd4cfb679&_gl=1*10b7g1p*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY2NTMuMzMuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2F79908695-7391-4e5a-99ec-59fa31b2675d.png?alt=media&token=77bdf957-f8ef-4ae0-a764-49f30bf501e1&_gl=1*o83kso*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY2NzIuMTQuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2F7c970f14-1d9c-4220-b7bd-736ed1ec3e05.png?alt=media&token=eb69986c-ae24-4181-882e-6f6f6c71ee20&_gl=1*19h2dbp*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY2ODUuMS4wLjA."/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2FIMG_20201224_192725.jpg?alt=media&token=2646b481-ae3b-479f-8880-351c5f6154c5&_gl=1*qa3eqh*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY3MzUuMjEuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2FIMG_20210522_103815.jpg?alt=media&token=55320436-033d-460e-bd62-abb9e479b967&_gl=1*72qws9*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY3NTAuNi4wLjA."/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2FLANDSCAPE_Light%20trails.jpg?alt=media&token=bd63c7b0-8ff6-44ff-b224-d9c3f4c410ff&_gl=1*dhzpls*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY3ODQuNDUuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2FLRM_EXPORT_14204989112132_20191230_001255813.jpeg?alt=media&token=402d56fc-7e3f-4170-81ff-5a439e3818f1&_gl=1*98klo9*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY4NDIuNjAuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2FLRM_EXPORT_28472159103096_20191105_140217355.jpeg?alt=media&token=67e4a816-4789-4bb8-aafc-bc2a2c24d983&_gl=1*1lpxkiv*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY4NTcuNDUuMC4w"/>
                <Gallery path="https://firebasestorage.googleapis.com/v0/b/ddev-77971.appspot.com/o/post%2FLRM_EXPORT_379985255874837_20200108_180826337.jpeg?alt=media&token=50229a4d-4d09-4a48-9313-d344b8f874f6&_gl=1*8b5nby*_ga*MTY5MTQ2MC4xNjk3Njk0MDU5*_ga_CW55HF8NVT*MTY5OTIzNjIzMC4yNy4xLjE2OTkyMzY4NzYuMjYuMC4w"/>
              </div>
            </Marquee>
          </div>
        </section>
        <section
          id="experience"
          className="experience p-10 min-h-fit font-poppins"
        >
          <div className="ml-14">
            <h2 className=" text-4xl text-colorAccent font-bold md:text-3xl py-2">
              Experience
            </h2>
            <p className="font-poppins text-md text-gray">
              My experience in tech
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <ExperienceItem
              year="2023-2024"
              title="Google Developer Student Club"
              description="Mobile Development Lead"
              isFirst
            />
            <ExperienceItem
              year="2021-Present"
              title="Ultima Reviewer"
              description="Full Stack Mobile Developer for the app 'Iskolar ng Bayan'."
            />
            <ExperienceItem
              year="2020-Present"
              title="Freelancer"
              description="Freelancing on mobile, and software apps."
            />
            <ExperienceItem
              year="2020"
              title="Unirises"
              description="As Project Lead and MVP developer"
            />
            <ExperienceItem
              year="2018-2020"
              title="Security Researcher"
              description="Self taught on cybersecurity stuff"
              isLast
            />
            {/* Add more ExperienceItem components for additional experiences */}
          </div>
        </section>
        {/* projects */}
        <section id="projects" className="p-10 min-h-fit">
          <h2 className=" text-4xl text-colorAccent font-bold md:text-3xl py-2">
            Projects
          </h2>
          <p className="font-poppins text-md text-gray">26 total of projects</p>
          <div className="p-10" data-aos="zoom-in-up">
            <Projs></Projs>
          </div>
        </section>
        <section className="contact min-h-fit font-poppins" id="contact">
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
                <form
                  className="backdrop-filter backdrop-blur-lg rounded-xl border-white/30 border bg-primaryDarkLight/30 p-10"
                  method="post"
                  ref={formRef}
                  name="google-sheet"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-5">
                    <h2 className="text-4xl font-semibold text-colorAccent">
                      Contact me
                    </h2>
                  </div>

                  <div className="mb-5 font-poppins">
                    <Input
                      label="Name"
                      color="teal"
                      className="text-white font-poppins"
                      name="name"
                    />
                  </div>
                  <div className="mb-5">
                    <Input
                      label="Email"
                      color="teal"
                      className="text-white font-poppins"
                      name="email"
                    />
                  </div>
                  <div className="mb-5">
                    <Textarea
                      size="xl"
                      color="teal"
                      label="Message"
                      className="text-white placeholder-white font-poppins"
                      name="message"
                    />
                  </div>
                  <div className="mb-5 flex justify-end items-center">
                    <a href="https://github.com/ddextroo">
                      <MySVG2 className="mr-1 w-8 h-8 hover:brightness-125" />
                    </a>
                    <a href="https://www.linkedin.com/in/dexter-inguito-b039a827b">
                      <MySVG3 className="mr-2 w-8 h-8 hover:brightness-125" />
                    </a>
                    <button
                      class="px-10 py-3 bg-colorAccentDark rounded-lg shadow-xl hover:bg-colorAccent transform hover:scale-105 hover:rotate-1 transition-all duration-250 focus:outline-none select-none font-medium text-primaryLight hover:text-primaryLight"
                      name="submit"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="backdrop-filter backdrop-blur-lg rounded-t-xl border-white/30 border bg-primaryDarkLight/30 text-gray py-4 text-center font-poppins">
          <p>
            Copyright &copy; 2019 - {currentYear} DDev | All Rights Reserved.
          </p>
        </footer>
        {showModal && <Modal onClose={closeModal} />}
      </div>
    </Router>
  );
}

export default App;
