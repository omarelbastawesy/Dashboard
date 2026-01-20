import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faEllipsisVertical,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Project({ projects }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log("i REMOVE THE PAGE ");

  const onDelete = (name) => {
    const res = fetch(`/api/projects`, {
      method: "DELETE",
      body: JSON.stringify({ name }),
    });
    if (res.ok) {
      fetchProjects();
    }
  };

  const toggleMenu = (e, id) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group overflow-hidden relative p-8 rounded-[2.5rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-2xl hover:border-(--color-primary)/30 transition-all duration-700"
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
                  <Link href={`projects/${project._id}`}>
                    <h3 className="text-xl cursor-pointer font-black text-(--text-primary) tracking-tight">
                      {project.name}
                    </h3>
                  </Link>
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
              <div className="relative">
                <button
                  onClick={(e) => toggleMenu(e, project.id)}
                  className="w-8 h-8 rounded-full flex cursor-pointer items-center justify-center hover:bg-white/10 text-(--text-muted) hover:text-(--color-primary) transition-all"
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>

                {activeMenu === project.id && (
                  <div
                    ref={menuRef}
                    className="absolute right-0 top-10 w-32 bg-(--bg-card) border border-white/10 rounded-xl shadow-xl overflow-hidden z-[100] animate-[fadeIn_0.2s_ease-out]"
                  >
                    <button className="w-full cursor-pointer text-left px-4 py-3 text-xs font-bold text-(--text-secondary) hover:text-(--color-primary) hover:bg-white/5 flex items-center gap-2 transition-colors">
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                    <button
                      onClick={() => onDelete(project.name)}
                      className="w-full cursor-pointer text-left px-4 py-3 text-xs font-bold text-(--error) hover:bg-(--error)/10 flex items-center gap-2 transition-colors"
                    >
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            <p className="text-(--text-secondary) text-sm leading-relaxed mb-8 max-w-[80%] font-medium">
              {project.description}
            </p>

            {/* Progress Level */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="text-(--text-muted)">
                  {(() => {
                    if (!project.endDate) return "No Deadline";
                    const end = new Date(project.endDate);
                    const now = new Date();
                    end.setHours(0, 0, 0, 0);
                    now.setHours(0, 0, 0, 0);
                    const dayLeft = end - now;
                    const diffDays = Math.ceil(dayLeft / (1000 * 60 * 60 * 24));

                    if (diffDays < 0)
                      return `Expired at ${end.toLocaleDateString()}`;
                    if (diffDays === 0) return "Today";
                    return `${diffDays} Days Left`;
                  })()}
                </span>
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

            {/* <div className="flex items-center justify-between border-t border-white/5 pt-6">
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
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
