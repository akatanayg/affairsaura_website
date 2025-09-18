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
              “SOAP Affairs for your skin, Chocolate Affairs for your soul”
            </p>

            <p className="mt-6 text-sm sm:text-base text-[var(--infosection-copy)] leading-relaxed text-justify">
              SOAP Affairs and Chocolate Affairs are born from a passion for
              purity, wellness, and joy. SOAP Affairs offers handmade organic
              soaps enriched with Ayurvedic herbs - 100% vegetarian, natural,
              and crafted in many varieties to nurture your skin.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[var(--infosection-copy)] leading-relaxed text-justify">
              Chocolate Affairs celebrates life’s sweetest moments with
              carefully curated chocolate selections and gift boxes. Together,
              they reflect our belief that care and happiness can be
              handcrafted, adding love and wellness to everyday life.
            </p>
          </div>

          {/* Right images (cards) */}
          <div className="flex justify-center md:justify-end items-center relative pl-2 md:pl-6">
            <div className="relative w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px]">
              {/* back white card */}
              {/* <div
                className="absolute left-0 top-6 w-[220px] sm:w-[260px] md:w-[300px] h-[260px] sm:h-[300px] md:h-[340px] bg-white rounded-2xl shadow-card transform -rotate-3 md:-rotate-2"
                aria-hidden
              /> */}
              <img
                src="/diwalipackc7.jpg"
                alt="Product preview"
                className="absolute left-0 top-6 w-[220px] sm:w-[260px] md:w-[300px] h-[260px] sm:h-[300px] md:h-[340px] bg-white rounded-2xl shadow-card transform -rotate-3 md:-rotate-2"
                style={{ boxShadow: "0 22px 44px rgba(0,0,0,0.18)" }}
              />

              {/* front image card */}
              <img
                src="/honeyaloevera.jpg"
                alt="Product preview"
                className="relative block w-[220px] sm:w-[260px] md:w-[320px] h-[260px] sm:h-[300px] md:h-[340px] object-cover rounded-2xl shadow-xl transform rotate-3 md:rotate-4 translate-x-6 md:translate-x-10"
                style={{ boxShadow: "0 22px 44px rgba(0,0,0,0.18)" }}
              />
            </div>
          </div>
        </div>

        {/* Values row */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-6 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center items-start">
            <div>
              <Leaf className="mx-auto text-[var(--infosection-icon)] h-8 w-8 mb-3" />
              <p className="font-semibold text-[var(--infosection-copy)]">
                100% Natural
              </p>
            </div>
            <div>
              <Heart className="mx-auto text-[var(--infosection-icon)] h-8 w-8 mb-3" />
              <p className="font-semibold text-[var(--infosection-copy)]">
                Handcrafted with Love
              </p>
            </div>
            <div>
              <Gift className="mx-auto text-[var(--infosection-icon)] h-8 w-8 mb-3" />
              <p className="font-semibold text-[var(--infosection-copy)]">
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
