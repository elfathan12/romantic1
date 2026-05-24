import { useState } from "react";
import { motion } from "framer-motion";
import fallbackImage from "../assets/images/cover.jpg";

export default function PhotoCard({ photo, index }) {
  const [imageSrc, setImageSrc] = useState(photo.image);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
      className="group overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.065] p-2 shadow-romantic backdrop-blur-xl"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-md bg-wine/50">
        <img
          src={imageSrc}
          alt={photo.alt}
          onError={() => setImageSrc(fallbackImage)}
          className="h-full w-full object-cover grayscale-[30%] sepia-[10%] transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
        />
      </div>
      <figcaption className="px-2 pb-2 pt-4 text-sm text-white/[0.62]">{photo.caption}</figcaption>
    </motion.figure>
  );
}
