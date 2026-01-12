import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faCompass } from "@fortawesome/free-solid-svg-icons";

export default function Spen({ alert = false }) {
  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center transition-all duration-700 ${
        alert
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Premium Backdrop with Shifting Mesh Gradient */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl transition-opacity duration-1000" />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] bg-(--color-primary) rounded-full blur-[150px] animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[20%] w-[80%] h-[80%] bg-indigo-600 rounded-full blur-[150px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative flex flex-col items-center justify-center gap-12 group">
        {/* The Quantum Core */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center perspective-[1000px]">
          {/* Outer Orbital Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-(--color-primary)/20 animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-(--color-primary)/40 animate-[spin_3s_linear_infinite]" />

          {/* Middle Glowing Ring */}
          <div className="absolute inset-[15%] rounded-full bg-(--color-primary-soft) border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.3)] animate-[spin_5s_linear_infinite_reverse]" />

          {/* Central Pulsing Icon */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce">
            <div className="absolute inset-0 bg-(--color-primary) opacity-20 rounded-2xl animate-pulse" />
            <FontAwesomeIcon
              icon={faRocket}
              className="text-3xl sm:text-4xl text-(--color-primary) drop-shadow-[0_0_15px_var(--color-primary)]"
            />
          </div>

          {/* Particle Effects (Simplified) */}
          <div className="absolute -top-4 left-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_10px_#6366f1] animate-[spin_4s_linear_infinite] origin-[0_80px]" />
          <div className="absolute -bottom-4 left-1/2 w-1.5 h-1.5 bg-(--color-primary) rounded-full shadow-[0_0_10px_var(--color-primary)] animate-[spin_6s_linear_infinite_reverse] origin-[0_-80px]" />
        </div>

        {/* Modern Loading Text */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-xl sm:text-2xl font-black italic tracking-[0.3em] uppercase text-white drop-shadow-lg relative">
            <span className="opacity-30">Loading</span>
            <div className="absolute inset-0 overflow-hidden animate-[wifi-text_2s_ease_infinite]">
              <span className="text-(--color-primary)">Loading</span>
            </div>
          </div>
          <div className="h-1 w-32 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-linear-to-r from-transparent via-(--color-primary) to-transparent w-full -translate-x-full animate-[shimmer_1.5s_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
