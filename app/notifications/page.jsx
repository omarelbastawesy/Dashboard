import {
  faBell,
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo,
  faRadiation,
  faTrashAlt,
  faSliders,
  faCheckDouble,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// components
import Container from "../components/Container/Container";
import Note from "./components/Note";
import Header from "../components/Header/Header";

const notifications = [
  {
    id: 1,
    type: "Critical",
    title: "Primary Core Breach Protocol",
    message:
      "Unauthorized access detected on Node-42 in Sector 7. Engagement protocols initiated.",
    time: "2m ago",
    status: "unread",
    icon: faRadiation,
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/30",
  },
  {
    id: 2,
    type: "System",
    title: "Deployment Successful",
    message:
      "Nova Protocol v2.4.1 has been successfully synchronised across all decentralized clusters.",
    time: "45m ago",
    status: "read",
    icon: faCircleCheck,
    color: "text-(--success)",
    bg: "bg-(--success)/10",
    border: "border-(--success)/30",
  },
  {
    id: 3,
    type: "Intel",
    title: "Operational Report Ready",
    message:
      "Weekly matrix performance analytics have been compiled and are available for review.",
    time: "2h ago",
    status: "unread",
    icon: faCircleInfo,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
  },
  {
    id: 4,
    type: "Alert",
    title: "Latency Threshold Reached",
    message:
      "Signal delay in Sub-Level 3 exceeds 45ms. Automated rerouting in progress.",
    time: "5h ago",
    status: "read",
    icon: faCircleExclamation,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
  },
];

export default function Notifications() {
  return (
    <Container>
      <div className="flex flex-col gap-6 justify-between h-full">
        <Header
          head="Operational"
          blueHead="Flow"
          icon={faSatelliteDish}
          info="Manage and synchronize system tasks across the decentralised matrix."
          notice=""
        >
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-(--bg-card)/40 backdrop-blur-xl border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-(--text-muted) hover:text-(--text-primary) hover:border-white/20 transition-all flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckDouble} className="text-xs" />
              Sync All Nodes
            </button>
            <button className="px-6 py-3 bg-(--bg-card)/40 backdrop-blur-xl border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-(--text-muted) hover:text-red-500 hover:border-red-500/20 transition-all flex items-center gap-2">
              <FontAwesomeIcon icon={faTrashAlt} className="text-xs" />
              Purge Logs
            </button>
            <button className="w-12 h-12 bg-linear-to-br from-(--color-primary) to-indigo-600 text-white rounded-2xl shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.5)] transition-all flex items-center justify-center group active:scale-95">
              <FontAwesomeIcon
                icon={faSliders}
                className="group-hover:rotate-90 transition-transform duration-500"
              />
            </button>
          </div>
        </Header>

        {/* Main Signal Feed */}
        <Note notifications={notifications} />
      </div>
    </Container>
  );
}
