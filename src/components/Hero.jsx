// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  { img: "/bottlec.jpg", title: "Homemade Chocolates" },
  { img: "/diwalipackc.jpg", title: "Festive Delights" },
  { img: "/lemon.jpg", title: "Organic Luxury Soaps" },
  { img: "/organicscrub.jpg", title: "Scrub Soaps" },
  { img: "/potatomilk.jpg", title: "Milk Soaps" },
  { img: "/poojapackc.jpg", title: "Gift Hampers" },
  { img: "/combopack1c.jpg", title: "Combos" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative w-full bg-cover bg-center py-20 md:py-28 overflow-hidden"
      style={{ backgroundImage: "url('/herobg.png')" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Image container */}
        <div className="relative w-full max-w-5xl h-[70vh] rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence>
            <motion.div
              key={slides[index].img}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${slides[index].img})` }}
            />
          </AnimatePresence>

          {/* Gradient overlay for image */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Overlay text */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={slides[index].title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg tracking-wide"
              >
                {slides[index].title}
              </motion.h1>
            </AnimatePresence>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-6"
            >
              <Link
                to="/chocolate"
                className="px-6 py-3 bg-white/90 text-[#3E594B] font-semibold rounded-full shadow hover:bg-white transition"
              >
                Explore Now →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-[#3E594B]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
