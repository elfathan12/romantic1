import { useState } from "react";
import { motion } from "framer-motion";
import { FaGift, FaHeart, FaStar } from "react-icons/fa";

export default function GiftIntro({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    window.setTimeout(onOpen, 1250);
  };

  return (
    <motion.section
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_35%,rgba(92,16,41,0.75),rgba(18,2,10,0.98)_58%,#090107)] px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative flex flex-col items-center text-center"
      >
        <motion.div
          className="absolute -top-20 h-44 w-44 rounded-full border border-blush/20"
          animate={{ scale: [1, 1.16, 1], opacity: [0.22, 0.04, 0.22] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.button
          type="button"
          onClick={handleOpen}
          aria-label="Tap to open gift"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.96 }}
          animate={
            isOpening
              ? {
                  rotate: [0, -5, 5, -4, 4, 0],
                  scale: [1, 1.08, 1.16],
                  opacity: [1, 1, 0],
                }
              : {
                  y: [0, -10, 0],
                }
          }
          transition={{
            duration: isOpening ? 1.1 : 3.2,
            repeat: isOpening ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="group relative grid h-36 w-36 place-items-center rounded-lg border border-blush/[0.35] bg-white/10 text-6xl text-blush shadow-glow backdrop-blur-2xl sm:h-44 sm:w-44 sm:text-7xl"
        >
          <span className="absolute inset-x-5 top-1/2 h-px bg-blush/30" />
          <span className="absolute inset-y-5 left-1/2 w-px bg-blush/30" />
          <FaGift className="relative z-10 drop-shadow-[0_0_28px_rgba(255,194,212,0.45)] transition group-hover:text-roseMist" />
        </motion.button>

        {isOpening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, 1.35, 1.9] }}
            transition={{ duration: 1.15, ease: "easeOut" }}
            className="absolute top-16 flex items-center gap-5 text-blush"
          >
            <FaHeart />
            <FaStar className="text-champagne" />
            <FaHeart />
          </motion.div>
        )}

        <motion.p
          animate={{ opacity: isOpening ? 0 : [0.58, 1, 0.58] }}
          transition={{ duration: 2.1, repeat: isOpening ? 0 : Infinity, ease: "easeInOut" }}
          className="mt-8 text-xs uppercase tracking-[0.48em] text-white/[0.64]"
        >
          Tap to open
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
