import { faServer } from "@fortawesome/free-solid-svg-icons";

// components
import Container from "../components/Container/Container";
import Analytics from "./components/Analytics";
import Process from "./components/Process";
import Overview from "./components/Overview";
import Header from "../components/Header/Header";

export default function Dashboard() {
  return (
    <Container>
      <div className="flex flex-col gap-4 justify-between h-full">
        <Header
          head="Control"
          blueHead="Center"
          icon={faServer}
          info="System Status"
          notice="Optimal // All Nodes Online"
        >
          <div className="flex items-center gap-3 bg-(--bg-card)/40 backdrop-blur-3xl border border-(--border-color) p-2 rounded-2xl shadow-xl">
            <div className="px-4 py-2 text-center border-r border-(--divider-color)">
              <p className="text-[8px] font-black uppercase tracking-widest text-(--text-muted) mb-1">
                Global Latency
              </p>
              <p className="text-sm font-black text-(--text-primary)">12ms</p>
            </div>
            <div className="px-4 py-2 text-center border-r border-(--divider-color)">
              <p className="text-[8px] font-black uppercase tracking-widest text-(--text-muted) mb-1">
                Active Uplinks
              </p>
              <p className="text-sm font-black text-(--text-primary)">2.4k</p>
            </div>
            <div className="px-4 py-2 text-center">
              <p className="text-[8px] font-black uppercase tracking-widest text-(--text-muted) mb-1">
                Core Temp
              </p>
              <p className="text-sm font-black text-(--success)">32°C</p>
            </div>
          </div>
        </Header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Analytics />

          <Process />
        </div>

        <Overview />
      </div>
    </Container>
  );
}
