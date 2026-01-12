"use client";

import {
  faPaperPlane,
  faMicrophone,
  faPaperclip,
  faCircle,
  faMagnifyingGlass,
  faEllipsisVertical,
  faShieldHalved,
  faTerminal,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const comms = [
  {
    id: 1,
    name: "Command Center-01",
    status: "online",
    signal: "Strong",
    preview: "Awaiting final confirmation on Node-42 deployment protocols.",
    time: "12:45",
    unread: 3,
  },
  {
    id: 2,
    name: "Operator Vector",
    status: "away",
    signal: "Average",
    preview:
      "Telemetry data is showing significant drift in the aether cluster.",
    time: "Yesterday",
    unread: 0,
  },
  {
    id: 3,
    name: "Protocol Intelligence",
    status: "busy",
    signal: "Secure",
    preview:
      "System purge initiated. All local caches have been wiped successfully.",
    time: "8 Jan",
    unread: 1,
  },
];

const activeChat = [
  {
    id: 1,
    sender: "Command Center-01",
    text: "Uplink established. Ready for data injection.",
    time: "12:40",
    self: false,
  },
  {
    id: 2,
    sender: "You",
    text: "Proceed with package alpha-theta. Encrypt at layer 7.",
    time: "12:42",
    self: true,
  },
  {
    id: 3,
    sender: "Command Center-01",
    text: "Confirmed. Layer 7 encryption active. Node-42 is now synchronising.",
    time: "12:43",
    self: false,
  },
  {
    id: 4,
    sender: "Command Center-01",
    text: "Awaiting final confirmation on Node-42 deployment protocols.",
    time: "12:45",
    self: false,
  },
];

export default function Messages() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div className="h-[calc(100vh-2rem)] flex gap-8 p-4 animate-[fadeIn_0.5s_ease-out]">
      {/* Background Ambience Grid */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--color-primary-rgb),0.02)_0%,transparent_100%)] pointer-events-none -z-10" />

      {/* Comms Sidebar */}
      <div className="w-96 flex flex-col gap-6">
        <div className="p-6 rounded-[2rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col gap-6 flex-1 overflow-hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-(--text-primary) tracking-tight">
              Comms <span className="text-(--color-primary)">Portal</span>
            </h2>
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-(--color-primary) to-indigo-600 text-white flex items-center justify-center shadow-lg active:scale-95 transition-all cursor-pointer">
              <FontAwesomeIcon icon={faShieldHalved} className="text-sm" />
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center text-(--text-muted) group-focus-within:text-(--color-primary) transition-colors">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs" />
            </div>
            <input
              type="text"
              placeholder="Search active frequencies..."
              className="w-full bg-white/5 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-xs text-(--text-primary) placeholder:text-(--text-muted) focus:outline-hidden focus:border-(--color-primary)/30 transition-all"
            />
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar space-y-2 pr-1">
            {comms.map((comm) => (
              <div
                key={comm.id}
                onClick={() => setSelectedId(comm.id)}
                className={`p-4 rounded-2xl border border-transparent transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                  selectedId === comm.id
                    ? "bg-(--color-primary)/10 border-(--color-primary)/20 shadow-lg"
                    : "hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center">
                      <span className="text-xs font-black text-white">
                        {comm.name.split(" ")[0][0]}
                      </span>
                    </div>
                    <div
                      className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-(--bg-card) ${
                        comm.status === "online"
                          ? "bg-(--success)"
                          : comm.status === "busy"
                          ? "bg-red-500"
                          : "bg-orange-400"
                      } animate-pulse shadow-sm`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs font-black text-(--text-primary) truncate group-hover:text-white transition-colors">
                        {comm.name}
                      </h4>
                      <span className="text-[9px] font-bold text-(--text-muted)">
                        {comm.time}
                      </span>
                    </div>
                    <p className="text-[10px] text-(--text-secondary) truncate font-medium">
                      {comm.preview}
                    </p>
                  </div>
                </div>
                {comm.unread > 0 && selectedId !== comm.id && (
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 bg-(--color-primary) rounded-full flex items-center justify-center text-[8px] font-black text-white shadow-[0_0_10px_rgba(var(--color-primary-rgb),0.5)]">
                    {comm.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal Interface */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex-1 rounded-[2.5rem] bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col relative">
          {/* Terminal Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5 backdrop-blur-md relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-(--color-primary)/10 border border-(--color-primary)/20 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faTerminal}
                  className="text-(--color-primary) drop-shadow-[0_0_8px_var(--color-primary)]"
                />
              </div>
              <div>
                <h3 className="text-lg font-black text-(--text-primary) tracking-tight">
                  Terminal{" "}
                  <span className="text-(--color-primary)">Matrix</span>
                </h3>
                <div className="flex items-center gap-2 mt-0.5">
                  <FontAwesomeIcon
                    icon={faWifi}
                    className="text-[9px] text-(--success)"
                  />
                  <span className="text-[8px] font-black uppercase tracking-widest text-(--text-muted)">
                    Security Encryption: Active // Strength: Strong
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-(--text-muted) hover:text-(--text-primary) transition-all flex items-center justify-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-(--text-muted) hover:text-(--text-primary) transition-all flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="text-xs"
                />
              </button>
            </div>
          </div>

          {/* Transmission Log */}
          <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar relative z-10">
            {activeChat.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.self ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] group ${
                    msg.self ? "items-end" : "items-start"
                  } flex flex-col gap-2`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    {!msg.self && (
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-(--color-primary)">
                        Comms Hub
                      </span>
                    )}
                    <span className="text-[8px] font-bold text-(--text-muted) opacity-0 group-hover:opacity-100 transition-opacity">
                      Timestamp: {msg.time} // ID: 0x{msg.id}f7a
                    </span>
                    {msg.self && (
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-indigo-400">
                        Node Uplink
                      </span>
                    )}
                  </div>
                  <div
                    className={`p-5 rounded-3xl text-sm font-medium leading-relaxed relative ${
                      msg.self
                        ? "bg-linear-to-br from-(--color-primary) to-indigo-600 text-white rounded-tr-sm shadow-xl"
                        : "bg-white/5 border border-white/5 text-(--text-secondary) rounded-tl-sm hover:border-white/10 transition-colors"
                    }`}
                  >
                    {msg.text}
                    <div
                      className={`absolute top-0 ${
                        msg.self
                          ? "-right-1.5 border-t-[10px] border-t-indigo-600 border-r-[10px] border-r-transparent"
                          : "-left-1.5 border-t-[10px] border-t-white/5 border-l-[10px] border-l-transparent"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-4 py-8">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-(--text-muted)">
                Secure Data Link Established
              </span>
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />
            </div>
          </div>

          {/* Input Module */}
          <div className="p-6 bg-white/5 backdrop-blur-2xl relative z-10 border-t border-white/5">
            <div className="flex items-center gap-4 bg-(--bg-card)/40 border border-white/10 rounded-2xl p-2 pl-6 focus-within:border-(--color-primary)/30 transition-all">
              <input
                type="text"
                placeholder="Enter command or message transmission..."
                className="flex-1 bg-transparent py-4 text-sm text-(--text-primary) placeholder:text-(--text-muted) focus:outline-hidden"
              />
              <div className="flex gap-2 pr-2">
                <button className="w-12 h-12 rounded-xl text-(--text-muted) hover:text-(--color-primary) hover:bg-white/5 transition-all flex items-center justify-center">
                  <FontAwesomeIcon icon={faPaperclip} />
                </button>
                <button className="w-12 h-12 rounded-xl text-(--text-muted) hover:text-(--color-primary) hover:bg-white/5 transition-all flex items-center justify-center">
                  <FontAwesomeIcon icon={faMicrophone} />
                </button>
                <button className="w-12 h-12 rounded-xl bg-linear-to-br from-(--color-primary) to-indigo-600 text-white shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.3)] hover:shadow-[0_0_25px_rgba(var(--color-primary-rgb),0.5)] transition-all active:scale-95 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Terminal Pattern Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
      </div>
    </div>
  );
}
