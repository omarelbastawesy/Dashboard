import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faDatabase, faShieldHalved } from "@fortawesome/free-solid-svg-icons";

export default function Edit({
  modules,
  activeModule,
}) {
  return (
    <div className="flex-1">
      <div className="bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden h-full">
        {/* Holographic Header Bar */}
        <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-[1.5rem] bg-linear-to-br from-(--color-primary)/20 to-indigo-600/20 border border-white/10 flex items-center justify-center text-(--color-primary) drop-shadow-[0_0_10px_var(--color-primary)]">
              <FontAwesomeIcon
                icon={modules.find((m) => m.id === activeModule).icon}
                className="text-2xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-black text-(--text-primary) tracking-tight">
                {modules.find((m) => m.id === activeModule).name} Tuning
              </h2>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-(--text-muted)">
                Secure Channel 0xAF22 // Status: Authorised
              </span>
            </div>
          </div>
          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-(--text-muted) hover:text-(--color-primary) hover:border-(--color-primary)/30 transition-all">
            Reset Node
          </button>
        </div>

        {/* Dynamic Content Based on Active Module (Demo with Profile/Identity) */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-(--text-muted) pl-2">
                Operative Callsign
              </label>
              <input
                type="text"
                defaultValue="Operator Alpha"
                className="w-full bg-white/5 border border-white/5 rounded-[1.2rem] py-4 px-6 text-sm font-bold text-white focus:outline-hidden focus:border-(--color-primary)/30 transition-all"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-(--text-muted) pl-2">
                Security ID Node
              </label>
              <div className="w-full bg-white/5 border border-white/5 rounded-[1.2rem] py-4 px-6 text-sm font-bold text-(--text-muted) flex justify-between items-center">
                OP-55219-X88
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className="text-(--color-primary)"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40 border-l-2 border-(--color-primary) pl-6">
              Module Protocols
            </h4>

            <div className="space-y-4">
              {/* Custom Animated Toggle 1 */}
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20">
                    <FontAwesomeIcon icon={faBolt} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-white">
                      Quantum Overclock
                    </p>
                    <p className="text-[10px] font-bold text-(--text-muted)">
                      Unleash maximum deployment speeds for critical operations.
                    </p>
                  </div>
                </div>
                <button
                  className={`w-14 h-7 rounded-full transition-all duration-500 p-1 relative overflow-hidden bg-white/10`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-xl transition-all duration-500 transform translate-x-0`}
                  />
                </button>
              </div>

              {/* Custom Animated Toggle 2 */}
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-all">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-(--success)/10 text-(--success) flex items-center justify-center border border-(--success)/20">
                    <FontAwesomeIcon icon={faDatabase} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-white">
                      Neural Sync Analytics
                    </p>
                    <p className="text-[10px] font-bold text-(--text-muted)">
                      Real-time telemetry logging to decentralised storage
                      clusters.
                    </p>
                  </div>
                </div>
                <button
                  className={`w-14 h-7 rounded-full transition-all duration-500 p-1 relative bg-white/10`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-xl transition-all duration-500 transform translate-x-0`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-10 flex justify-end gap-4">
            <button className="px-8 py-4 text-xs font-black uppercase tracking-widest text-(--text-muted) hover:text-white transition-all">
              Discard Changes
            </button>
            <button className="px-10 py-4 bg-linear-to-r from-(--color-primary) to-indigo-600 text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.5)] active:scale-95 transition-all">
              Initialize Protocol
            </button>
          </div>
        </div>

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-(--color-primary)/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
