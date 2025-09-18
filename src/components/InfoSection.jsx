// src/components/InfoSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Gift } from "lucide-react";

export default function InfoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Top white curve: smooth transition into green block */}
      <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,120 960,0 1440,120 L1440,0 L0,0 Z"
            fill="#234534"
          />
        </svg>
      </div>

      {/* Dark green content block */}
      <div className="relative z-30 infosection-bg">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 items-center px-6 md:px-10 py-20">
          {/* Left text */}
          <div className="pr-0 md:pr-8">
            <h2
              id="about-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              About Us
            </h2>

            <p className="mt-3 text-sm sm:text-base font-medium text-[var(--infosection-sub)]">
              "SOAP Affairs for your skin, Chocolate Affairs for your soul"
            </p>

            <p className="mt-6 text-sm sm:text-base text-[var(--infosection-copy)] leading-relaxed text-justify">
              SOAP Affairs and Chocolate Affairs are born from a passion for
              purity, wellness, and joy. SOAP Affairs offers handmade organic
              soaps enriched with Ayurvedic herbs - 100% vegetarian, natural,
              and crafted in many varieties to nurture your skin.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[var(--infosection-copy)] leading-relaxed text-justify">
              Chocolate Affairs celebrates life's sweetest moments with
              carefully curated chocolate selections and gift boxes. Together,
              they reflect our belief that care and happiness can be
              handcrafted, adding love and wellness to everyday life.
            </p>
          </div>

          {/* Right images - Responsive layout */}
          <div className="flex justify-center md:justify-end items-center relative">
            {/* Mobile: Single centered image */}
            <div className="block md:hidden">
              <img
                src="/honeyaloevera.jpg"
                alt="Natural soap product"
                className="w-72 h-72 object-cover rounded-2xl shadow-xl mx-auto"
                style={{ boxShadow: "0 22px 44px rgba(0,0,0,0.18)" }}
              />
            </div>

            {/* Desktop: Overlapping images */}
            <div className="hidden md:block relative w-[320px] lg:w-[440px]">
              {/* Background image */}
              <img
                src="/diwalipackc7.jpg"
                alt="Chocolate gift pack"
                className="absolute left-0 top-6 w-[260px] lg:w-[300px] h-[300px] lg:h-[340px] object-cover rounded-2xl shadow-card transform -rotate-2"
                style={{ boxShadow: "0 22px 44px rgba(0,0,0,0.18)" }}
              />

              {/* Foreground image */}
              <img
                src="/honeyaloevera.jpg"
                alt="Natural soap product"
                className="relative block w-[280px] lg:w-[320px] h-[300px] lg:h-[340px] object-cover rounded-2xl shadow-xl transform rotate-4 translate-x-10"
                style={{ boxShadow: "0 22px 44px rgba(0,0,0,0.18)" }}
              />
            </div>
          </div>
        </div>

        {/* Values row */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-6 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center items-start">
            <div className="flex flex-col items-center">
              <Leaf className="text-[var(--infosection-icon)] h-10 w-10 sm:h-8 sm:w-8 mb-3" />
              <p className="font-semibold text-[var(--infosection-copy)] text-base sm:text-sm">
                100% Natural
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="text-[var(--infosection-icon)] h-10 w-10 sm:h-8 sm:w-8 mb-3" />
              <p className="font-semibold text-[var(--infosection-copy)] text-base sm:text-sm">
                Handcrafted with Love
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Gift className="text-[var(--infosection-icon)] h-10 w-10 sm:h-8 sm:w-8 mb-3" />
              <p className="font-semibold text-[var(--infosection-copy)] text-base sm:text-sm">
                Perfect for Gifting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom white curve: green -> white transition */}
      <div className="absolute bottom-0 left-0 w-full curve-shadow pointer-events-none z-40 translate-y-[1px]">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-28 md:h-36 infosection-bottom-curve"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,40 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </motion.section>
  );
}
