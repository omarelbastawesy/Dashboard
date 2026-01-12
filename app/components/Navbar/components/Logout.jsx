import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Logout({ open }) {
  const logout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });
    if (response.ok) {
      window.location.href = "/login";
    }
  };
  return (
    <button
      onClick={logout}
      className={`w-full cursor-pointer flex items-center gap-4 py-4 rounded-3xl bg-(--error)/5 hover:bg-(--error)/20 border border-transparent hover:border-(--error)/20 transition-all duration-500 group/logout ${
        open ? "px-5" : "justify-center"
      }`}
    >
      <FontAwesomeIcon
        icon={faRightFromBracket}
        className="sm:text-lg text-sm text-(--error)/60 group-hover/logout:text-(--error) transition-colors drop-shadow-[0_0_8px_transparent] group-hover:drop-shadow-[0_0_8px_var(--error)]"
      />
      {open && (
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-(--error)/60 group-hover/logout:text-(--text-inverse) transition-all">
          Disconnect
        </span>
      )}
    </button>
  );
}
