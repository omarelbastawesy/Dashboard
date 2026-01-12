import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Note({ notifications }) {
  return (
    <div className="flex flex-col gap-4">
      {notifications.map((note) => (
        <div
          key={note.id}
          className={`group relative p-6 rounded-[2rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 hover:border-(--color-primary)/30 transition-all duration-500 shadow-2xl overflow-hidden ${
            note.status === "unread" ? "ring-1 ring-(--color-primary)/30" : ""
          }`}
        >
          {/* Unread Glow Pulse */}
          {note.status === "unread" && (
            <div className="absolute top-0 left-0 w-1 h-full bg-(--color-primary) shadow-[0_0_15px_var(--color-primary)]" />
          )}

          <div className="flex items-start gap-6 relative z-10">
            <div
              className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center border ${note.bg} ${note.border} shadow-inner group-hover:scale-105 transition-transform duration-500`}
            >
              <FontAwesomeIcon
                icon={note.icon}
                className={`text-xl ${note.color} drop-shadow-[0_0_8px_currentColor]`}
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-black text-(--text-primary) tracking-tight group-hover:text-white transition-colors">
                    {note.title}
                  </h3>
                  <span
                    className={`text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-lg border ${note.bg} ${note.color} ${note.border}`}
                  >
                    {note.type}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-(--text-muted) tracking-widest">
                  {note.time}
                </span>
              </div>
              <p className="text-(--text-secondary) text-sm leading-relaxed max-w-[90%] font-medium">
                {note.message}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button className="text-[9px] font-black uppercase tracking-[0.3em] text-(--color-primary) hover:text-white transition-all">
                  Execute Response
                </button>
                <div className="w-1 h-1 bg-white/10 rounded-full" />
                <button className="text-[9px] font-black uppercase tracking-[0.3em] text-(--text-muted) hover:text-white transition-all">
                  Log Analysis
                </button>
              </div>
            </div>
          </div>

          {/* Hover Geometric Pattern Decoration */}
          <div className="absolute right-0 bottom-0 w-32 h-32 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none translate-x-1/2 translate-y-1/2">
            <div className="w-full h-full rounded-full border-[20px] border-white ring-[40px] ring-white/20" />
          </div>
        </div>
      ))}
    </div>
  );
}
