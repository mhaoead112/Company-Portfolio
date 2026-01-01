import React from "react";
import aboutImg from "../assets/istockphoto-1947499362-612x612.jpg";
import "../Style/about.css";

const About = () => {
  return (
    <section className="bg-[#f8f9fb] text-[#0a0a0a]  mt-10 py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-[#012b55] text-3xl md:text-4xl font-bold mb-6">
            About BluraForce
          </h2>
          <p className="text-gray-700 text-[1.05rem] leading-relaxed mb-4">
            At BluraForce, we're passionate about creating innovative software
            solutions that empower businesses to thrive in the digital age. With
            over a decade of experience, our team combines technical expertise
            with creative vision to deliver exceptional results.
          </p>
          <p className="text-gray-700 text-[1.05rem] leading-relaxed">
            We believe in building long-term partnerships with our clients,
            understanding their unique challenges, and crafting tailored
            solutions that exceed expectations.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About BluraForce"
            className="w-full max-w-md rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
