export default function RenewPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2f5e4e] px-6">
      <div className="max-w-md w-full text-center text-[#f5f2eb] space-y-8">
        
        {/* Steam animation */}
        <div className="relative mx-auto w-24 h-24">
          <span className="steam steam-1" />
          <span className="steam steam-2" />
          <span className="steam steam-3" />
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">
            Deze website wordt vernieuwd
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            Binnenkort terug ☕️
          </p>
        </div>

      </div>

      {/* Animations */}
      <style>{`
        .steam {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 6px;
          height: 40px;
          background: rgba(245, 242, 235, 0.8);
          border-radius: 999px;
          transform: translateX(-50%);
          animation: rise 3s ease-in-out infinite;
        }

        .steam-1 {
          left: 40%;
          animation-delay: 0s;
        }

        .steam-2 {
          left: 50%;
          animation-delay: 0.6s;
          height: 50px;
        }

        .steam-3 {
          left: 60%;
          animation-delay: 1.2s;
        }

        @keyframes rise {
          0% {
            opacity: 0;
            transform: translate(-50%, 20px) scale(0.9);
          }
          30% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -40px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
