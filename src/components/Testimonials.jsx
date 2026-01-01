import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Martin Gourley",
    feedback:
      "Dico is finally addressing a long-time problem we had when building UIs. It’s easy to use and feels super intuitive!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    country: "🇫🇷",
  },
  {
    id: 2,
    name: "Theo Champion",
    feedback:
      "This platform changed how we build interfaces. Smooth, modern, and lightning fast!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    country: "🇩🇪",
  },
  {
    id: 3,
    name: "Agnes Remi",
    feedback:
      "Everything feels polished and user-friendly. The experience is just perfect.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    country: "🇪🇸",
  },
  {
    id: 4,
    name: "Roman Atwoods",
    feedback:
      "A brilliant solution that saves us hours of development time. Can’t imagine going back!",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    country: "🇮🇹",
  },
];

function Testimonials() {
  const [angle, setAngle] = useState(0);
  const radius = 250; // slightly larger circle

  // ⏱ Rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 360 / testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f8fafc] py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-[#0a2540] mb-3">
          Testimonials
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here’s what our clients are saying about working with us.
        </p>
      </div>

      {/* 🔵 Rotating circle */}
      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        {testimonials.map((t, i) => {
          const rotation = angle + (i * 360) / testimonials.length;
          const x = radius * Math.cos((rotation * Math.PI) / 180);
          const y = radius * Math.sin((rotation * Math.PI) / 180);

          // scale + opacity for 3D illusion
          const scale = 0.9 + ((y + radius) / (2 * radius)) * 0.2;
          const opacity = 0.4 + ((y + radius) / (2 * radius)) * 0.6;
          const zIndex = Math.round(1000 + y);

          return (
            <div
              key={t.id}
              className="absolute w-80 h-52 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-1000 ease-in-out"
              style={{
                transform: `translate(${x}px, ${-y}px) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <div className="flex items-center mb-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover border border-gray-200"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {t.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{t.country}</p>
                </div>
              </div>
              <p className="text-gray-600 text-base italic leading-snug">
                “{t.feedback}”
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
