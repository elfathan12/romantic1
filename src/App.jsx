import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowUp,
  FaCompactDisc,
  FaGift,
  FaHeart,
  FaPause,
  FaPlay,
  FaStar,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { PiFlowerLotusLight } from "react-icons/pi";
import coverImage from "./assets/images/cover.jpg";
import photo1 from "./assets/images/photo-1.jpg";
import photo2 from "./assets/images/photo-2.jpg";
import photo3 from "./assets/images/photo-3.jpg";
import photo4 from "./assets/images/photo-4.jpg";
import songFile from "./assets/music/song.mp3";

const flowers = [
  {
    id: "rose",
    name: "Rose",
    emoji: "🌹",
    meaning: "My love for you, deep and endlessly blooming.",
  },
  {
    id: "daisy",
    name: "Daisy",
    emoji: "🌼",
    meaning: "Your pure heart, gentle joy, and the lightness you bring.",
  },
  {
    id: "tulip",
    name: "Tulip",
    emoji: "🌷",
    meaning: "A promise of forever, held softly in every tomorrow.",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    emoji: "🌻",
    meaning: "You are my sunshine, even on the quietest days.",
  },
  {
    id: "lotus",
    name: "Lotus",
    emoji: "🪷",
    meaning: "The calm beauty of your soul, rising with grace.",
  },
  {
    id: "lily",
    name: "Lily",
    emoji: "🤍",
    meaning: "The tenderness I find whenever I am close to you.",
  },
];

const gallery = [
  {
    id: "photo-1",
    image: photo1,
    alt: "Romantic memory one",
    caption: "The way every ordinary moment turns golden with you.",
  },
  {
    id: "photo-2",
    image: photo2,
    alt: "Romantic memory two",
    caption: "A soft little forever, quietly kept in my heart.",
  },
  {
    id: "photo-3",
    image: photo3,
    alt: "Romantic memory three",
    caption: "Your smile, the kind of magic the sky would envy.",
  },
  {
    id: "photo-4",
    image: photo4,
    alt: "Romantic memory four",
    caption: "If love had a photograph, it would look like this.",
  },
];

const reasons = [
  {
    id: "smile",
    icon: "✨",
    title: "Your Smile",
    description: "It feels like a sunrise written only for the two of us.",
  },
  {
    id: "strength",
    icon: "🌙",
    title: "Your Strength",
    description: "You carry storms with a softness that still amazes me.",
  },
  {
    id: "kindness",
    icon: "💗",
    title: "Your Kindness",
    description: "You make the world feel gentler just by being in it.",
  },
  {
    id: "you",
    icon: "🌸",
    title: "Simply You",
    description: "No reason needs to be louder than the beautiful truth of you.",
  },
  {
    id: "laugh",
    icon: "🎶",
    title: "Your Laugh",
    description: "It is my favorite melody, even when the day is quiet.",
  },
  {
    id: "heart",
    icon: "💫",
    title: "Your Heart",
    description: "Warm, brave, honest, and somehow always home to me.",
  },
];

const petalPalette = [
  "rgba(255, 194, 212, 0.74)",
  "rgba(255, 232, 239, 0.56)",
  "rgba(165, 79, 108, 0.58)",
  "rgba(143, 174, 180, 0.44)",
  "rgba(243, 207, 142, 0.44)",
];

