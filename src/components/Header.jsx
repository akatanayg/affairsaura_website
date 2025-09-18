// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/chocolate", label: "Chocolate" },
    { path: "/soap", label: "Soap" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {/* Fixed top header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdf9f0]/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => setOpen(false)}
              >
                <img
                  src="/logo.png"
                  alt="AffairsAura Logo"
                  className="h-20 w-auto md:h-16 object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `relative text-sm font-medium transition-all duration-200 hover:text-[#234534] ${
                        isActive ? "text-[#234534]" : "text-gray-700"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#234534] rounded-full"></span>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            open ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <img
                src="/logo.png"
                alt="AffairsAura Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="py-6">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center px-6 py-4 text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "text-[#234534] bg-green-50 border-r-4 border-[#234534]"
                          : "text-gray-700 hover:text-[#234534] hover:bg-gray-50"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Made with care</p>
              <p className="text-xs text-gray-400">Affair Aura</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
