import { useMemo } from "react";
import { motion } from "framer-motion";

const petalPalette = [
  "rgba(255, 194, 212, 0.88)",
  "rgba(255, 232, 239, 0.72)",
  "rgba(190, 51, 94, 0.68)",
  "rgba(243, 207, 142, 0.62)",
];

export default function FloatingPetals({ variant = "full" }) {
  const { petals, sparkles } = useMemo(() => {
    const petalCount = variant === "intro" ? 18 : 34;
    const sparkleCount = variant === "intro" ? 22 : 42;

    return {
      petals: Array.from({ length: petalCount }, (_, index) => ({
        id: `petal-${index}`,
        left: (index * 29 + 11) % 100,
        size: 10 + ((index * 7) % 18),
        delay: (index * 0.7) % 8,
        duration: 11 + ((index * 5) % 13),
        drift: index % 2 === 0 ? 36 + index : -34 - index,
        color: petalPalette[index % petalPalette.length],
      })),
      sparkles: Array.from({ length: sparkleCount }, (_, index) => ({
        id: `sparkle-${index}`,
        left: (index * 43 + 5) % 100,
        top: (index * 31 + 13) % 100,
        size: 2 + (index % 4),
        delay: (index * 0.35) % 5,
      })),
    };
  }, [variant]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-haze absolute inset-0" />

      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="sparkle absolute rounded-full bg-champagne"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            opacity: [0.15, 0.85, 0.2],
            scale: [0.7, 1.35, 0.8],
          }}
          transition={{
            duration: 2.8,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="petal absolute top-[-10vh]"
          style={{
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size * 1.35,
            background: petal.color,
          }}
          animate={{
            y: ["-12vh", "112vh"],
            x: [0, petal.drift, petal.drift * -0.35, petal.drift * 0.55],
            rotate: [0, 120, 240, 360],
            opacity: [0, 0.85, 0.7, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
