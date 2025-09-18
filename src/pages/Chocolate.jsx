// pages/Chocolate.jsx
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProductModal from "../components/ProductModal";
import { PRODUCTS } from "../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      aria-label="Next"
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#7b4c3a] text-white p-2 rounded-full shadow hover:bg-[#5a382a] transition"
      onClick={onClick}
    >
      ▶
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      aria-label="Previous"
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#7b4c3a] text-white p-2 rounded-full shadow hover:bg-[#5a382a] transition"
      onClick={onClick}
    >
      ◀
    </button>
  );
}

export default function Chocolate() {
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    document.title = "Chocolate Affairs — Artisan Chocolates | AffairAura";
    const d = document.querySelector('meta[name="description"]');
    if (d)
      d.setAttribute(
        "content",
        "Explore artisan chocolates: dark, milk, white, flavored and gift packs. Ethically sourced and handcrafted."
      );
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          dots: true,
        },
      },
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
          className="rounded-2xl shadow-lg w-full h-auto"
        />
        <div>
          <h2 className="text-3xl text-[#3a2a24] font-bold">
            Crafted Elegance
          </h2>
          <p className="mt-4 text-[#6b5449]">
            Single-origin truffles, and curated flavors — made with ethically
            sourced chocolate and delicate craftsmanship.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#4a2e26] py-16 reveal text-white">
        <div className="container max-w-3xl text-center">
          <h3 className="text-2xl text-white font-semibold">Our Story</h3>
          <p className="mt-4 text-white">
            At Chocolate Affairs, we celebrate life's sweetest moments with our
            wide range of homemade chocolates. From plain, dark, milk, and white
            chocolates to flavored delights, center-filled surprises, and
            elegant bars, every creation is made to bring joy. Whether it's a
            birthday, anniversary, festival, or special occasion, our chocolates
            are crafted to make memories sweeter.
          </p>
        </div>
      </section>

      {/* PRODUCTS CAROUSEL */}
      <section className="bg-[#fbf6f4] py-12 reveal relative">
        <div className="container">
          <h3 className="text-2xl text-center text-[#3a2a24] font-semibold mb-8">
            Our Collection
          </h3>
          <div className="relative">
            <Slider {...sliderSettings}>
              {PRODUCTS.chocolate.map((p) => (
                <div key={p.id} className="px-2">
                  <div
                    className="product-card cursor-pointer"
                    onClick={() => setModalItem(p)}
                  >
                    <img
                      loading="lazy"
                      src={p.image || "/images/choco-default.jpg"}
                      alt={p.title}
                      className="rounded-xl w-full h-48 md:h-56 object-cover"
                    />
                    <h4 className="mt-3 font-semibold text-center text-[#3a2a24]">
                      {p.title}
                    </h4>
                    <div className="mt-2 text-sm text-[#8b857b] text-center">
                      {p.price}
                    </div>
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
              className="rounded-xl w-full h-48 object-cover"
            />
            <p className="mt-3 text-sm text-center">
              "A best diwali dhamaka combo pack" - A. R.
            </p>
          </div>
          <div className="product-card">
            <img
              src="/diwalipackc5.jpg"
              alt="Customer review"
              className="rounded-xl w-full h-48 object-cover"
            />
            <p className="mt-3 text-sm text-center">
              "Perfect gift and beautifully packaged." - S. K.
            </p>
          </div>
          <div className="product-card">
            <img
              src="/bottlec.jpg"
              alt="Customer review"
              className="rounded-xl w-full h-48 object-cover"
            />
            <p className="mt-3 text-sm text-center">
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

          <div className="grid gap-8 mt-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
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
                className="rounded-xl w-full h-48 object-cover"
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
                className="rounded-xl w-full h-48 object-cover"
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
                className="rounded-xl w-full h-48 object-cover"
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
                (18—20°C is ideal).
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProductModal item={modalItem} onClose={() => setModalItem(null)} />
    </main>
  );
}
