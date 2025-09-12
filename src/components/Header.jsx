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
    { path: "/chocolate", label: "Chocolate" },
    { path: "/soap", label: "Soap" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* fixed top header */}
      <header
        className="site-header fixed top-0 left-0 right-0 z-50 bg-[#fdf9f0] shadow-md"
        role="banner"
      >
        <div
          className="container flex items-center justify-between md:justify-center"
          style={{ height: 72 }}
        >
          {/* LOGO */}
          <div className="flex items-center gap-4 md:absolute md:left-6">
            <Link
              to="/"
              className="logo text-gray-900"
              style={{ textDecoration: "none", fontFamily: "Georgia, serif" }}
            >
              <img
                src="/logo.png" // 👈 replace with your actual logo image path
                alt="AffairsAura Logo"
                className="h-20 w-auto" // controls size (adjust as needed)
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center justify-center gap-8 flex-1"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  [
                    "font-medium transition-colors",
                    isActive
                      ? "text-[#234534]"
                      : "text-gray-900 hover:text-[#234534]",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE: hamburger */}
          <button
            className="md:hidden p-2 rounded text-gray-900"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 pointer-events-auto md:hidden transition-transform duration-320 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* background dim */}
        <div
          className={`absolute inset-0 bg-black ${
            open ? "opacity-30 transition-opacity duration-200" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* panel */}
        <div className="relative bg-white h-full overflow-auto">
          {/* panel header */}
          <div
            className="flex items-center justify-between px-4"
            style={{ height: 72 }}
          >
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="logo text-gray-900"
              style={{ textDecoration: "none", fontFamily: "Georgia, serif" }}
            >
              <span style={{ fontWeight: 700 }}>AffairsAura</span>
            </Link>

            <button
              className="p-2 rounded text-gray-900"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* nav links */}
          <nav className="px-6 pt-4 pb-8 border-t border-gray-100">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        "block text-lg font-medium py-3",
                        isActive
                          ? "text-[#234534]"
                          : "text-gray-900 hover:text-[#234534]",
                      ].join(" ")
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-sm text-gray-600">
              <p>Made with ❤️ — AffairsAura</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
