import React from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <InfoSection />

      {/* Explore Categories */}
      <section className="relative py-20 bg-[#fdf9f0]">
        <div className="container">
          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#234534] text-center mb-14">
            Explore Our Categories
          </h2>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Chocolate Card */}
            <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=60&auto=format&fit=crop"
                alt="Chocolate"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5b3a2e]/80 via-[#5b3a2e]/40 to-transparent flex flex-col justify-end items-center text-white p-8">
                <h3 className="text-3xl font-semibold mb-4 drop-shadow-md">
                  Chocolates
                </h3>
                <Link
                  to="/chocolate"
                  className="bg-[#a66a4e] px-8 py-3 rounded-full font-medium hover:bg-[#5b3a2e] transition-colors duration-300"
                >
                  Explore Chocolates
                </Link>
              </div>
            </div>

            {/* Soap Card */}
            <div className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1505691723518-36a00e6e9b16?w=1400&q=60&auto=format&fit=crop"
                alt="Soap"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#234534]/80 via-[#234534]/40 to-transparent flex flex-col justify-end items-center text-white p-8">
                <h3 className="text-3xl font-semibold mb-4 drop-shadow-md">
                  Soaps
                </h3>
                <Link
                  to="/soap"
                  className="bg-[#5b3a2e] px-8 py-3 rounded-full font-medium hover:bg-[#a66a4e] transition-colors duration-300"
                >
                  Explore Soaps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-[#5b3a2e] text-white py-12 text-center">
        <h2 className="font-serif text-3xl mb-4">
          Experience Craft & Sustainability
        </h2>
        <p className="max-w-xl mx-auto mb-6">
          Whether you’re indulging in fine chocolates or nurturing your skin
          with handmade soaps, every purchase supports ethical sourcing and
          small-scale artisans.
        </p>
        <Link
          to="/contact"
          className="bg-white text-[#5b3a2e] px-6 py-3 rounded-full font-medium hover:bg-[#f6f4f1] transition"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
