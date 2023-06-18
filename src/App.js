import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {

  // https://github.com/developedbyed/react-portofolio-with-tailwind/blob/main/pages/index.js
  // https://www.freecodecamp.org/news/build-portfolio-website-react/

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
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsNavbarSticky(true);
      } else {
        setIsNavbarSticky(false);
      }

      if (window.scrollY > 500) {
        setShowScrollUpButton(true);
      } else {
        setShowScrollUpButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App bg-primaryDark">
      <header>
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
          <div className="p-10 py-10">
            <h2 className="text-5xl text-colorAccent font-medium md:text-6xl">
              Dexter G. Inguito
            </h2>
            <h3 className="text-md py-5 text-gray dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Android Developer · Software Developer
            </h3>
          </div>
        </section>
        {/* about */}
        <section id="about">
          <div className="p-10 py-10">
            <h2 className="text-5xl text-colorAccent font-medium md:text-6xl">
              Dexter G. Inguito
            </h2>
            <h3 className="text-md py-5 text-gray dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Android Developer · Software Developer
            </h3>
          </div>
        </section>
        {/* service */}
        <section id="service">
          <div className="p-10 py-10">
            <h2 className="text-5xl text-colorAccent font-medium md:text-6xl">
              Dexter G. Inguito
            </h2>
            <h3 className="text-md py-5 text-gray dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Android Developer · Software Developer
            </h3>
          </div>
        </section>
        {/* skills */}
        <section id="skills">
          <div className="p-10 py-10">
            <h2 className="text-5xl text-colorAccent font-medium md:text-6xl">
              Dexter G. Inguito
            </h2>
            <h3 className="text-md py-5 text-gray dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Android Developer · Software Developer
            </h3>
          </div>
        </section>
        {/* projects */}
        <section id="projects">
          <div className="p-10 py-10">
            <h2 className="text-5xl text-colorAccent font-medium md:text-6xl">
              Dexter G. Inguito
            </h2>
            <h3 className="text-md py-5 text-gray dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Android Developer · Software Developer
            </h3>
          </div>
        </section>
        {/* contacts */}
        <section id="contact" className="about">
          <div className="p-10 py-10">
            <h2 className="text-5xl text-colorAccent font-medium md:text-6xl">
              Dexter G. Inguito
            </h2>
            <h3 className="text-md py-5 text-gray dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Android Developer · Software Developer
            </h3>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;



