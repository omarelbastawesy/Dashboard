import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider({ modules, activeModule, setActiveModule }) {
  return (
    <div className="xl:w-80 p-4 flex flex-row xl:flex-col gap-4 overflow-x-auto pb-4 xl:pb-0 listed [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] snap-x snap-mandatory">
      {modules.map((mod) => (
        <button
          key={mod.id}
          onClick={() => setActiveModule(mod.id)}
          className={`p-5 rounded-[1.8rem] border transition-all duration-500 flex items-center gap-5 text-left group overflow-hidden relative shrink-0 snap-start ${
            activeModule === mod.id
              ? "bg-(--color-primary)/10 border-(--color-primary)/30 shadow-xl scale-105"
              : "bg-(--bg-card)/40 backdrop-blur-3xl border-white/5 hover:border-white/10"
          }`}
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center just ify-center transition-all duration-500 ${
              activeModule === mod.id
                ? "bg-(--color-primary) text-white shadow-[0_0_20px_var(--color-primary)]"
                : "bg-white/5 text-(--text-muted) group-hover:text-white"
            }`}
          >
            <FontAwesomeIcon icon={mod.icon} className="text-sm" />
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className={`text-xs font-black uppercase tracking-widest ${
                activeModule === mod.id ? "text-white" : "text-(--text-primary)"
              }`}
            >
              {mod.name}
            </h3>
            <p className="text-[9px] font-bold text-(--text-muted) truncate mt-0.5">
              {mod.desc}
            </p>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`text-[10px] text-(--color-primary) transition-all duration-500 ${
              activeModule === mod.id
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
