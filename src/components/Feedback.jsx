import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, BrightCo",
    feedback:
      "Working with this team was an amazing experience. They delivered everything on time and exceeded our expectations.",
  },
  {
    id: 2,
    name: "Ahmed Ali",
    role: "CEO, TechNova",
    feedback:
      "Their attention to detail and commitment to quality truly stand out. We’re looking forward to future collaborations.",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Founder, GreenLeaf",
    feedback:
      "Professional, creative, and reliable — they transformed our ideas into reality with precision and style.",
  },
];

function Feed() {
  return (
    <section className="bg-[#f8fafc] py-16 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0a2540] mb-2">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don’t just take our word for it. Here’s what our satisfied clients
          have to say about working with us.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <p className="text-gray-700 mb-6 italic">“{t.feedback}”</p>
            <div className="text-sm">
              <p className="font-semibold text-[#0a2540]">{t.name}</p>
              <p className="text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feed;
