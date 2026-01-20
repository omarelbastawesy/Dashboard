import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClock,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function Status() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="p-6 rounded-[2rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-xl flex items-center justify-between group overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-br from-(--color-primary)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-(--text-muted) mb-1">
            Operational Health
          </p>
          <p className="text-3xl font-black text-(--text-primary)">
            98.4<span className="text-sm text-(--success)">%</span>
          </p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-(--success)/10 flex items-center justify-center border border-(--success)/20">
          <FontAwesomeIcon icon={faCheckCircle} className="text-(--success)" />
        </div>
      </div>
      <div className="p-6 rounded-[2rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-xl flex items-center justify-between group overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-(--text-muted) mb-1">
            Avg Deployment Speed
          </p>
          <p className="text-3xl font-black text-(--text-primary)">
            12.4<span className="text-sm text-indigo-400">ms</span>
          </p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
          <FontAwesomeIcon icon={faClock} className="text-indigo-400" />
        </div>
      </div>
      <div className="p-6 rounded-[2rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-xl flex items-center justify-between group overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-(--text-muted) mb-1">
            Alert Matrix
          </p>
          <p className="text-3xl font-black text-(--text-primary)">02</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="text-red-500"
          />
        </div>
      </div>
    </div>
  );
}
