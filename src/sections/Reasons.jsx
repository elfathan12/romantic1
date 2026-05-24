import { motion } from "framer-motion";
import ReasonCard from "../components/ReasonCard.jsx";
import { reasons } from "../data/reasons.js";

export default function Reasons() {
  return (
    <section id="reasons" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-blush/70">the little truths</p>
          <h2 className="mt-4 font-display text-[clamp(3rem,7vw,6rem)] leading-none text-roseMist">
            Reasons Why I Love You
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.id} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
