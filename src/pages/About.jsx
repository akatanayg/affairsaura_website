import React from "react";

export default function About() {
  return (
    <main className="container py-16 ">
      {/* Title + Tagline */}
      <div className="text-center reveal visible">
        <h1 className="font-serif text-4xl md:text-5xl text-[#5b3a2e]">
          About Us
        </h1>
        <p className="mt-4 text-lg italic text-[#a66a4e] max-w-2xl mx-auto">
          "SOAP Affairs for your skin, Chocolate Affairs for your soul"
        </p>
      </div>

      {/* Intro */}
      <p className="text-[#8b857b] mt-8 max-w-4xl mx-auto text-center leading-relaxed reveal visible">
        Welcome to the world of{" "}
        <span className="font-semibold text-[#5b3a2e]">SOAP Affairs</span> and{" "}
        <span className="font-semibold text-[#5b3a2e]">Chocolate Affairs</span>{" "}
        - two heartfelt brands created with a passion for purity, wellness, and
        indulgence.
      </p>

      {/* SOAP Affairs Section */}
      <section className="grid md:grid-cols-2 gap-10 mt-16 items-center reveal">
        <div
          className="rounded-2xl shadow-md h-[320px]"
          style={{
            backgroundImage:
              "url(lemon.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div>
          <h2 className="text-2xl font-semibold text-[#5b3a2e]">
            SOAP Affairs
          </h2>
          <p className="text-[#8b857b] mt-3 leading-relaxed">
            We craft handmade organic soaps enriched with Ayurvedic herbs. Our
            soaps are{" "}
            <span className="font-medium text-[#a66a4e]">100% vegetarian</span>,{" "}
            <span className="font-medium text-[#a66a4e]">fat-free</span>, and
            infused with refreshing natural fragrances. With{" "}
            <span className="font-medium text-[#5b3a2e]">
              12+ unique varieties
            </span>
            , each bar is designed to nurture your skin while keeping you close
            to nature.
          </p>
        </div>
      </section>

      {/* Chocolate Affairs Section */}
      <section className="grid md:grid-cols-2 gap-10 mt-20 items-center reveal">
        <div
          className="md:order-2 rounded-2xl shadow-md h-[320px]"
          style={{
            backgroundImage:
              "url(bottlec.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="md:order-1">
          <h2 className="text-2xl font-semibold text-[#5b3a2e]">
            Chocolate Affairs
          </h2>
          <p className="text-[#8b857b] mt-3 leading-relaxed">
            We celebrate life’s sweetest moments with our wide range of homemade
            chocolates. From plain, dark, milk, and white chocolates to flavored
            delights, center-filled surprises, and elegant bars - every creation
            is made to bring joy. Be it a{" "}
            <span className="text-[#a66a4e] font-medium">birthday</span>,{" "}
            <span className="text-[#a66a4e] font-medium">anniversary</span>,{" "}
            <span className="text-[#a66a4e] font-medium">festival</span>, or{" "}
            <span className="text-[#a66a4e] font-medium">special occasion</span>
            , our chocolates are crafted to make memories sweeter.
          </p>
        </div>
      </section>

      {/* Closing Statement */}
      <div className="mt-20 text-center max-w-3xl mx-auto reveal">
        <p className="text-[#8b857b] leading-relaxed">
          Together, SOAP Affairs and Chocolate Affairs reflect our belief that
          care and happiness can be handcrafted. With every soap and every
          chocolate, we aim to add a touch of love, wellness, and sweetness to
          your life.
        </p>
      </div>
    </main>
  );
}
