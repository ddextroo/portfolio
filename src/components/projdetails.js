import React, { useState } from "react";

const Projdetails = ({ ProjDetails }) => {
  const { name, description, tech, img } = ProjDetails;
  const [isHovered, setIsHovered] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const Modal = ({ onClose }) => (
    <div className="modal-overlay justify-center items-center flex fixed inset-0 z-50 bg-black bg-opacity-50 rounded-xl h-full">
      <div className="modal justify-center items-center flex flex-col overflow-x-hidden overflow-y-auto relative w-auto my-6 mx-auto max-w-3xl h-full">
          <div className="modal-content p-5 backdrop-filter backdrop-blur-lg rounded-xl border-white/30 border bg-primaryDarkLight/30 max-h-full h-full font-poppins overflow-scroll overflow-x-hidden">
            <p className="font-poppins text-2xl p-5 text-primaryLight">
              {name}
            </p>
            <p className="text-md p-5 text-gray">{description}</p>
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

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };
  return (
    <div>
      <div class="item">
        <div
          className="h-96 lg:w-96 backdrop-filter backdrop-blur-lg rounded-xl border-white/30 border bg-primaryDarkLight/30 p-10 hover:bg-colorAccent/30 cursor-pointer"
          onClick={() => openModal(ProjDetails)}
        >
          <div className="max-w-screen-md flex flex-col justify-between">
            <h2 className="font-poppins text-2xl text-primaryLight font-medium md:text-1xl text-center mb-5 md:text-center">
              {name}
            </h2>
            {/* <h3 className="font-poppins lg:text-justify md:text-justify py-5 sm:text-left text-gray dark-text-gray-200 mx-auto md:text-md">
            {description}
          </h3> */}
            <div className="font-poppins text-md mx-auto md:text-lg text-left flex flex-wrap items-end xl:justify-start lg:justify-start m-3">
              {tech.map((technology, index) => (
                <div className="w-auto px-1 mb-3 md:mb-0 lg:mb-2" key={index}>
                  <h3
                    className={`font-poppins ${
                      index === 0
                        ? "bg-projectColor hover:bg-primaryDark hover:border-solid hover:border-2 border-gray"
                        : "bg-primaryDark hover:bg-projectColor"
                    } rounded-md text-justify px-5 text-gray dark:text-gray-200 mx-auto md:text-md`}
                  >
                    {technology}
                  </h3>
                </div>
              ))}
            </div>
            <div
              className={`relative transition-transform transform ${
                isHovered ? "scale-110" : "scale-100"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={img}
                className="w-auto h-60 rounded-lg object-contain transition-transform transform-gpu hover:scale-105"
                alt=""
              />
              {/* <div className="text-md py-5 mx-auto md:text-lg text-left">
            <a href="https://drive.google.com/file/d/1lkAr5cA7sEX_HNTCLiS5WWNddzqk6Sb-/preview">
              <button className="font-poppins px-5 py-2 bg-primaryDark rounded-lg shadow-xl hover:bg-colorAccent transform hover:scale-105 hover:rotate-1 transition-all duration-250 focus:outline-none select-none font-medium text-primaryLight xl:px-30 lg:px-20 md:px-10 sm:px-5">
                Preview
              </button>
            </a>
          </div> */}
            </div>
          </div>
        </div>
        {showModal && selectedProject && (
          <Modal projectDetails={selectedProject} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Projdetails;
