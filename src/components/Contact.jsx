import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Twitter, Instagram, Linkedin , Facebook} from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ success: null, message: "Sending..." });

    emailjs
      .send(
        "service_lc4647m", //  Replace with your EmailJS service ID
        "template_e0jdzk1", //  Replace with your EmailJS template ID
        {
          first_name: formData.firstName,
          last_name: formData.lastName, 
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "KWyTYwZRw0IIkZwNl" //  Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus({ success: true, message: "Message sent successfully!" });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        () => {
          setStatus({ success: false, message: "Failed to send message. Try again later." });
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full  flex justify-center items-center bg-white text-white py-16 px-6 font-[Manrope]"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-8 bg-[#175DBE] p-10 rounded-[2rem] shadow-2xl backdrop-blur-lg border border-white/10"
      >
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>

          <div className="flex items-center space-x-3 text-lg">
            <Mail className="text-cyan-600 w-6 h-6" />
            <span>bluraforce@gmail.com</span>
          </div>

          <div className="flex items-start space-x-3 text-sm text-white leading-relaxed">
            <Phone className="text-cyan-600 w-6 h-6 mt-1" />
            <p>
              +201113184261
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-8">
            {[ 
              { icon: <Facebook />, color: "text-black hover:text-cyan-600" ,href:"https://www.facebook.com/profile.php?id=61581864931059"},
              { icon: <Instagram />, color: "text-black hover:text-pink-500" , href:"https://www.instagram.com/bluraforce/" },
              { icon: <Linkedin />, color: "text-black hover:text-blue-500" , href:"http://linkedin.com/company/bluraforce/"},
            ].map((s, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2 }}
                className={`p-2 rounded-full bg-gray-100 ${s.color} transition`}
                href="#"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* First & Last Name */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              required
              className="border-b border-gray-300 outline-none focus:border-cyan-600 transition p-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              required
              className="border-b border-gray-300 outline-none focus:border-cyan-600 transition p-2"
            />
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="border-b border-gray-300 outline-none focus:border-cyan-600 transition p-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91"
              className="border-b border-gray-300 outline-none focus:border-cyan-600 transition p-2"
            />
          </div>

          {/* Subject Selection */}
          <div className="col-span-2">
            <label className="text-sm block mb-2">Select Subject?</label>
            <div className="flex flex-wrap gap-6 text-sm">
              {["General Inquiry", "Web Development", "Mobile App Development", "UI/UX Design", "AI & Automation"].map(
                (subject) => (
                  <label key={subject} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="subject"
                      value={subject}
                      checked={formData.subject === subject}
                      onChange={handleChange}
                      className="accent-cyan-600"
                    />
                    {subject}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Message */}
          <div className="col-span-2 flex flex-col">
            <label className="text-sm mb-1">Message</label>
            <textarea
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="border-b border-gray-300 outline-none focus:border-cyan-600 transition p-2 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-2 rounded-md mt-4 shadow-lg transition"
            >
              Send Message
            </motion.button>
          </div>

          {/* Status Message */}
          {status.message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`col-span-2 text-sm mt-2 text-center ${
                status.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
