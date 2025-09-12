// pages/Chocolate.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import ProductModal from "../components/ProductModal";
import { PRODUCTS } from "../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
function NextArrow({ onClick }) {
  return (
    <button
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#7b4c3a] text-white p-2 rounded-full shadow hover:bg-[#5a382a] transition"
      onClick={onClick}
    >
      ▶
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#7b4c3a] text-white p-2 rounded-full shadow hover:bg-[#5a382a] transition"
      onClick={onClick}
    >
      ◀
    </button>
  );
}

export default function Chocolate() {
  const [modalItem, setModalItem] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <main className="font-serif bg-[#fdf9f0]">
      {/* HERO */}
      <section className="page-hero bg-gradient-to-b from-[#5b3429] to-[#6f3d2d] text-white">
        <div className="container text-center py-16">
          <h1 className="hero-title text-5xl font-bold">Chocolate Affairs</h1>
          <p className="mt-3 text-lg text-white/90">
            Indulge in artisan chocolates crafted with love.
          </p>
        </div>
      </section>

      {/* CURVE DIVIDER */}
      <div className="curve-divider -mt-20">
        <svg
          viewBox="0 0 1440 80"
          width="100%"
          height="80"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C240 0 360 100 720 60 C1080 20 1200 80 1440 40 L1440 80 L0 80 Z"
            fill="#fdf9f7"
          />
        </svg>
      </div>

      {/* ABOUT */}
      <section className="container grid md:grid-cols-2 gap-8 py-16 items-center reveal bg-[#fdf9f0]">
        <img
          loading="lazy"
          src="/bottlec.jpg"
          alt="Handmade chocolates stack"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl text-[#3a2a24] font-bold">
            Crafted Elegance
          </h2>
          <p className="mt-4 text-[#6b5449]">
            Small-batch bonbons, single-origin truffles, and curated flavors —
            made with ethically sourced cocoa and delicate craftsmanship.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#4a2e26] py-16 reveal text-white">
        <div className="container max-w-3xl text-center">
          <h3 className="text-2xl text-white font-semibold">Our Story</h3>
          <p className="mt-4 text-white">
            From humble beginnings in a small kitchen, our passion for cacao has
            grown into a craft that celebrates farmers, flavors, and families.
            Each piece of chocolate is a tribute to tradition and innovation.
          </p>
        </div>
      </section>

      {/* PRODUCTS CAROUSEL */}
      <section className="bg-[#fbf6f4] py-12 reveal relative">
        <div className="container">
          <h3 className="text-2xl text-center text-[#3a2a24] font-semibold">
            Our Collection
          </h3>
          <div className="relative mt-8">
            <Slider {...sliderSettings}>
              {PRODUCTS.chocolate.map((p) => (
                <div
                  key={p.id}
                  className="px-3 cursor-pointer"
                  onClick={() => setModalItem(p)}
                >
                  <div className="product-card">
                    <img
                      loading="lazy"
                      src={p.image || "/images/choco-default.jpg"}
                      alt={p.title}
                      className="rounded-xl"
                    />
                    <h4 className="mt-3 font-semibold">{p.title}</h4>
                    <div className="mt-2 text-sm text-[#8b857b]">{p.price}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CONTRASTING STORY STRIP */}
      <section className="bg-[#4a2e26] text-white text-center py-10 reveal">
        <div className="container max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold">A Journey of Taste</h4>
          <p className="mt-3 text-sm">
            Every piece tells a story — from farmer cooperatives to our artisan
            kitchens.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-12 reveal">
        <h4 className="text-2xl text-center text-[#3a2a24] font-semibold">
          What Chocoholics Say
        </h4>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="product-card">
            <img
              src="/diwalicombopackc.jpg"
              alt="Customer review"
              className="rounded-xl"
            />
            <p className="mt-3 text-sm">
              "A best diwali dhamaka combo pack" - A. R.
            </p>
          </div>
          <div className="product-card">
            <img
              src="/diwalipackc5.jpg"
              alt="Customer review"
              className="rounded-xl"
            />
            <p className="mt-3 text-sm">
              "Perfect gift and beautifully packaged." - S. K.
            </p>
          </div>
          <div className="product-card">
            <img
              src="/bottlec.jpg"
              alt="Customer review"
              className="rounded-xl"
            />
            <p className="mt-3 text-sm">
              "Rich, balanced, excellent texture." — P. M.
            </p>
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-[#fdf9f0] py-16 reveal">
        <div className="container text-center">
          <h3 className="text-2xl font-semibold text-[#3a2a24]">Bestsellers</h3>
          <p className="mt-2 text-sm text-[#6b5449]">
            Our most-loved chocolates, chosen by you.
          </p>

          <div className="grid gap-8 mt-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {/* Bestseller 1 */}
            <div
              className="product-card p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() =>
                setModalItem({
                  id: "b1",
                  title: "Bottle Chocolate",
                  price: "₹899",
                  image: "/bottlec.jpg",
                  desc: "A bestseller with rich ganache and roasted hazelnuts.",
                  buy: "https://www.amazon.in/",
                })
              }
            >
              <img
                src="/bottlec.jpg"
                alt="Bottle Chocolate"
                className="rounded-xl w-full object-cover"
                loading="lazy"
              />
              <h4 className="mt-3 font-semibold text-[#3a2a24]">
                Bottle Chocolate
              </h4>
              <p className="mt-1 text-sm text-[#6b5449]">₹899</p>
            </div>

            {/* Bestseller 2 */}
            <div
              className="product-card p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() =>
                setModalItem({
                  id: "b2",
                  title: "Bhai Dooj Pack",
                  price: "₹549",
                  image: "/bhaidoojc1.jpg",
                  desc: "Single-origin dark chocolate with nutty notes.",
                  buy: "https://www.amazon.in/",
                })
              }
            >
              <img
                src="/bhaidoojc1.jpg"
                alt="Bhai Dooj Pack"
                className="rounded-xl w-full object-cover"
                loading="lazy"
              />
              <h4 className="mt-3 font-semibold text-[#3a2a24]">
                Bhai Dooj Pack
              </h4>
              <p className="mt-1 text-sm text-[#6b5449]">₹549</p>
            </div>

            {/* Bestseller 3 */}
            <div
              className="product-card p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() =>
                setModalItem({
                  id: "b3",
                  title: "Candle Chocolate Pack",
                  price: "₹699",
                  image: "/candlepackc.jpg",
                  desc: "Soft caramel encased in rich chocolate shell.",
                  buy: "https://www.amazon.in/",
                })
              }
            >
              <img
                src="/candlepackc.jpg"
                alt="Candle Chocolate Pack"
                className="rounded-xl w-full object-cover"
                loading="lazy"
              />
              <h4 className="mt-3 font-semibold text-[#3a2a24]">
                Candle Chocolate Pack
              </h4>
              <p className="mt-1 text-sm text-[#6b5449]">₹699</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fdf9f0] py-12 reveal">
        <div className="container max-w-3xl">
          <h4 className="text-2xl text-center text-[#3a2a24] font-semibold">
            FAQs
          </h4>
          <div className="mt-6 space-y-6 text-[#6b5449] text-sm">
            <div>
              <h5 className="font-semibold">Are your chocolates vegan?</h5>
              <p className="mt-1">
                We offer a special vegan collection crafted with dairy-free
                ingredients.
              </p>
            </div>
            <div>
              <h5 className="font-semibold">Do you use fair-trade cocoa?</h5>
              <p className="mt-1">
                Yes, we source all our cocoa ethically from farmer cooperatives.
              </p>
            </div>
            <div>
              <h5 className="font-semibold">
                How should I store my chocolates?
              </h5>
              <p className="mt-1">
                Keep them in a cool, dry place away from direct sunlight
                (18–20°C is ideal).
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProductModal item={modalItem} onClose={() => setModalItem(null)} />
    </main>
  );
}
