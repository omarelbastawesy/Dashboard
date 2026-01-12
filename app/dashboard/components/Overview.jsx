import { faBolt, faCubes, faSignal, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Overview() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            name: "Project Matrix",
            icon: faCubes,
            color: "text-(--color-primary)",
            link: "/projects",
            desc: "Active Operational Nodes",
          },
          {
            name: "Operational Flow",
            icon: faBolt,
            color: "text-(--warning)",
            link: "/tasks",
            desc: "Real-time Command Queue",
          },
          {
            name: "Signal Intel",
            icon: faSignal,
            color: "text-(--error)",
            link: "/notifications",
            desc: "Critical Alert Stream",
          },
          {
            name: "Comms Uplink",
            icon: faShieldHalved,
            color: "text-(--info)",
            link: "/messages",
            desc: "Secure Terminal Link",
          },
        ].map((mod) => (
          <Link
            key={mod.name}
            href={mod.link}
            className="p-8 rounded-3xl bg-(--bg-card)/40 backdrop-blur-3xl border border-(--border-color) hover:border-(--color-primary)/40 transition-all duration-500 group relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-linear-to-br from-(--color-primary)/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div
              className={`w-14 h-14 rounded-2xl border border-(--border-color) flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:border-(--color-primary)/30 transition-all duration-500`}
            >
              <FontAwesomeIcon
                icon={mod.icon}
                className={`text-xl ${mod.color} drop-shadow-[0_0_8px_currentColor]`}
              />
            </div>
            <h3 className="text-xl font-black text-(--text-primary) tracking-tight mb-2 group-hover:text-(--color-primary) transition-colors">
              {mod.name}
            </h3>
            <p className="text-[10px] font-bold text-(--text-muted) uppercase tracking-widest leading-relaxed">
              {mod.desc}
            </p>
          </Link>
        ))}
      </div>
    );
}