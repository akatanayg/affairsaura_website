import React from "react";
import { motion } from "framer-motion";

export default function ProductModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.18 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 md:p-6">
          {/* Mobile: Stack vertically, Desktop: Side by side */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {/* Image Section */}
            <div className="w-full md:flex-1">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-80 lg:w-96 flex flex-col">
              {/* Header with close button */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl md:text-2xl font-serif text-[#5b3a2e] leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-lg md:text-xl font-semibold text-[#a66a4e] mt-1">
                    {item.price}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-[#8b857b] hover:text-[#5b3a2e] text-2xl leading-none flex-shrink-0 w-8 h-8 flex items-center justify-center"
                  aria-label="Close modal"
                >
                  ×
                </button>
              </div>

              {/* Description */}
              <div className="flex-1">
                <p className="text-[#8b857b] text-sm md:text-base leading-relaxed">
                  {item.desc ||
                    "Handcrafted with premium ingredients and attention to detail. Perfect for gifts or treating yourself to something special."}
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={item.buy || "https://www.meesho.com/"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 px-4 py-3 rounded-lg bg-[#5b3a2e] text-white font-semibold text-center hover:bg-[#4a2d23] transition-colors"
                >
                  Buy on Meesho
                </a>
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-3 rounded-lg border border-[#8b857b] text-[#5b3a2e] font-semibold hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>

              {/* Footer info */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs md:text-sm text-[#8b857b] text-center">
                  Free shipping for orders above ₹1500 • Returns within 7 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
