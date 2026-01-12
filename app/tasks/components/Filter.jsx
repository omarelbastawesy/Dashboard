import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter, faCircleDot } from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative group">
            <div className="absolute inset-y-0 left-5 flex items-center text-(--text-muted) group-focus-within:text-(--color-primary) transition-colors">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              type="text"
              placeholder="Locate operational node ID..."
              className="w-full bg-(--bg-card)/40 backdrop-blur-xl border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm text-(--text-primary) placeholder:text-(--text-muted) focus:outline-hidden focus:border-(--color-primary)/50 focus:ring-4 focus:ring-(--color-primary)/5 transition-all"
            />
          </div>
          <div className="relative">
            <button className="w-full flex items-center justify-between px-6 py-4 bg-(--bg-card)/40 backdrop-blur-xl border border-white/10 rounded-2xl text-sm font-black uppercase tracking-widest text-(--text-muted) hover:text-(--text-primary) hover:border-white/20 transition-all">
              <span className="flex items-center gap-3">
                <FontAwesomeIcon icon={faFilter} className="text-xs" />
                Filter
              </span>
              <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded-lg border border-white/10">
                Priority
              </span>
            </button>
          </div>
          <div className="relative">
            <button className="w-full flex items-center justify-between px-6 py-4 bg-(--bg-card)/40 backdrop-blur-xl border border-white/10 rounded-2xl text-sm font-black uppercase tracking-widest text-white border-b-2 border-b-(--color-primary) transition-all">
              <span className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faCircleDot}
                  className="text-xs text-(--color-primary) animate-pulse"
                />
                Realtime
              </span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-(--color-primary) rounded-full" />
                <div className="w-1 h-1 bg-(--color-primary) rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1 h-1 bg-(--color-primary) rounded-full animate-bounce [animation-delay:-0.15s]" />
              </div>
            </button>
          </div>
        </div>
    )
}