import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden -mt-4">
      {/* Footer Background with Curve and Shadow */}
      <div className="bg-[#fdf9f0] text-gray-800 relative shadow-2xl">
        {/* Top Elegant Curve */}
        <div className="w-full -mt-1">
          <svg
            className="block w-full h-20 md:h-32"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 150"
          >
            <defs>
              <linearGradient
                id="curveGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#fdf9f0", stopOpacity: 0.1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#fdf9f0", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C240,10 480,30 720,40 C960,50 1200,20 1440,60 L1440,150 L0,150 Z"
              fill="url(#curveGradient)"
              className="drop-shadow-lg"
            />
            <path
              d="M0,80 C240,30 480,50 720,60 C960,70 1200,40 1440,80 L1440,150 L0,150 Z"
              fill="#fdf9f0"
            />
          </svg>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 pb-12 -mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img
                  src="/logo.png"
                  alt="AffairsAura Logo"
                  className="h-12 w-auto object-contain mb-4"
                />
                <h3 className="font-serif text-2xl font-bold text-[#234534] mb-3">
                  AffairsAura
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Crafting premium handmade soaps and artisan chocolates with
                natural ingredients and traditional techniques. Every product
                tells a story of quality and care.
              </p>

              {/* Social Media */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#234534] text-white rounded-full flex items-center justify-center hover:bg-[#345444] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#234534] text-white rounded-full flex items-center justify-center hover:bg-[#345444] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[#234534] text-white rounded-full flex items-center justify-center hover:bg-[#345444] transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg text-[#234534] mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#234534] rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/chocolate", label: "Chocolate" },
                  { to: "/soap", label: "Soap" },
                  { to: "/about", label: "About Us" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-600 hover:text-[#234534] transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#234534] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-lg text-[#234534] mb-6 relative">
                Our Products
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#234534] rounded-full"></div>
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                  Artisan Chocolates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Natural Soaps
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Gift Collections
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Custom Orders
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg text-[#234534] mb-6 relative">
                Get In Touch
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#234534] rounded-full"></div>
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#234534] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Our Location</p>
                    <p className="text-gray-600 text-sm">
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#234534] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#234534] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600 text-sm">
                      hello@affairsaura.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-[#234534]/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 left-20 w-32 h-32 bg-[#234534]/3 rounded-full blur-2xl"></div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-sm text-center md:text-left">
                © {new Date().getFullYear()} AffairsAura. All rights reserved.
                Made with ❤️ in India
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <Link
                  to="/privacy"
                  className="hover:text-[#234534] transition-colors"
                >
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link
                  to="/terms"
                  className="hover:text-[#234534] transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
