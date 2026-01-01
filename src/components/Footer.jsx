import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a3d91] to-[#003366] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Information */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Portfolios</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="bg-[#0e4da4]/40 p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 placeholder-gray-400 bg-white"
            />
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 rounded-r-lg hover:opacity-90 transition">
              →
            </button>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Hello, we are BluraForce. Our goal is to translate the positive effects
            from revolutionizing how companies engage with their clients & their team.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="p-2 border border-gray-400 rounded-full hover:bg-blue-600 transition">
            <FaLinkedinIn size={14} />
          </a>
          <a href="#" className="p-2 border border-gray-400 rounded-full hover:bg-blue-600 transition">
            <FaFacebookF size={14} />
          </a>
          <a href="#" className="p-2 border border-gray-400 rounded-full hover:bg-blue-600 transition">
            <FaTwitter size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;