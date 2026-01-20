import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Categories({categories}) {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group p-10 rounded-[2.5rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 hover:border-(--color-primary)/30 transition-all duration-700 shadow-2xl overflow-hidden relative cursor-pointer"
            >
              <div className="flex gap-8 relative z-10">
                <div
                  className={`w-20 h-20 rounded-3xl bg-linear-to-br from-slate-900 to-black border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.2)] transition-all duration-500`}
                >
                  <FontAwesomeIcon
                    icon={cat.icon}
                    className={`text-3xl ${cat.color} drop-shadow-[0_0_10px_currentColor]`}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black text-(--text-primary) tracking-tight mb-3 group-hover:text-white transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-(--text-secondary) text-sm font-medium leading-relaxed mb-6">
                    {cat.desc}
                  </p>
                  <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-(--color-primary) hover:text-white transition-all group/link">
                    Access Database
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="group-hover/link:translate-x-2 transition-transform"
                    />
                  </button>
                </div>
              </div>

              {/* Geometric Background Element */}
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none">
                <FontAwesomeIcon icon={cat.icon} className="text-8xl" />
              </div>
            </div>
          ))}
        </div>
    );
}