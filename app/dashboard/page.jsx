"use client";
import { useUser } from "../components/GetUser/UserPovider";
import { faServer } from "@fortawesome/free-solid-svg-icons";

// components
import Container from "../components/Container/Container";
import Analytics from "./components/Analytics";
import Process from "./components/Process";
import Overview from "./components/Overview";
import Header from "../components/Header/Header";
import Theme from "../components/Theme/Theme";

export default function Dashboard() {
  const { user, loading } = useUser();
  console.log(user);
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
          <div className="flex items-center justify-between gap-3 bg-(--bg-card)/40 backdrop-blur-3xl border border-(--border-color) p-2 rounded-2xl shadow-xl">
            <div className="sm:px-4 sm:py-2 py-1 px-2 text-center border-r border-(--divider-color)">
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-(--text-muted) mb-1">
                Hi
              </p>
              <p className="text-sm sm:text-base font-black text-(--text-primary)">
                {user.name}
              </p>
            </div>

            <Theme />

            <div className="sm:px-4 sm:py-2 py-1 px-2 text-center">
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-(--text-muted) mb-1">
                Core Temp
              </p>
              <p className="text-sm sm:text-base font-black text-(--success)">
                32°C
              </p>
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
