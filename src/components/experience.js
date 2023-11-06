import React from "react";

const ExperienceItem = ({ year, title, description, isFirst, isLast}) => (
  <div className="relative p-6">
    {/* Timeline Line */}
    <div className={`w-2 ml-3 bg-colorAccent absolute top-0 bottom-0 ${isFirst ? 'rounded-t-lg' : ''} ${isLast ? 'rounded-b-lg' : ''}`}></div>
    {/* Timeline Dot */}
    <div className="absolute h-8 w-8 bg-colorAccent rounded-full border-4 border-white"></div>
    {/* Timeline Content */}
    <div className="ml-12 p-4 border-l-4 backdrop-filter backdrop-blur-lg rounded-xl border-white/30 border bg-primaryDarkLight/30 shadow-md">
      <h3 className="text-2xl font-semibold mb-2 text-gray">{year}</h3>
      <h4 className="text-xl font-semibold text-colorAccent mb-5">{title}</h4>
      <p className="text-gray">{description}</p>
    </div>
  </div>
);

export default ExperienceItem;