function AppLocalStyles() {
  return (
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400&display=swap');

        * { box-sizing: border-box; }

        .romantic-shell {
          background:
            radial-gradient(circle at 18% 18%, rgba(125, 28, 58, 0.62), transparent 36rem),
            radial-gradient(circle at 84% 20%, rgba(143, 174, 180, 0.12), transparent 28rem),
            radial-gradient(ellipse at 50% 92%, rgba(62, 102, 111, 0.22), transparent 38rem),
            linear-gradient(135deg, #07050a 0%, #17040d 34%, #30101a 61%, #091016 100%);
        }

        .romantic-shell::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at 50% 25%, black, transparent 75%);
          opacity: 0.24;
        }

        .ambient-haze {
          background:
            radial-gradient(circle at 18% 14%, rgba(255, 194, 212, 0.08), transparent 20rem),
            radial-gradient(circle at 78% 72%, rgba(78, 121, 129, 0.16), transparent 28rem),
            radial-gradient(circle at 44% 52%, rgba(122, 22, 55, 0.14), transparent 24rem);
          filter: blur(2px);
        }

        .hero-light-field {
          background:
            linear-gradient(180deg, rgba(255, 232, 239, 0.04), transparent 44%),
            radial-gradient(ellipse at 50% 38%, rgba(255, 194, 212, 0.12), transparent 34rem),
            radial-gradient(ellipse at 50% 80%, rgba(108, 155, 163, 0.14), transparent 38rem);
          mask-image: linear-gradient(to bottom, black, black 72%, transparent);
        }

        .petal {
          border-radius: 80% 20% 72% 28%;
          box-shadow: 0 0 18px rgba(255, 194, 212, 0.2);
          transform-origin: 50% 100%;
        }

        .sparkle {
          box-shadow: 0 0 14px rgba(243, 207, 142, 0.68);
        }

        .ocean-waves {
          position: absolute;
          inset: auto -12vw 0;
          height: 40vh;
          opacity: 0.68;
          mask-image: linear-gradient(to top, black, transparent);
        }

        .ocean-waves span {
          position: absolute;
          left: -8%;
          right: -8%;
          height: 130px;
          border-radius: 50%;
          border-top: 1px solid rgba(255, 232, 239, 0.12);
          border-bottom: 1px solid rgba(143, 174, 180, 0.07);
          transform: rotate(-2deg);
          animation: waveDrift 10s ease-in-out infinite;
        }

        .ocean-waves span:nth-child(1) { bottom: 54px; }
        .ocean-waves span:nth-child(2) { bottom: 104px; animation-delay: -2.5s; opacity: 0.7; }
        .ocean-waves span:nth-child(3) { bottom: 158px; animation-delay: -5s; opacity: 0.44; }

        .album-orbit {
          position: relative;
          isolation: isolate;
        }

        .album-orbit::after {
          content: "";
          position: absolute;
          inset: -8px;
          z-index: -1;
          border-radius: 9999px;
          border: 1px solid rgba(255, 232, 239, 0.16);
          box-shadow: 0 0 32px rgba(143, 174, 180, 0.2);
        }

        .album-art {
          transition: filter 0.5s ease;
        }

        .album-art.spinning {
          animation: albumSpin 10s linear infinite;
        }

        .wave-bar {
          width: 3px;
          border-radius: 9999px;
          background: linear-gradient(to top, rgba(143, 174, 180, 0.45), rgba(255, 194, 212, 0.88));
          animation: audioRise 1.25s ease-in-out infinite;
        }

        .section-label {
          font-family: 'Jost', sans-serif;
          font-weight: 200;
          letter-spacing: 0.44em;
          text-transform: uppercase;
          font-size: 10px;
          color: rgba(143, 174, 180, 0.65);
        }

        .display-font {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        .body-font {
          font-family: 'Jost', sans-serif;
        }

        /* Grain overlay */
        .romantic-shell::after {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
        }

        @keyframes waveDrift {
          0%, 100% { transform: translateX(-1.8%) rotate(-2deg); }
          50% { transform: translateX(1.8%) rotate(1.2deg); }
        }

        @keyframes audioRise {
          0%, 100% { transform: scaleY(0.38); opacity: 0.42; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        @keyframes albumSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 24px rgba(255,194,212,0.2); }
          50% { box-shadow: 0 0 44px rgba(255,194,212,0.45), 0 0 80px rgba(143,174,180,0.2); }
        }

        .pulse-glow {
          animation: pulseGlow 3.5s ease-in-out infinite;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,194,212,0.25); border-radius: 999px; }

        /* Mobile horizontal scroll fix */
        html, body { overflow-x: hidden; }
      `}
    </style>
  );
}

function FloatingPetals({ variant = "full" }) {
  const { petals, sparkles } = useMemo(() => {
    const petalCount = variant === "intro" ? 18 : 38;
    const sparkleCount = variant === "intro" ? 22 : 48;

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
          className="sparkle absolute rounded-full"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
            background: sparkle.size > 4 ? "rgba(243,207,142,0.7)" : "rgba(255,194,212,0.6)",
          }}
          animate={{ opacity: [0.1, 0.9, 0.15], scale: [0.6, 1.4, 0.7] }}
          transition={{
            duration: 2.8 + sparkle.delay * 0.3,
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

function GiftIntro({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    window.setTimeout(onOpen, 1250);
  };

  return (
    <motion.section
      exit={{ opacity: 0, scale: 1.06, filter: "blur(12px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden px-6"
      style={{
        background: "radial-gradient(circle at 50% 35%, rgba(68,92,99,0.18), rgba(92,16,41,0.7) 42%, rgba(18,2,10,0.98) 68%, #07050a)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col items-center text-center"
      >
        {/* Outer rings */}
        <motion.div
          className="absolute rounded-full border"
          style={{ inset: "-80px", borderColor: "rgba(255,194,212,0.08)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full border"
          style={{ inset: "-130px", borderColor: "rgba(143,174,180,0.06)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.1, 0.4] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />

        <motion.button
          type="button"
          onClick={handleOpen}
          aria-label="Tap to open gift"
          whileHover={{ scale: 1.06, y: -5 }}
          whileTap={{ scale: 0.95 }}
          animate={
            isOpening
              ? { rotate: [0, -6, 6, -4, 4, 0], scale: [1, 1.1, 1.18], opacity: [1, 1, 0] }
              : { y: [0, -12, 0] }
          }
          transition={{
            duration: isOpening ? 1.1 : 3.4,
            repeat: isOpening ? 0 : Infinity,
            ease: "easeInOut",
          }}
          className="pulse-glow group relative grid h-32 w-32 place-items-center rounded-full border border-[rgba(255,194,212,0.3)] text-5xl sm:h-48 sm:w-48 sm:text-7xl"
          style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
          }}
        >
          <span className="absolute inset-6 rounded-full border border-white/10" />
          <span className="absolute inset-x-10 top-1/2 h-px bg-[rgba(255,194,212,0.25)]" />
          <span className="absolute inset-y-10 left-1/2 w-px bg-[rgba(255,194,212,0.25)]" />
          <FaGift className="relative z-10 text-[rgba(255,194,212,0.9)] drop-shadow-[0_0_32px_rgba(255,194,212,0.5)]" />
        </motion.button>

        {isOpening && (
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 1, 0], scale: [0.4, 1.4, 2] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-14 flex items-center gap-6 text-[rgba(255,194,212,0.9)]"
          >
            <FaHeart />
            <FaStar style={{ color: "rgba(243,207,142,0.9)" }} />
            <FaHeart />
          </motion.div>
        )}

        <motion.p
          animate={{ opacity: isOpening ? 0 : [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: isOpening ? 0 : Infinity, ease: "easeInOut" }}
          className="body-font mt-8 text-[9px] uppercase tracking-[0.42em] text-white/50 sm:mt-10 sm:text-[10px] sm:tracking-[0.52em]"
        >
          Tap to play love.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

function MusicPlayer({ autoStartToken }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(38);
  const [audioAvailable, setAudioAvailable] = useState(true);

  useEffect(() => {
    if (!autoStartToken) return;
    const audio = audioRef.current;
    if (!audio) return;

    audio.play()
      .then(() => { setIsPlaying(true); setAudioAvailable(true); })
      .catch(() => { setAudioAvailable(false); });
  }, [autoStartToken]);

  useEffect(() => {
    if (!isPlaying) return undefined;
    const timer = window.setInterval(() => {
      setProgress((c) => (c >= 96 ? 12 : c + 0.8));
    }, 700);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) { setIsPlaying((c) => !c); return; }
    if (isPlaying) { audio.pause(); setIsPlaying(false); return; }
    try { await audio.play(); setAudioAvailable(true); setIsPlaying(true); }
    catch { setAudioAvailable(false); setIsPlaying(true); }
  };

  const jumpProgress = (dir) => {
    setProgress((c) => {
      const n = c + dir * 16;
      if (n < 8) return 86;
      if (n > 96) return 14;
      return n;
    });
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: -32, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      className="fixed bottom-3 left-3 z-40 overflow-hidden rounded-2xl sm:bottom-6 sm:left-6"
      style={{
        width: "min(17.25rem, calc(100vw - 5rem))",
        background: "rgba(8, 4, 14, 0.75)",
        backdropFilter: "blur(28px)",
        border: "1px solid rgba(143,174,180,0.18)",
        boxShadow: "0 24px 80px rgba(7,5,10,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
        padding: "10px",
      }}
    >
      {/* Top glow line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,194,212,0.6), transparent)" }}
      />

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
        {/* Album Art */}
        <div
          className="album-orbit relative shrink-0"
          style={{ height: "clamp(44px, 11vw, 52px)", width: "clamp(44px, 11vw, 52px)" }}
        >
          <img
            src={coverImage}
            alt="Music cover"
            className={`album-art h-full w-full rounded-full object-cover ${isPlaying ? "spinning" : ""}`}
            style={{ boxShadow: "0 0 28px rgba(143,174,180,0.25)" }}
          />
          <span
            className="absolute left-1/2 top-1/2 grid h-4 w-4 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-[8px]"
            style={{ background: "#09070c", color: "rgba(255,194,212,0.9)" }}
          >
            <FaCompactDisc />
          </span>
        </div>

        {/* Track info */}
        <div className="min-w-0 flex-1">
          <p className="body-font truncate text-[9px] uppercase tracking-[0.3em] text-[rgba(143,174,180,0.65)]">now playing</p>
          <p className="display-font truncate text-base leading-tight text-[rgba(249,200,214,0.95)] sm:text-lg">love.</p>
          <p className="body-font truncate text-[10px] uppercase tracking-[0.22em] text-white/40">wave to earth</p>
        </div>

        {/* Play button */}
        <motion.button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="grid shrink-0 place-items-center rounded-full transition"
          style={{
            height: "clamp(36px, 10vw, 40px)",
            width: "clamp(36px, 10vw, 40px)",
            background: "rgba(255,194,212,0.9)",
            color: "#07050a",
            boxShadow: isPlaying ? "0 0 20px rgba(255,194,212,0.5)" : "none",
          }}
        >
          {isPlaying ? <FaPause className="text-sm" /> : <FaPlay className="ml-0.5 text-sm" />}
        </motion.button>
      </div>

      {/* Progress bar */}
      <div className="mt-3">
        <div className="h-1 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, rgba(143,174,180,0.8), rgba(255,194,212,0.9), rgba(243,207,142,0.8))" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-2.5 flex items-center justify-between" style={{ color: "rgba(255,255,255,0.45)" }}>
        <button
          type="button"
          onClick={() => jumpProgress(-1)}
          aria-label="Previous"
          className="rounded-full p-2 transition hover:text-[rgba(255,194,212,0.9)]"
          style={{ "--tw-hover-bg": "rgba(255,255,255,0.08)" }}
        >
          <FaStepBackward />
        </button>

        <span className="body-font text-[9px] uppercase tracking-[0.24em] text-white/30">
          {audioAvailable ? "midnight version" : "add song.mp3"}
        </span>

        <button
          type="button"
          onClick={() => jumpProgress(1)}
          aria-label="Next"
          className="rounded-full p-2 transition hover:text-[rgba(255,194,212,0.9)]"
        >
          <FaStepForward />
        </button>
      </div>

      {/* Wave bars */}
      <div className="pointer-events-none absolute bottom-3.5 left-1/2 hidden h-7 -translate-x-1/2 items-end gap-[3px] sm:flex">
        {[8, 15, 11, 21, 13, 18, 10, 16, 12].map((height, index) => (
          <span
            key={height + index}
            className="wave-bar"
            style={{ height, animationDelay: `${index * 0.12}s`, opacity: isPlaying ? 1 : 0.3 }}
          />
        ))}
      </div>
    </motion.aside>
  );
}

function Hero() {
  return (
    <section id="home" className="relative grid min-h-screen place-items-center overflow-hidden px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16">
      <div className="hero-light-field absolute inset-0" />
      <div className="ocean-waves" aria-hidden="true">
        <span /><span /><span />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.9em" }}
          animate={{ opacity: 1, letterSpacing: "0.48em" }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="section-label"
        >
          love. by wave to earth
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 44, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
          className="display-font mt-5 leading-[0.88] sm:mt-6 sm:leading-[0.82]"
          style={{
            fontSize: "clamp(3.35rem, 17vw, 13rem)",
            color: "rgba(249,200,214,0.95)",
          }}
        >
          For You,
          <motion.span
            className="block"
            style={{ color: "rgba(244,168,191,0.9)" }}
            animate={{ opacity: [0.82, 1, 0.82] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            My Quiet Ocean
          </motion.span>
        </motion.h1>

        {/* Elegant divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.3, delay: 1.1, ease: "easeOut" }}
          className="mx-auto mt-7 sm:mt-10"
          style={{
            height: "1px",
            width: "min(200px, 52vw)",
            background: "linear-gradient(90deg, transparent, rgba(255,194,212,0.55), transparent)",
          }}
        />

        {/* Lotus icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 1.25, ease: [0.34, 1.56, 0.64, 1] }}
          className="mx-auto mt-7 grid place-items-center rounded-full sm:mt-10"
          style={{
            height: "clamp(64px, 18vw, 84px)",
            width: "clamp(64px, 18vw, 84px)",
            border: "1px solid rgba(143,174,180,0.28)",
            background: "rgba(255,255,255,0.055)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 50px rgba(143,174,180,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
            fontSize: "clamp(2rem, 8vw, 2.6rem)",
            color: "rgba(143,174,180,0.9)",
          }}
        >
          <PiFlowerLotusLight />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.45 }}
          className="body-font mx-auto mt-7 max-w-xl text-sm leading-7 text-white/55 sm:mt-10 sm:text-lg sm:leading-10"
          style={{ fontWeight: 300 }}
        >
          A soft little universe where every wave, every petal,
          and every quiet second brings me back to you
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#letter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 transition hover:opacity-100"
        style={{ opacity: 0.45 }}
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="body-font text-[9px] uppercase tracking-[0.5em] text-white/50"
        >
          Scroll to Discover
        </motion.span>
        <motion.span
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block"
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(255,194,212,0.6), transparent)",
          }}
        />
      </motion.a>
    </section>
  );
}

function LoveLetter() {
  return (
    <section id="letter" className="relative flex min-h-screen items-center px-5 py-20 sm:px-6 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto w-full max-w-4xl rounded-2xl p-5 sm:p-12 lg:p-16"
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.055)",
          backdropFilter: "blur(24px)",
          boxShadow: "0 40px 120px rgba(7,5,10,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >
        {/* Top accent */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,194,212,0.5), transparent)", marginBottom: "2rem" }} />

        <p className="section-label">For the song I keep in my heart</p>

        <h2
          className="display-font mt-6 leading-[0.88]"
          style={{ fontSize: "clamp(2.5rem, 12vw, 7.5rem)", color: "rgba(249,200,214,0.95)" }}
        >
          You feel like
          <span className="block" style={{ color: "rgba(244,168,191,0.9)" }}>love.</span>
          <span className="block">on repeat.</span>
        </h2>

        <div className="mt-8 space-y-5 text-sm text-white/65 sm:mt-10 sm:space-y-6 sm:text-lg sm:leading-9" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, lineHeight: "1.85" }}>
          <p>
            Some feelings do not need to be loud to stay. They move quietly, like a late-night song playing in a room
            with the lights low, and still they change everything. That is how loving you feels to me.
          </p>
          <p>
            If this little website could hold a sky, I would fill it with the softest colors, the calmest waves, and all
            the words I never manage to say perfectly. I hope every second here reminds you that you are loved gently,
            deeply, and more than ordinary language can carry.
          </p>
        </div>

        <p className="display-font mt-12 text-2xl" style={{ color: "rgba(243,207,142,0.85)" }}>— Always yours 🌹</p>
      </motion.div>
    </section>
  );
}

function FlowerCard({ flower, isActive, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(flower.id)}
      onMouseEnter={() => onSelect(flower.id)}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.97 }}
      className="group rounded-2xl p-5 text-left transition duration-300 sm:p-6"
      style={{
        border: isActive ? "1px solid rgba(255,194,212,0.55)" : "1px solid rgba(255,255,255,0.1)",
        background: isActive ? "rgba(255,194,212,0.12)" : "rgba(255,255,255,0.055)",
        backdropFilter: "blur(20px)",
        boxShadow: isActive ? "0 0 40px rgba(255,194,212,0.15), inset 0 1px 0 rgba(255,255,255,0.08)" : "none",
        minHeight: "clamp(170px, 46vw, 220px)",
      }}
    >
      <span className="block text-4xl transition duration-300 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(255,194,212,0.3)] sm:text-5xl">
        {flower.emoji}
      </span>
      <span className="display-font mt-5 block text-2xl" style={{ color: "rgba(249,200,214,0.95)" }}>
        {flower.name}
      </span>
      <motion.p
        initial={false}
        animate={{ opacity: isActive ? 1 : 0.55, y: isActive ? 0 : 6 }}
        className="body-font mt-3 text-sm leading-6 text-white/60 sm:mt-4 sm:leading-7"
        style={{ fontWeight: 300 }}
      >
        {flower.meaning}
      </motion.p>
    </motion.button>
  );
}

function FlowerMeaning() {
  const [selectedFlower, setSelectedFlower] = useState(flowers[0].id);

  return (
    <section id="flowers" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="section-label">petals and tides</p>
          <h2 className="display-font mt-5" style={{ fontSize: "clamp(2.55rem, 12vw, 6.5rem)", color: "rgba(249,200,214,0.95)", lineHeight: 0.92 }}>
            Little Things For You
          </h2>
          <p className="body-font mt-5 text-sm leading-7 text-white/55 sm:mt-6 sm:text-lg sm:leading-8" style={{ fontWeight: 300 }}>
            Every bloom, every wave, and every quiet light carries another small way to say I love you.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {flowers.map((flower) => (
            <FlowerCard
              key={flower.id}
              flower={flower}
              isActive={selectedFlower === flower.id}
              onSelect={setSelectedFlower}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoCard({ photo, index }) {
  const [imageSrc, setImageSrc] = useState(photo.image);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.1 }}
      className="group mx-auto w-full max-w-[22rem] overflow-hidden rounded-2xl p-2 sm:max-w-none"
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.055)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 20px 60px rgba(7,5,10,0.4)",
      }}
    >
      <div className="aspect-[5/6] overflow-hidden rounded-xl sm:aspect-[4/5]" style={{ background: "rgba(92,16,41,0.5)" }}>
        <img
          src={imageSrc}
          alt={photo.alt}
          onError={() => setImageSrc(coverImage)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]"
          style={{ filter: "grayscale(25%) sepia(8%)", transition: "transform 0.7s ease, filter 0.7s ease" }}
          onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0%) sepia(0%)"}
          onMouseLeave={e => e.currentTarget.style.filter = "grayscale(25%) sepia(8%)"}
        />
      </div>
      <figcaption className="body-font px-2 pb-2 pt-3 text-xs leading-5 text-white/55 sm:pt-4 sm:text-sm" style={{ fontWeight: 300 }}>
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="text-center"
        >
          <p className="section-label">film stills</p>
          <h2 className="display-font mt-5" style={{ fontSize: "clamp(2.55rem, 12vw, 6.5rem)", color: "rgba(249,200,214,0.95)", lineHeight: 0.92 }}>
            Your Beautiful Pictures
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -10 }}
      className="rounded-2xl p-5 transition duration-300 sm:p-7"
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.055)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 0 0 rgba(143,174,180,0)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(143,174,180,0.5)";
        e.currentTarget.style.background = "rgba(143,174,180,0.09)";
        e.currentTarget.style.boxShadow = "0 0 40px rgba(143,174,180,0.18)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        e.currentTarget.style.background = "rgba(255,255,255,0.055)";
        e.currentTarget.style.boxShadow = "0 0 0 rgba(143,174,180,0)";
      }}
    >
      <span className="text-3xl sm:text-4xl">{reason.icon}</span>
      <h3 className="display-font mt-4 text-2xl sm:mt-6" style={{ color: "rgba(249,200,214,0.95)" }}>{reason.title}</h3>
      <p className="body-font mt-2 text-sm leading-6 text-white/55 sm:mt-3 sm:leading-7" style={{ fontWeight: 300 }}>{reason.description}</p>
    </motion.article>
  );
}

function Reasons() {
  return (
    <section id="reasons" className="relative px-5 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="section-label">quiet reasons</p>
          <h2 className="display-font mt-5" style={{ fontSize: "clamp(2.55rem, 12vw, 6.5rem)", color: "rgba(249,200,214,0.95)", lineHeight: 0.92 }}>
            Reasons Why I Love You
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.id} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative grid min-h-screen place-items-center px-5 py-24 text-center sm:px-6 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mx-auto max-w-4xl"
      >
        <motion.div
          animate={{ scale: [1, 1.14, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto grid place-items-center rounded-full"
          style={{
            height: "clamp(72px, 20vw, 90px)",
            width: "clamp(72px, 20vw, 90px)",
            border: "1px solid rgba(143,174,180,0.3)",
            background: "rgba(143,174,180,0.09)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 40px rgba(143,174,180,0.22)",
            fontSize: "clamp(1.55rem, 7vw, 2rem)",
            color: "rgba(255,194,212,0.9)",
          }}
        >
          <FaHeart />
        </motion.div>

        <h2
          className="display-font mt-8 leading-[0.9] sm:mt-10 sm:leading-[0.88]"
          style={{ fontSize: "clamp(2.85rem, 13vw, 9.5rem)", color: "rgba(249,200,214,0.95)" }}
        >
          Stay With Me
          <span className="block" style={{ color: "rgba(244,168,191,0.9)" }}>In This Song</span>
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-8 sm:mt-10" style={{ height: "1px", width: "min(160px, 48vw)", background: "linear-gradient(90deg, transparent, rgba(255,194,212,0.4), transparent)" }} />

        <p
          className="body-font mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/55 sm:mt-10 sm:text-lg sm:leading-10"
          style={{ fontWeight: 300 }}
        >
          No matter where life takes us, I hope this little page feels like a place we can return to:
          warm, quiet, and full of everything I still want to say.
        </p>

        <p className="display-font mt-10 text-xl sm:mt-14 sm:text-2xl" style={{ color: "rgba(243,207,142,0.8)" }}>
          made with love, just for you 🌸
        </p>
        <p className="body-font mt-3 text-base tracking-[0.18em] sm:text-lg" style={{ color: "rgba(255,255,255,0.48)", fontWeight: 300 }}>
          -mhd.rapippp
        </p>
      </motion.div>
    </section>
  );
}

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [autoStartToken, setAutoStartToken] = useState(0);

  useEffect(() => {
    document.body.style.overflow = isOpened ? "auto" : "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpened]);

  const openGift = () => {
    setIsOpened(true);
    setAutoStartToken(Date.now());
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="romantic-shell relative min-h-screen overflow-x-hidden body-font" style={{ color: "rgba(249,200,214,0.9)" }}>
      <AppLocalStyles />
      <FloatingPetals variant={isOpened ? "full" : "intro"} />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <GiftIntro key="gift-intro" onOpen={openGift} />
        ) : (
          <motion.main
            key="main-love-letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <Hero />
            <LoveLetter />
            <FlowerMeaning />
            <Gallery />
            <Reasons />
            <Closing />
          </motion.main>
        )}
      </AnimatePresence>

      {isOpened && (
        <>
          <MusicPlayer autoStartToken={autoStartToken} />
          <motion.button
            type="button"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            className="fixed bottom-3 right-3 z-40 grid place-items-center rounded-full transition sm:bottom-6 sm:right-6"
            style={{
              height: "clamp(42px, 12vw, 48px)",
              width: "clamp(42px, 12vw, 48px)",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              color: "rgba(255,194,212,0.9)",
              boxShadow: "0 0 20px rgba(255,194,212,0.15)",
            }}
          >
            <FaArrowUp />
          </motion.button>
        </>
      )}
    </div>
  );
}
