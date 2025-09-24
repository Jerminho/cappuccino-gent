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
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    const random = Math.floor(Math.random() * backgrounds.length);
    setBg(backgrounds[random]);

    // 📱 check schermbreedte
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setUseVideo(true); // mobiel
      } else {
        setUseVideo(false); // desktop
      }
    };

    handleResize(); // run bij load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* 🎥 Video voor mobiel */}
      {useVideo ? (
        <div
          className="absolute inset-0 w-full h-full object-cover"
          dangerouslySetInnerHTML={{
            __html: `
              <video 
                autoplay 
                loop 
                muted 
                playsinline 
                preload="auto" 
                disablepictureinpicture 
                class="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/images/Cappuccino7.mp4" type="video/mp4" />
                <img src="${bg}" alt="coffee background" class="w-full h-full object-cover" />
              </video>
            `,
          }}
        />
      ) : (
        // 🖥️ Desktop-banner
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/Desktop_banner.jpg')` }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Card with fade-in */}
      <motion.div
        className="relative z-10 bg-white/40 backdrop-md rounded-2xl shadow-2xl border-2 border-green-800/80 p-6 sm:p-8 w-full max-w-md text-center mx-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/images/Logo-Capp.png"
          alt="Cappuccino Gent logo"
          className="mx-auto mb-4 w-32 sm:w-40"
        />
        <p className="text-base sm:text-lg font-medium text-[#edebe5] mb-2 font-serif">
          A boutique daytime experience in the heart of Ghent
        </p>
        <p className="text-sm text-[#f5f3f0] mb-6 font-serif">
          Brunch • Lunch • Desserts • Coffee
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="/FINAL-Al_Amaanah.pdf"
            rel="noopener noreferrer"
            className="bg-green-800/60 text-[#f6f5f2] py-3 rounded-xl font-semibold hover:bg-green-700/0 transition shadow-lg backdrop-blur-sm"
          >
            Bekijk Menu
          </a>
          <a
            href="https://www.instagram.com/cappuccino_gent/"
            rel="noopener noreferrer"
            className="bg-green-800/60 text-[#f6f5f2] py-3 rounded-xl font-semibold hover:bg-green-700/70 transition shadow-lg backdrop-blur-sm"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@cappuccinogent"
            rel="noopener noreferrer"
            className="bg-green-800/60 text-[#f6f5f2] py-3 rounded-xl font-semibold hover:bg-green-700/70 transition shadow-lg backdrop-blur-sm"
          >
            TikTok
          </a>
          <a
            href="https://www.google.com/search?q=Cappuccino+Gent+Reviews"
            rel="noopener noreferrer"
            className="bg-green-800/60 text-[#f6f5f2] py-3 rounded-xl font-semibold hover:bg-green-700/70 transition shadow-lg backdrop-blur-sm"
          >
            Google Reviews
          </a>
        </div>

        <div className="flex flex-col gap-1 mt-6 text-sm text-[#edebe5]">
          <p>Schedule: Mon–Sun | 08:00–21:00</p>
          <p>Address: Sint-Amandstraat 48</p>
        </div>

        <div className="flex flex-col gap-1 mt-6 text-sm text-gray-500">
          <a
            href="https://www.pierrenh.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-xs text-gray-200 hover:underline"
          >
            Built by NH
          </a>
        </div>
      </motion.div>
    </div>
  );
}
