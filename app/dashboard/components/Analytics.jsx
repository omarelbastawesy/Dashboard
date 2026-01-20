import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faArrowUp,
  faArrowDown,
  faBolt,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function Analytics() {
  return (
    <div className="lg:col-span-2  sm:p-10 p-4 sm:rounded-[3rem] rounded-lg bg-(--bg-card)/40 backdrop-blur-3xl border border-(--border-color) shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <FontAwesomeIcon
          icon={faChartPie}
          className="text-9xl text-(--color-primary)"
        />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-(--text-primary) tracking-tight mb-2">
              Operational Analytics
            </h2>
            <p className="text-xs sm:text-sm font-medium text-(--text-secondary)">
              Real-time data throughput across all decentralised clusters.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-(--color-primary)/10 border border-(--color-primary)/20 rounded-lg text-[9px] sm:text-[10px] font-black text-(--color-primary) uppercase tracking-widest">
              Live Feed
            </span>
          </div>
        </div>

        {/* Fake Graph Visualization */}
        <div className="h-64 w-full flex items-end gap-2 mb-8 sm:px-4 px-2">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center gap-2 group/bar cursor-pointer"
            >
              <div
                className="w-full bg-linear-to-t from-(--color-primary)/20 to-(--color-primary) rounded-t-lg transition-all duration-1000 group-hover:shadow-[0_0_20px_var(--color-primary)] relative overflow-hidden shadow-inner"
                style={{ height: `${h}%` }}
              >
                <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity" />
              </div>
              <span className="text-[8px] sm:text-[10px] font-black text-(--text-muted) group-hover:text-white transition-colors uppercase">
                {8 + i}:00
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 sm:gap-6 gap-4 sm:pt-8 pt-6 border-t border-white/5">
          <div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-(--text-muted) mb-2">
              Network Traffic
            </p>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faArrowUp}
                className="text-(--success) text-xs"
              />
              <span className="text-lg sm:text-xl font-black text-(--text-primary)">
                4.2{" "}
                <span className="text-xs text-(--text-secondary)">GB/s</span>
              </span>
            </div>
          </div>
          <div>
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-(--text-muted) mb-2">
              Packet Loss
            </p>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="text-(--success) text-xs"
              />
              <span className="text-lg sm:text-xl font-black text-(--text-primary)">
                0.002 <span className="text-xs text-(--text-secondary)">%</span>
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-(--text-muted) mb-2">
              Neural Load
            </p>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faBolt}
                className="text-(--warning) text-xs"
              />
              <span className="text-lg sm:text-xl font-black text-(--text-primary)">
                84.1 <span className="text-xs text-(--text-secondary)">%</span>
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-(--text-muted) mb-2">
              Encryption
            </p>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-(--info) text-xs"
              />
              <span className="text-lg sm:text-xl font-black text-(--text-primary)">
                AES-512
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
