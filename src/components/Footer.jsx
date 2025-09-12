import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Footer Background with Curve */}
      <div className="bg-[#234534] text-white relative">
        {/* Top Smooth Hill Curve */}
        <div className="w-full -mt-1">
          <svg
            className="block w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 150"
          >
            <path
              d="M0,80 C360,0 1080,0 1440,80 L1440,150 L0,150 Z"
              fill="#234534"
            />
          </svg>
        </div>

        {/* Footer Content */}
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 pb-6 md:pb-16 -mt-6">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">AffairsAura</h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Handcrafted soaps and artisan chocolates, made with love and care
              using natural ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/chocolate" className="hover:underline">Chocolate</Link></li>
              <li><Link to="/soap" className="hover:underline">Soap</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm">📍 Jaipur, India</p>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm">✉️ hello@affairsaura.com</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 py-4 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} AffairsAura. All rights reserved.
        </div>
      </div>
    </footer>
  );
}