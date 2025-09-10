import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const backgrounds = [
  "/images/Cappuccino1.jpg",
  "/images/Cappuccino2.jpg",
  "/images/Cappuccino3.jpg",
  "/images/Cappuccino4.jpg",
];

export default function Homepage() {
  const [bg, setBg] = useState(backgrounds[0]);
  const [useVideo, setUseVideo] = useState(true);

  useEffect(() => {
    const random = Math.floor(Math.random() * backgrounds.length);
    setBg(backgrounds[random]);
  }, []);

  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* 🎥 Video achtergrond */}
      {useVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture="true"
          preload="true"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/Cappuccino5.mp4" type="video/mp4" />
          {/* Fallback naar afbeelding */}
          <img
            src={bg}
            alt="coffee background"
            className="w-full h-full object-cover"
          />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        />
      )}

      {/* Overlay voor leesbaarheid */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Card met fade-in animatie */}
      <motion.div
        className="relative z-10 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-green-800/80 p-6 sm:p-8 w-full max-w-md text-center mx-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight text-gray-900 font-script">
          Cappuccino Gent
        </h1>
        <p className="text-base sm:text-lg font-medium text-gray-700 mb-2 font-serif">
          A boutique daytime experience in the heart of Ghent
        </p>
        <p className="text-sm text-gray-500 mb-6 font-serif">
          Brunch • Lunch • Desserts • Coffee
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-900 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition shadow-lg"
          >
            Bekijk Menu
          </a>
          <a
            href="https://www.instagram.com/cappuccino_gent/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-900 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition shadow-lg"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@cappuccinogent"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-900 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition shadow-lg"
          >
            TikTok
          </a>
        </div>

        <div className="flex flex-col gap-1 mt-6 text-sm text-gray-500">
          <p>Schedule: Tue–Sun | 09:00–21:00</p>
          <p>Address: Sint-Amandstraat 48</p>
        </div>

        <div className="flex flex-col gap-1 mt-6 text-sm text-gray-500">
          <a
            href="https://www.pierrenh.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-xs text-gray-400 hover:underline"
          >
            Built by NH
          </a>
        </div>
      </motion.div>
    </div>
  );
}
