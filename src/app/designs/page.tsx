"use client";

import { useState } from "react";
import { designs, DesignCategory } from "@/data/designs";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories: DesignCategory[] = ["Apartment", "Bungalow", "Villa"];

export default function DesignsPage() {
  const [activeFilter, setActiveFilter] = useState<DesignCategory | "All">(
    "All"
  );

  const filteredDesigns =
    activeFilter === "All"
      ? designs
      : designs.filter((d) => d.category === activeFilter);

  return (
    <div>
      {/* Page Banner */}
      <div className="bg-brand-green py-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Our Designs</h1>
        <p className="max-w-2xl mx-auto text-lg px-4">
          Browse our curated collection of architectural designs. Use the
          filters to find the perfect plan for your project, whether it&apos;s a
          modern apartment, a cozy bungalow, or a luxurious villa.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Filter Controls */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors ${
              activeFilter === "All"
                ? "bg-brand-green text-white"
                : "bg-gray-200 text-brand-dark"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm md:text-base rounded-full transition-colors ${
                activeFilter === cat
                  ? "bg-brand-green text-white"
                  : "bg-gray-200 text-brand-dark"
              }`}
            >
              {cat}s
            </button>
          ))}
        </div>

        {/* Design Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredDesigns.map((design) => (
              <motion.div
                key={design.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group block"
              >
                <Link href={`/designs/${design.slug}`}>
                  <div className="overflow-hidden">
                    <Image
                      src={design.image}
                      alt={design.title}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm text-brand-gold">{design.category}</p>
                    <h3 className="text-xl font-serif mt-2 text-brand-dark group-hover:text-brand-green transition-colors">
                      {design.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
