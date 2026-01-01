import React from "react";
import { Code, Smartphone, Palette, Bot } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that engage users and drive business growth.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive designs that enhance user experience and reflect your brand identity.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Intelligent solutions that automate workflows and enhance decision-making with cutting-edge AI.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100  ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl font-semibold text-blue-600 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-14">
          We offer comprehensive software solutions to help your business
          succeed in today's digital landscape.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
                <h5 className="text-xl font-bold text-blue-600 mb-3">
                  {service.title}
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
