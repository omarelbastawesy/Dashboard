import {
  faCircleInfo,
  faBook,
  faCode,
  faTriangleExclamation,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Component
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import Categories from "./components/Categories";
import Support from "./components/Support";

const categories = [
  {
    id: 1,
    name: "Neural Onboarding",
    icon: faRocket,
    color: "text-(--color-primary)",
    desc: "Initialize your operative workspace and matrix connection.",
  },
  {
    id: 2,
    name: "System Archives",
    icon: faBook,
    color: "text-indigo-400",
    desc: "Access full documentation on operational flow and protocols.",
  },
  {
    id: 3,
    name: "Terminal API",
    icon: faCode,
    color: "text-cyan-400",
    desc: "Integrate decentralised data streams via our core SDK.",
  },
  {
    id: 4,
    name: "Incident Response",
    icon: faTriangleExclamation,
    color: "text-red-500",
    desc: "Protocols for breaches, latency drift, and engine failure.",
  },
];

export default function Help() {
  return (
    <Container>
      <div className="flex flex-col gap-6 justify-between h-full">
        <Header
          head="Knowledge"
          blueHead="Matrix"
          icon={faCircleInfo}
          info="Access the decentralised archive nodes for system troubleshooting,
          protocol documentation, and operative support."
          notice=""
        >
          <button className="flex items-center gap-3 px-6 py-3 bg-linear-to-r from-(--color-primary) to-indigo-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.5)] transition-all active:scale-95 group">
            <FontAwesomeIcon
              icon={faRocket}
              className="group-hover:rotate-90 transition-transform duration-500"
            />
            Put Here an Element
          </button>
        </Header>

        <Categories categories={categories} />

        <Support />
      </div>
    </Container>
  );
}
