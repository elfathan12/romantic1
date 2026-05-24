import { motion } from "framer-motion";
import { PiFlowerLotusLight } from "react-icons/pi";

export default function Hero() {
  return (
    <section id="home" className="relative grid min-h-screen place-items-center overflow-hidden px-6 pb-20 pt-32">
      <div className="hero-light-field absolute inset-0" />

      <motion.div
        style={{ y: 0 }}
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-xs uppercase tracking-[0.48em] text-blush/[0.78] sm:text-sm"
        >
          a love letter in bloom
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.72, ease: "easeOut" }}
          className="mt-7 font-display text-[clamp(4rem,12vw,9.5rem)] leading-[0.86] text-roseMist"
        >
          For You,
          <span className="block text-blush">My Everything</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.05, ease: "easeOut" }}
          className="mx-auto mt-8 grid h-16 w-16 place-items-center rounded-full border border-champagne/30 bg-white/[0.08] text-4xl text-champagne shadow-gold backdrop-blur-xl"
        >
          <PiFlowerLotusLight />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.22 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/[0.68] sm:text-lg"
        >
          Every petal holds a whisper of how much you mean to me
        </motion.p>
      </motion.div>

      <motion.a
        href="#letter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.55, duration: 0.8 }, y: { duration: 2.2, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.34em] text-white/[0.48] transition hover:text-blush"
      >
        Scroll to Discover
      </motion.a>
    </section>
  );
}
