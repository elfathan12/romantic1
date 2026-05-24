import { useState } from "react";
import { motion } from "framer-motion";
import FlowerCard from "../components/FlowerCard.jsx";
import { flowers } from "../data/flowers.js";

export default function FlowerMeaning() {
  const [selectedFlower, setSelectedFlower] = useState(flowers[0].id);

  return (
    <section id="flowers" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-blush/70">flower language</p>
          <h2 className="mt-4 font-display text-[clamp(3rem,7vw,6rem)] leading-none text-roseMist">Just For You</h2>
          <p className="mt-5 text-base leading-8 text-white/[0.62] sm:text-lg">
            Every bloom carries a little meaning, and every meaning is another way to say I love you.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {flowers.map((flower) => (
            <FlowerCard
              key={flower.id}
              flower={flower}
              isActive={selectedFlower === flower.id}
              onSelect={setSelectedFlower}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
