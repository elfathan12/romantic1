import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const navLinks = [
  { label: "Letter", href: "#letter" },
  { label: "Flowers", href: "#flowers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reasons", href: "#reasons" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed left-1/2 top-3 z-40 flex w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-lg border border-white/10 bg-ink/[0.45] px-4 py-3 shadow-romantic backdrop-blur-2xl sm:top-5 sm:px-5"
    >
      <a href="#home" className="flex items-center gap-2 font-display text-base tracking-wide text-roseMist sm:text-lg">
        <FaHeart className="text-blush drop-shadow-[0_0_12px_rgba(255,194,212,0.55)]" />
        For You
      </a>

      <div className="hidden items-center gap-1 sm:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/[0.62] transition hover:bg-white/10 hover:text-blush"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
