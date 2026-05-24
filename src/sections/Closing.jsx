import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Closing() {
  return (
    <section className="relative grid min-h-screen place-items-center px-6 py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto max-w-4xl"
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.82, 1, 0.82] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-blush/[0.35] bg-blush/[0.12] text-4xl text-blush shadow-glow backdrop-blur-xl"
        >
          <FaHeart />
        </motion.div>

        <h2 className="mt-8 font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.88] text-roseMist">
          You Are Loved
          <span className="block text-blush">Beyond Words</span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/[0.68] sm:text-lg sm:leading-9">
          No matter where life takes us, know that somewhere in the universe, there is a garden blooming with every
          feeling I have ever held for you.
        </p>

        <p className="mt-12 font-display text-2xl text-champagne">made with love, just for you 🌸</p>
      </motion.div>
    </section>
  );
}
