import React from "react";
import img1 from "../assets/image.png";
import img2 from "../assets/klyr.png";
// import img3 from "../assets/images.jpg";

const projects = [
  {
    id: 1,
    image: img1,
    title: "Online Education Platform",
    link: "https://skillovaacademy-57f58.firebaseapp.com/", // external or internal link
  },
  {
    id: 2,
    image: img2,
    title: "Klyr - Modern Cloud Banking & Finance Management",  
    link: "https://github.com/mhaoead112/Klyr",
  },
  {
    id: 3,
    image: "https://i.ibb.co/YTyY7QCL/Screenshot-2025-08-12-005632.png",
    title: "Taiyaki Restaurant Website (Prototype)",
    link: "https://taiyaki-website-cle4.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#f8fafc] py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0a2540] mb-2">
          Our Portfolio
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore some of our recent projects and see how we’ve helped
          businesses achieve their goals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.id}
            target="_blank" // open in new tab
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500">
                Click to view full project details →
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
