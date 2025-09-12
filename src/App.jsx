import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Chocolate from "./pages/Chocolate";
import Soap from "./pages/Soap";
import About from "./pages/About";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

// Fixed reveal hook that reinitializes on route changes
function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered after route change
    const timeoutId = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (
              e.isIntersecting ||
              e.boundingClientRect.top < window.innerHeight
            ) {
              e.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.12 }
      );

      // Find all reveal elements and observe them
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((node) => {
        // Reset visibility state first
        node.classList.remove("visible");
        obs.observe(node);
      });

      // Immediately show elements that are already in viewport
      revealElements.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          node.classList.add("visible");
        }
      });

      return () => obs.disconnect();
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]); // Re-run whenever route changes
}

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chocolate" element={<Chocolate />} />
        <Route path="/soap" element={<Soap />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
