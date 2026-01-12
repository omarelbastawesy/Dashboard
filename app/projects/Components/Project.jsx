import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faEllipsisVertical,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Project({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative p-8 rounded-[2.5rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-2xl hover:border-(--color-primary)/30 transition-all duration-700 overflow-hidden"
        >
          {/* Holographic Card Background */}
          <div className="absolute inset-0 bg-linear-to-br from-(--color-primary)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-(--color-primary)/5 rounded-full blur-[60px] group-hover:bg-(--color-primary)/10 transition-all duration-1000" />

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-(--color-primary)/20 to-indigo-600/20 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="text-2xl text-(--color-primary) drop-shadow-[0_0_8px_var(--color-primary)]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-(--text-primary) tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                        project.priority === "Critical"
                          ? "text-red-400 border-red-400/30 bg-red-400/5"
                          : project.priority === "High"
                          ? "text-orange-400 border-orange-400/30 bg-orange-400/5"
                          : "text-blue-400 border-blue-400/30 bg-blue-400/5"
                      }`}
                    >
                      {project.priority} Priority
                    </span>
                  </div>
                </div>
              </div>
              <button className="text-(--text-muted) hover:text-(--color-primary) transition-colors p-2">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>

            <p className="text-(--text-secondary) text-sm leading-relaxed mb-8 max-w-[80%] font-medium">
              {project.description}
            </p>

            {/* Progress Level */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="text-(--text-muted)">Nexus Completion</span>
                <span className="text-(--color-primary)">
                  {project.progress}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
                <div
                  className="h-full bg-linear-to-r from-(--color-primary) to-indigo-500 rounded-full shadow-[0_0_15px_var(--color-primary)] transition-all duration-1000 ease-out relative overflow-hidden"
                  style={{ width: `${project.progress}%` }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-6">
              <div className="flex -space-x-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-(--bg-card) bg-linear-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden hover:z-20 transition-all cursor-pointer shadow-lg"
                  >
                    <div className="text-[10px] font-bold text-white">
                      OP{i + 1}
                    </div>
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-(--bg-card) bg-linear-to-br from-(--color-primary)/20 to-indigo-500/20 flex items-center justify-center text-[10px] font-black text-(--color-primary) shadow-lg backdrop-blur-md">
                  +{project.members - 3}
                </div>
              </div>

              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-(--text-muted) hover:text-(--color-primary) transition-all group/btn">
                System Access
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="group-hover/btn:translate-x-2 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
