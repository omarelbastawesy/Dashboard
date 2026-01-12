import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faSignal, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Process() {
  return (
    <div className="space-y-8 flex flex-col gap-4">
      {/* Mini Stat 1 */}
      <div className="p-8 rounded-[2.5rem] bg-(--bg-card) border border-(--border-color) shadow-xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-linear-to-tr from-(--color-primary)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex items-center justify-between relative z-10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-(--text-muted) mb-1">
              Hardware Health
            </p>
            <h3 className="text-3xl font-black text-(--text-primary)">
              STABLE
            </h3>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-(--color-primary-soft) flex items-center justify-center border border-(--color-primary)/20 text-(--info) shadow-[0_0_20px_var(--color-primary-soft)] group-hover:scale-110 transition-transform duration-500">
            <FontAwesomeIcon icon={faMicrochip} className="text-2xl" />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4 relative z-10">
          <div className="flex-1 h-1.5 bg-(--divider-color) rounded-full overflow-hidden">
            <div className="h-full w-[92%] bg-linear-to-r from-(--info) to-(--color-primary) rounded-full shadow-[0_0_10px_var(--color-primary-soft)]" />
          </div>
          <span className="text-[10px] font-black text-(--info)">92%</span>
        </div>
      </div>

      {/* Mini Stat 2 */}
      <div className="p-8 rounded-[2.5rem] bg-(--bg-card) border border-(--border-color) shadow-xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-linear-to-tr from-(--color-primary)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="flex items-center justify-between relative z-10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-(--text-muted) mb-1">
              Signal Strength
            </p>
            <h3 className="text-3xl font-black text-(--text-primary)">99.8%</h3>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-(--color-primary)/10 flex items-center justify-center border border-(--color-primary)/20 text-(--color-primary) shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.2)] group-hover:scale-110 transition-transform duration-500">
            <FontAwesomeIcon
              icon={faSignal}
              className="text-2xl animate-pulse"
            />
          </div>
        </div>
        <div className="mt-6 flex gap-1 relative z-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${
                i < 4
                  ? "bg-(--color-primary) shadow-[0_0_8px_var(--color-primary)]"
                  : "bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions List */}
      <div className="p-6 rounded-[2rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-(--border-color) flex flex-col gap-4">
        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-(--text-muted) mb-2 px-2">
          Operational Tasks
        </h4>
        <button className="flex items-center justify-between p-4 rounded-2xl bg-(--bg-card) border border-(--border-color) hover:border-(--color-primary)/30 hover:bg-(--color-primary)/5 transition-all text-left group">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-(--warning) shadow-[0_0_8px_var(--warning)]" />
            <span className="text-[11px] font-black text-(--text-primary) tracking-widest uppercase italic">
              Node Reconstruction
            </span>
          </div>
          <FontAwesomeIcon
            icon={faClock}
            className="text-[10px] text-(--text-muted) group-hover:text-white transition-colors"
          />
        </button>
        <button className="flex items-center justify-between p-4 rounded-2xl bg-(--bg-card) border border-(--border-color) hover:border-(--color-primary)/30 hover:bg-(--color-primary)/5 transition-all text-left group">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-(--success) shadow-[0_0_8px_var(--success)]" />
            <span className="text-[11px] font-black text-(--text-primary) tracking-widest uppercase italic">
              Packet Purge
            </span>
          </div>
          <FontAwesomeIcon
            icon={faClock}
            className="text-[10px] text-(--text-muted) group-hover:text-white transition-colors"
          />
        </button>
      </div>
    </div>
  );
}
