// pages/Soap.jsx
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
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#3f7a58] text-white p-2 rounded-full shadow hover:bg-[#2b5a45] transition"
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
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#3f7a58] text-white p-2 rounded-full shadow hover:bg-[#2b5a45] transition"
      onClick={onClick}
    >
      ◀
    </button>
  );
}

export default function Soap() {
  const [modalItem, setModalItem] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    document.title = "Soap Affairs | Natural Handmade Soaps | AffairAura";
    const d = document.querySelector('meta[name="description"]');
    if (d)
      d.setAttribute(
        "content",
        "Gentle, natural soaps infused with botanicals and essential oils. Ideal for all skin types and gifting."
      );

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === PRODUCTS.soap.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? PRODUCTS.soap.length - 1 : prev - 1
    );
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Auto-advance slides every 5 seconds on mobile
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isMobile, currentSlide]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          variableWidth: false,
          arrows: false,
          dots: true,
          adaptiveHeight: false,
        },
      },
    ],
  };

  return (
    <main className="font-serif bg-[#fdf9f0]">
      {/* HERO */}
      <section className="page-hero bg-gradient-to-b from-[#234b3a] to-[#3f7a58] text-white">
        <div className="container text-center py-16">
          <h1 className="hero-title text-5xl font-bold">Soap Affairs</h1>
          <p className="mt-3 text-lg">
            Gentle, natural, and crafted with care.
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
            fill="#fdf9f0"
          />
        </svg>
      </div>

      {/* ABOUT */}
      <section className="container grid md:grid-cols-2 gap-8 py-16 items-center reveal bg-[#fdf9f0]">
        <div>
          <h2 className="text-3xl text-[#16422f] font-bold">Nature's Touch</h2>
          <p className="mt-4 text-[#3f6b53]">
            Handmade bars using essential oils, gentle cleansers, and botanicals
            for healthy skin.
          </p>
        </div>
        <img
          loading="lazy"
          src="/charcoaldetan.jpg"
          alt="Soaps"
          className="rounded-2xl shadow-lg w-84 h-84"
        />
      </section>

      {/* STORY */}
      <section className="bg-[#2b5a45] py-16 reveal text-white">
        <div className="container max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">Our Story</h3>
          <p className="mt-4">
            Inspired by nature, each bar of soap is made with care — blending
            oils, herbs, and botanicals to bring you gentle skincare that's kind
            to both you and the earth.
          </p>
        </div>
      </section>

      {/* PRODUCTS CAROUSEL */}
      <section className="bg-[#fdf9f0] py-12 reveal relative">
        <div className="container">
          <h3 className="text-2xl text-center text-[#16422f] font-semibold mb-8">
            Our Collection
          </h3>

          {/* Mobile: Custom Smooth Carousel */}
          {isMobile ? (
            <div className="relative mx-4">
              <div
                className="overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="flex transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    willChange: "transform",
                  }}
                >
                  {PRODUCTS.soap.map((p, index) => (
                    <div key={p.id} className="w-full flex-shrink-0">
                      <div
                        className="product-card cursor-pointer mx-auto max-w-sm transform transition-transform duration-200 hover:scale-[1.02]"
                        onClick={() => setModalItem(p)}
                      >
                        <img
                          loading="lazy"
                          src={p.image || "/images/soap-default.jpg"}
                          alt={p.title}
                          className="rounded-xl w-full h-64 object-cover"
                        />
                        <h4 className="mt-4 text-lg font-semibold text-center text-[#16422f]">
                          {p.title}
                        </h4>
                        <div className="mt-2 text-base text-[#6b8a73] text-center font-medium">
                          {p.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-center items-center mt-8 space-x-6">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-[#3f7a58] text-white flex items-center justify-center shadow-lg hover:bg-[#2b5a45] transition-colors duration-200"
                  aria-label="Previous product"
                >
                  <span className="text-lg font-bold">‹</span>
                </button>

                <div className="flex space-x-3">
                  {PRODUCTS.soap.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-[#3f7a58] scale-125 shadow-md"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to product ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-[#3f7a58] text-white flex items-center justify-center shadow-lg hover:bg-[#2b5a45] transition-colors duration-200"
                  aria-label="Next product"
                >
                  <span className="text-lg font-bold">›</span>
                </button>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 text-center text-sm text-[#6b8a73] font-medium">
                {currentSlide + 1} of {PRODUCTS.soap.length}
              </div>
            </div>
          ) : (
            /* Desktop: React Slick */
            <div className="relative">
              <Slider {...sliderSettings}>
                {PRODUCTS.soap.map((p) => (
                  <div key={p.id}>
                    <div
                      className="product-card cursor-pointer mx-2"
                      onClick={() => setModalItem(p)}
                    >
                      <img
                        loading="lazy"
                        src={p.image || "/images/soap-default.jpg"}
                        alt={p.title}
                        className="rounded-xl w-full h-48 md:h-56 object-cover"
                      />
                      <h4 className="mt-3 font-semibold text-center text-[#16422f]">
                        {p.title}
                      </h4>
                      <div className="mt-2 text-sm text-[#6b8a73] text-center">
                        {p.price}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
      </section>

      {/* CONTRASTING STORY STRIP */}
      <section className="bg-[#2b5a45] text-white text-center py-10 reveal">
        <div className="container max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold">Inspired by Nature</h4>
          <p className="mt-3 text-sm">
            Gentle, simple, and effective — like nature intended.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-12 reveal bg-[#fdf9f0]">
        <h4 className="text-2xl text-center text-[#16422f] font-semibold">
          Customer Reviews
        </h4>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="product-card">
            <img
              src="/lemon.jpg"
              alt="Customer review"
              className="rounded-xl w-full h-48 object-cover"
            />
            <p className="mt-3 text-sm text-center">
              "Soothing for my sensitive skin!" — N.S.
            </p>
          </div>
          <div className="product-card">
            <img
              src="/organicscrub.jpg"
              alt="Customer review"
              className="rounded-xl w-full h-48 object-cover"
            />
            <p className="mt-3 text-sm text-center">
              "Lovely scents and great lather." — R.M.
            </p>
          </div>
          <div className="product-card">
            <img
              src="/baby.jpg"
              alt="Customer review"
              className="rounded-xl w-full h-48 object-cover"
            />
            <p className="mt-3 text-sm text-center">
              "Best soap collection for babies with varied and unique flavours."
              — L.P.
            </p>
          </div>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-[#fdf9f0] py-16 reveal">
        <div className="container text-center">
          <h3 className="text-2xl font-semibold text-[#16422f]">Bestsellers</h3>
          <p className="mt-2 text-sm text-[#3f6b53]">
            Our most-loved soaps, chosen by you.
          </p>

          <div className="grid gap-8 mt-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
            {/* Bestseller 1 */}
            <div
              className="product-card p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() =>
                setModalItem({
                  id: "sb1",
                  title: "Neem Tulsi",
                  price: "₹249",
                  image: "neemtulsi.jpg",
                  desc: "A soothing bar infused with lavender oil for relaxation.",
                  buy: "https://www.amazon.in/",
                })
              }
            >
              <img
                src="/neemtulsi.jpg"
                alt="Neem Tulsi Soap"
                className="rounded-xl w-full h-48 object-cover"
                loading="lazy"
              />
              <h4 className="mt-3 font-semibold text-[#16422f]">
                Neem Tulsi Soap
              </h4>
              <p className="mt-1 text-sm text-[#3f6b53]">₹249</p>
            </div>

            {/* Bestseller 2 */}
            <div
              className="product-card p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() =>
                setModalItem({
                  id: "sb2",
                  title: "Honey Aloevera Soap",
                  price: "₹249",
                  image: "honeyaloevera.jpg",
                  desc: "Refreshing mint soap with a cooling touch.",
                  buy: "https://www.amazon.in/",
                })
              }
            >
              <img
                src="/honeyaloevera.jpg"
                alt="Mint Fresh"
                className="rounded-xl w-full h-48 object-cover"
                loading="lazy"
              />
              <h4 className="mt-3 font-semibold text-[#16422f]">
                Honey & Aloevera Soap
              </h4>
              <p className="mt-1 text-sm text-[#3f6b53]">₹249</p>
            </div>

            {/* Bestseller 3 */}
            <div
              className="product-card p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() =>
                setModalItem({
                  id: "sb3",
                  title: "Lemon Soap",
                  price: "₹299",
                  image: "lemon.jpg",
                  desc: "Moisturizing soap made with natural honey and aloe vera.",
                  buy: "https://www.amazon.in/",
                })
              }
            >
              <img
                src="/lemon.jpg"
                alt="Lemon Soap"
                className="rounded-xl w-full h-48 object-cover"
                loading="lazy"
              />
              <h4 className="mt-3 font-semibold text-[#16422f]">Lemon Soap</h4>
              <p className="mt-1 text-sm text-[#3f6b53]">₹299</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fdf9f0] py-12 reveal">
        <div className="container max-w-3xl">
          <h4 className="text-2xl text-center text-[#16422f] font-semibold">
            FAQs
          </h4>
          <div className="mt-6 space-y-6 text-[#3f6b53] text-sm">
            <div>
              <h5 className="font-semibold">Are your soaps handmade?</h5>
              <p className="mt-1">
                Yes, all our soaps are handcrafted in small batches for quality
                and freshness.
              </p>
            </div>
            <div>
              <h5 className="font-semibold">
                Do you use artificial fragrances?
              </h5>
              <p className="mt-1">
                No, we only use pure essential oils and natural extracts.
              </p>
            </div>
            <div>
              <h5 className="font-semibold">
                Are your soaps suitable for sensitive skin?
              </h5>
              <p className="mt-1">
                Absolutely, our recipes are designed to be gentle and
                skin-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductModal item={modalItem} onClose={() => setModalItem(null)} />
    </main>
  );
}
