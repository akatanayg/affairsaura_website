import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ item, onOpen }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-xl p-4 shadow-md"
    >
      <div
        className="relative rounded-lg overflow-hidden h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-3">
          <div className="text-white">
            <div className="font-semibold">{item.title}</div>
            <div className="text-xs">{item.desc}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div>
          <div className="font-semibold text-[#5b3a2e]">{item.title}</div>
          <div className="text-sm text-[#8b857b]">{item.desc}</div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-[#a66a4e]">{item.price}</div>
          <div className="mt-2">
            <button
              onClick={() => onOpen(item)}
              className="bg-white border rounded-full px-3 py-1 text-sm font-semibold shadow"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
