import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <section id="letter" className="relative flex min-h-screen items-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 54 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto max-w-4xl rounded-lg border border-white/[0.14] bg-white/[0.075] p-6 shadow-romantic backdrop-blur-2xl sm:p-10 lg:p-14"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-champagne/70">My dearest</p>
        <h2 className="mt-5 font-display text-[clamp(3rem,8vw,6.8rem)] leading-[0.9] text-roseMist">
          You are my
          <span className="block text-blush">wildest dream</span>
          <span className="block">come true.</span>
        </h2>

        <div className="mt-9 space-y-6 text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
          <p>
            I do not know how the universe learned your name before I did, but somehow every quiet road led me closer to
            you. You arrived like a soft song in the middle of a crowded world, and suddenly everything felt more gentle,
            more golden, more possible.
          </p>
          <p>
            If I could gather every feeling I have for you, I would place them in a garden where the flowers never stop
            blooming. And every time you wondered if you were loved, I would take your hand and show you that every petal
            had been growing for you.
          </p>
        </div>

        <p className="mt-10 font-display text-2xl text-champagne">- Always yours 🌹</p>
      </motion.div>
    </section>
  );
}
