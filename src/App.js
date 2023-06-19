import { ReactComponent as MySVG } from "./AvatarAndIcons.svg";
import { ReactComponent as MySVG2 } from "./github-fill.svg";
import { ReactComponent as MySVG3 } from "./messenger-fill.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import DrifterStars from '@devil7softwares/react-drifter-stars'
import { TypeAnimation } from 'react-type-animation';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
        <div className="absolute top-0 left-0 w-full h-full z-0">
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
                className={`${isMenuOpen
                  ? "fixed top-0 left-0 h-screen w-screen flex flex-col justify-center items-center bg-primaryDark text-center"
                  : "hidden"
                  } md:flex md:flex-row md:items-center`}
              >
                <li className="mr-7 text-primaryLight text-lg scroll-smooth hover:scroll-auto">
                  <a href="#nav" onClick={handleMenuItemClick}>
                    Home
                  </a>
                </li>
                <li className="mr-7 text-primaryLight text-lg scroll-smooth hover:scroll-auto">
                  <a href="#home" onClick={handleMenuItemClick}>
                    About
                  </a>
                </li>
                <li className="mr-7 text-primaryLight text-lg scroll-smooth hover:scroll-auto">
                  <a href="#about" onClick={handleMenuItemClick}>
                    Service
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
                  <h2 className="text-5xl text-colorAccent font-medium md:text-6xl">
                    Dexter G. Inguito
                  </h2>
                  <TypeAnimation
                    className="text-md py-5 text-gray dark:text-gray-200 max-w-xl mx-auto md:text-xl"
                    sequence={[
                      'Android Developer',
                      1000,
                      'Software Developer',
                      2000,
                      () => { },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ fontSize: '2em', display: 'inline-block' }}
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
                      <MySVG2 className="w-8 h-8 hover:brightness-125" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100088807875457">
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
          {/* about */}
          <section id="about">
          </section>
          {/* service */}
          <section id="service">
          </section>
          {/* skills */}
          <section id="skills">
          </section>
          {/* projects */}
          <section id="projects">
          </section>
          {/* contacts */}
          <section id="contact" className="about">
          </section>
        </header>
      </div>
    </Router>
  );
}

export default App;



