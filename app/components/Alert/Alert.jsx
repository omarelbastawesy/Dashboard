import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Alert({
  alert,
  setAlert,
  onSwitch,
  x,
  icon,
  color,
  title,
  message,
  buttonText,
  link,
}) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        alert
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="relative w-full max-w-sm transform rounded-xl bg-(--bg-card) p-6 shadow-2xl transition-all duration-300 border border-(--border-color) scale-100">
        <button
          onClick={() => setAlert(false)}
          className="absolute right-4 top-4 text-(--text-muted) hover:text-(--text-primary) transition-colors"
        >
          {x === true ? <FontAwesomeIcon icon={faX} /> : ""}
        </button>

        <div className="flex flex-col items-center justify-between gap-2">
          <div className={`mb-4 ${color}`}>
            <FontAwesomeIcon
              icon={icon}
              className={`h-10 w-10 border-2 ${color} rounded-full p-3`}
            />
          </div>
          <h3 className="mb-2 text-lg font-bold text-(--text-primary)">
            {title}
          </h3>
          <p className="mb-6 text-sm text-(--text-secondary)">{message}</p>
          <Link
            href={link}
            onClick={() => onSwitch()}
            className="w-fit rounded-lg bg-(--color-primary) px-6 py-2.5 text-sm font-semibold text-(--text-inverse) shadow-sm hover:bg-(--color-primary-hover) transition-colors active:scale-[0.98]"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
