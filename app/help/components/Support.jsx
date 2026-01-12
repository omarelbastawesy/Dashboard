import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHeadset } from "@fortawesome/free-solid-svg-icons";

export default function Support() {
    return (
        <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-linear-to-br from-indigo-900/20 to-slate-900/40 backdrop-blur-3xl border border-(--color-primary)/20 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="w-3 h-3 bg-(--success) rounded-full animate-pulse shadow-[0_0_10px_var(--success)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-(--success)">
                  Direct Uplink Active
                </span>
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight mb-4">
                Operative Support Node
              </h2>
              <p className="text-(--text-secondary) font-medium text-sm max-w-md">
                Our high-level protocol engineers are ready to assist with any
                operational failures or matrix desyncs.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              <button className="flex items-center justify-center gap-4 px-10 py-5 bg-white text-(--bg-card) font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-(--color-primary) hover:text-white transition-all active:scale-95 shadow-xl">
                <FontAwesomeIcon icon={faComments} />
                Initiate Comms
              </button>
              <button className="flex items-center justify-center gap-4 px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/10 transition-all">
                <FontAwesomeIcon icon={faHeadset} />
                Voice Uplink
              </button>
            </div>
          </div>

          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
        </div>
    );
}