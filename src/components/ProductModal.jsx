import React from "react";
import { motion } from "framer-motion";

export default function ProductModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.18 }}
        className="bg-white rounded-2xl max-w-4xl w-[94%] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-4">
          <div className="flex-1">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg w-full h-[360px] object-cover"
            />
          </div>
          <div className="w-[360px] flex flex-col">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-serif text-[#5b3a2e]">
                  {item.title}
                </h3>
                <div className="text-[#8b857b]">{item.price}</div>
              </div>
              <button onClick={onClose} className="text-[#8b857b] text-xl">
                ✕
              </button>
            </div>

            <p className="mt-4 text-[#8b857b]">{item.desc}</p>

            <div className="mt-4 flex gap-3">
              <a
                href={item.buy}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#5b3a2e] text-white font-semibold"
              >
                Buy on Amazon
              </a>
              <a
                href={item.buy}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border"
              >
                More info
              </a>
            </div>

            <div className="mt-auto text-sm text-[#8b857b]">
              Free shipping for orders above ₹1500 • Returns within 7 days
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
