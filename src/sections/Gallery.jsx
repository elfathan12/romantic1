import { motion } from "framer-motion";
import PhotoCard from "../components/PhotoCard.jsx";
import { gallery } from "../data/gallery.js";

export default function Gallery() {
  return (
    <section id="gallery" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-champagne/70">soft memories</p>
          <h2 className="mt-4 font-display text-[clamp(3rem,7vw,6rem)] leading-none text-roseMist">
            Your Beautiful Pictures
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
