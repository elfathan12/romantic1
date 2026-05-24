import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPause, FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";
import coverImage from "../assets/images/cover.jpg";
import songFile from "../assets/music/song.mp3";

export default function MusicPlayer({ autoStartToken }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(38);
  const [audioAvailable, setAudioAvailable] = useState(true);

  useEffect(() => {
    if (!autoStartToken) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setAudioAvailable(true);
      })
      .catch(() => {
        setAudioAvailable(false);
      });
  }, [autoStartToken]);

  useEffect(() => {
    if (!isPlaying) return undefined;

    const timer = window.setInterval(() => {
      setProgress((current) => (current >= 96 ? 12 : current + 0.8));
    }, 700);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) {
      setIsPlaying((current) => !current);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setAudioAvailable(true);
      setIsPlaying(true);
    } catch {
      setAudioAvailable(false);
      setIsPlaying(true);
    }
  };

  const jumpProgress = (direction) => {
    setProgress((current) => {
      const next = current + direction * 16;
      if (next < 8) return 86;
      if (next > 96) return 14;
      return next;
    });
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -28, y: 18 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.35 }}
      className="fixed bottom-3 left-3 z-40 w-[min(18rem,calc(100vw-5.25rem))] rounded-lg border border-white/[0.15] bg-white/[0.09] p-3 shadow-romantic backdrop-blur-2xl sm:bottom-6 sm:left-6 sm:w-80 sm:p-4"
    >
      <audio
        ref={audioRef}
        src={songFile}
        preload="auto"
        loop
        onError={() => setAudioAvailable(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <div className="flex items-center gap-3">
        <img
          src={coverImage}
          alt="Music cover"
          className="h-12 w-12 shrink-0 rounded-lg object-cover shadow-gold sm:h-14 sm:w-14"
        />

        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-base leading-tight text-roseMist sm:text-lg">A Thousand Petals</p>
          <p className="truncate text-[11px] uppercase tracking-[0.2em] text-white/[0.45] sm:text-xs">Your Secret Admirer</p>
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blush text-ink shadow-glow transition hover:bg-roseMist"
        >
          {isPlaying ? <FaPause className="text-sm" /> : <FaPlay className="ml-0.5 text-sm" />}
        </button>
      </div>

      <div className="mt-3">
        <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.12]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blush via-roseMist to-champagne"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between text-white/[0.58]">
        <button
          type="button"
          onClick={() => jumpProgress(-1)}
          aria-label="Previous song"
          className="rounded-full p-2 transition hover:bg-white/10 hover:text-blush"
        >
          <FaStepBackward />
        </button>

        <span className="text-[10px] uppercase tracking-[0.22em] text-white/[0.38]">
          {audioAvailable ? "softly playing" : "replace song.mp3"}
        </span>

        <button
          type="button"
          onClick={() => jumpProgress(1)}
          aria-label="Next song"
          className="rounded-full p-2 transition hover:bg-white/10 hover:text-blush"
        >
          <FaStepForward />
        </button>
      </div>
    </motion.aside>
  );
}
