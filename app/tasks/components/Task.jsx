import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faClock,
  faFlag,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

export default function Task({ tasks }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {["To Do", "In Progress", "Review", "Done"].map((column) => (
        <div key={column} className="flex flex-col gap-6">
          <div className="flex items-center justify-between px-4 py-2 bg-white/5 rounded-xl border border-white/5 backdrop-blur-md">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-(--text-muted)">
              {column}
            </h2>
            <span className="text-[10px] font-black text-(--color-primary) bg-(--color-primary)/10 px-2 py-0.5 rounded-lg border border-(--color-primary)/20">
              {tasks.filter((t) => t.status === column).length}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {tasks
              .filter((t) => t.status === column)
              .map((task) => (
                <div
                  key={task.name}
                  className="group cursor-pointer p-4 rounded-3xl bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 hover:border-(--color-primary)/30 transition-all duration-500 shadow-xl active:cursor-grabbing hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Subtle Background Shimmer */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-transparent via-(--color-primary)/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700" />

                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-black text-white px-2 py-1 rounded bg-white/5 border border-white/10 tracking-widest">
                      {task.projectId}
                    </span>
                    <FontAwesomeIcon
                      icon={task.priority === "Critical" ? faFire : faFlag}
                      className={`text-xs ${
                        task.priority === "Critical"
                          ? "text-red-500 animate-pulse"
                          : "text-(--text-muted)"
                      }`}
                    />
                  </div>
                  <Link href={`/tasks/${task.name}`}>
                    <h3 className="text-sm font-black text-(--text-primary) mb-1 group-hover:text-white transition-colors">
                      {task.name}
                    </h3>
                  </Link>
                  <p className="text-[10px] font-bold text-(--text-muted) tracking-wide mb-6">
                    {task.category}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-linear-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-[8px] font-black text-white">
                        {task.projectId.toString().charAt(0)}
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-(--text-muted)">
                        {task.projectId}
                      </span>
                    </div>
                    <div
                      className={`flex items-center gap-1 text-[8px] font-black uppercase tracking-widest ${
                        task.status === "Done"
                          ? "text-(--success)"
                          : "text-orange-400"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={task.status === "Done" ? faCircleCheck : faClock}
                        className="text-[10px]"
                      />
                      {task.time}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
