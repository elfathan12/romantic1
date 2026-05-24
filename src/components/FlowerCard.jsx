import { motion } from "framer-motion";

export default function FlowerCard({ flower, isActive, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(flower.id)}
      onMouseEnter={() => onSelect(flower.id)}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.97 }}
      className={`group min-h-56 rounded-lg border p-5 text-left backdrop-blur-2xl transition duration-300 ${
        isActive
          ? "border-blush/60 bg-blush/[0.14] shadow-glow"
          : "border-white/[0.12] bg-white/[0.065] hover:border-blush/[0.45] hover:bg-white/[0.09]"
      }`}
    >
      <span className="block text-5xl drop-shadow-[0_0_18px_rgba(255,194,212,0.28)] transition duration-300 group-hover:scale-110">
        {flower.emoji}
      </span>
      <span className="mt-6 block font-display text-2xl text-roseMist">{flower.name}</span>
      <motion.p
        initial={false}
        animate={{ opacity: isActive ? 1 : 0.58, y: isActive ? 0 : 8 }}
        className="mt-4 text-sm leading-7 text-white/[0.64]"
      >
        {flower.meaning}
      </motion.p>
    </motion.button>
  );
}
