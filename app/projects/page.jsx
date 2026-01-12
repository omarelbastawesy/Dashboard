import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChartLine } from "@fortawesome/free-solid-svg-icons";

// components
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import Status from "./Components/Status";
import Project from "./Components/Project";

const projects = [
  {
    id: 1,
    title: "Quantum Nexus",
    description:
      "Distributed computing architecture for neural network optimization.",
    status: "Active",
    progress: 74,
    members: 12,
    date: "Jan 12, 2026",
    priority: "High",
  },
  {
    id: 2,
    title: "Nova Protocol",
    description:
      "Next-gen authentication layer with biometric encryption nodes.",
    status: "In Review",
    progress: 92,
    members: 8,
    date: "Jan 08, 2026",
    priority: "Critical",
  },
  {
    id: 3,
    title: "Aether Grid",
    description:
      "Decentralized energy management system using blockchain lattice.",
    status: "Paused",
    progress: 45,
    members: 15,
    date: "Jan 15, 2026",
    priority: "Medium",
  },
  {
    id: 4,
    title: "Titan Core",
    description:
      "High-performance database engine for real-time telemetry processing.",
    status: "Active",
    progress: 68,
    members: 20,
    date: "Jan 20, 2026",
    priority: "High",
  },
  {
    id: 5,
    title: "Titan Core",
    description:
      "High-performance database engine for real-time telemetry processing.",
    status: "Active",
    progress: 68,
    members: 20,
    date: "Jan 20, 2026",
    priority: "High",
  },
  {
    id: 6,
    title: "Titan Core",
    description:
      "High-performance database engine for real-time telemetry processing.",
    status: "Active",
    progress: 68,
    members: 20,
    date: "Jan 20, 2026",
    priority: "High",
  },
];

export default function Projects() {
  return (
    <Container>
      <div className="flex flex-col gap-6 justify-between h-full">
        <Header
          head="Project"
          blueHead="Matrix"
          icon={faChartLine}
          info="Orchestrating"
          notice="active operational nodes"
        >
          <button className="flex items-center gap-3 px-6 py-3 bg-linear-to-r from-(--color-primary) to-indigo-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.5)] transition-all active:scale-95 group">
            <FontAwesomeIcon
              icon={faPlus}
              className="group-hover:rotate-90 transition-transform duration-500"
            />
            Initialize New Node
          </button>
        </Header>

        {/* Stats Summary Area (Optional but looks cool) */}
        <Status />

        {/* Grid Matrix */}
        <Project projects={projects} />
      </div>
    </Container>
  );
}
