import { motion } from "framer-motion";

export default function ReasonCard({ reason, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.07 }}
      whileHover={{ y: -8 }}
      className="rounded-lg border border-white/[0.12] bg-white/[0.065] p-6 shadow-romantic backdrop-blur-2xl transition duration-300 hover:border-blush/[0.55] hover:bg-blush/[0.12] hover:shadow-glow"
    >
      <span className="text-4xl">{reason.icon}</span>
      <h3 className="mt-5 font-display text-2xl text-roseMist">{reason.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/[0.62]">{reason.description}</p>
    </motion.article>
  );
}
