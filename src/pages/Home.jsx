import React, { useEffect } from "react";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.title = " Home | Handmade Soaps & Artisan Chocolates";
    const d = document.querySelector('meta[name="description"]');
    if (d)
      d.setAttribute(
        "content",
        "Discover handmade organic soaps and artisan chocolates crafted with care. Ethical, small-batch products perfect for gifting and self-care."
      );
  }, []);
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <InfoSection />

      {/* Explore Categories */}
      <section className="relative py-12 md:py-20 bg-[#fdf9f0]">
        <div className="container">
          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#234534] text-center mb-8 md:mb-14">
            Explore Our Categories
          </h2>

          {/* Grid - Mobile optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-10">
            {/* Chocolate Card */}
            <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="h-64 md:aspect-[4/5] overflow-hidden">
                <img
                  src="/bottlec.jpg"
                  alt="Chocolate"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#5b3a2e]/95 via-[#5b3a2e]/60 to-[#5b3a2e]/30 md:to-transparent flex flex-col justify-end items-center text-white p-6 md:p-6 lg:p-8">
                <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-3 lg:mb-4 drop-shadow-md text-center">
                  Chocolates
                </h3>
                <Link
                  to="/chocolate"
                  className="bg-[#a66a4e] px-6 md:px-6 lg:px-8 py-3 md:py-2 lg:py-3 rounded-full font-medium hover:bg-[#5b3a2e] transition-colors duration-300 text-base md:text-base"
                >
                  Explore Chocolates
                </Link>
              </div>
            </div>

            {/* Soap Card */}
            <div className="relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="h-64 md:aspect-[4/5] overflow-hidden">
                <img
                  src="/lemon.jpg"
                  alt="Soap"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#234534]/95 via-[#234534]/60 to-[#234534]/30 md:to-transparent flex flex-col justify-end items-center text-white p-6 md:p-6 lg:p-8">
                <h3 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-3 lg:mb-4 drop-shadow-md text-center">
                  Soaps
                </h3>
                <Link
                  to="/soap"
                  className="bg-[#5b3a2e] px-6 md:px-6 lg:px-8 py-3 md:py-2 lg:py-3 rounded-full font-medium hover:bg-[#a66a4e] transition-colors duration-300 text-base md:text-base"
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
        <h2 className="font-serif text-2xl md:text-3xl mb-4 px-4">
          Experience Craft & Sustainability
        </h2>
        <p className="max-w-xl mx-auto mb-6 px-4 text-sm md:text-base">
          Whether you're indulging in fine chocolates or nurturing your skin
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
