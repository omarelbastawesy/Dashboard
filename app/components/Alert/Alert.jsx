import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Alert({
  alert,
  setAlert,
  onSwitch,
  x,
  icon,
  color, // Used for icon color
  title,
  message,
  buttonText,
  link,
}) {
  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center transition-all duration-500 ${
        alert
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      {/* Cinematic Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-2xl"
        onClick={() => setAlert(false)}
      />

      {/* Modern Alert Modal */}
      <div
        className={`relative w-full max-w-sm mx-4 transform transition-all duration-500 ease-out bg-(--bg-card)/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.6)] ${
          alert ? "scale-100 translate-y-0" : "scale-90 translate-y-12"
        }`}
      >
        {/* Accent Glow Strip */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-(--color-primary) to-transparent opacity-50`}
        />

        {/* Improved Close Button */}
        {x && (
          <button
            onClick={() => setAlert(false)}
            className="absolute right-6 top-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-(--text-primary) hover:text-(--color-primary) hover:bg-white/10 transition-all duration-300 group"
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="text-sm group-hover:rotate-90 transition-transform"
            />
          </button>
        )}

        <div className="flex flex-col items-center text-center space-y-6">
          {/* Animated Icon Container */}
          <div className={`relative group`}>
            <div
              className={`absolute inset-0 rounded-full blur-2xl opacity-20 animate-pulse ${
                color.includes("red") ? "bg-red-500" : "bg-(--color-primary)"
              }`}
            />
            <div
              className={`relative w-20 h-20 rounded-full flex items-center justify-center border border-white/10 bg-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110`}
            >
              <FontAwesomeIcon
                icon={icon}
                className={`text-3xl ${color} drop-shadow-[0_0_12px_currentColor]`}
              />
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-2">
            <h3 className="text-2xl font-black tracking-tighter text-(--text-primary) uppercase italic">
              {title}
            </h3>
            <p className="text-xs font-bold leading-relaxed text-(--text-secondary) tracking-wide">
              {message}
            </p>
          </div>

          {/* High-End Action Button */}
          <Link
            href={link}
            onClick={() => onSwitch()}
            className="w-full relative group/btn py-4 rounded-2xl bg-linear-to-br from-(--color-primary) to-indigo-600 text-(--text-inverse) font-black text-xs tracking-[0.2em] uppercase shadow-[0_10px_30px_-10px_var(--color-primary)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_var(--color-primary)] active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10">{buttonText}</span>
          </Link>

          <button
            onClick={() => setAlert(false)}
            className="text-[9px] font-black uppercase tracking-widest text-(--text-secondary) hover:text-(--text-primary) transition-colors"
          >
            Acknowledge & Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
