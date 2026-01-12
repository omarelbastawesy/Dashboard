import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faUsers,
  faListCheck,
  faGlobe,
  faRocket,
  faCode,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../../public/hero.png";

export default function Landing() {
  const features = [
    {
      icon: faShieldHalved,
      title: "Secure Authentication",
      description:
        "Robust login and signup flows with Zod validation and session management.",
      color: "text-blue-500",
    },
    {
      icon: faUsers,
      title: "Role-Based Access",
      description:
        "Customized experiences for both Employees and Managers with protected routes.",
      color: "text-indigo-500",
    },
    {
      icon: faListCheck,
      title: "Task Management",
      description:
        "Efficiently track projects and tasks with real-time status updates.",
      color: "text-cyan-500",
    },
    {
      icon: faGlobe,
      title: "Multilingual Support",
      description:
        "Full i18n support with dynamic language switching across the application.",
      color: "text-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-(--bg-main) text-(--text-primary) flex flex-col items-center overflow-x-hidden">
      <div className="w-full  max-w-7xl mx-auto px-4 sm:px-6  space-y-20 lg:space-y-32">
        {/* Hero Section */}
        <section className="relative pt-8 lg:pt-12 pb-16 lg:pb-20 flex flex-col items-center">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 inset-x-0 h-64 lg:h-96 -z-10 bg-linear-to-b from-(--color-primary-soft) to-transparent opacity-30" />
          <div className="absolute top-10 lg:top-20 right-[-5%] lg:right-[-10%] w-64 lg:w-96 h-64 lg:h-96 bg-blue-400/10 rounded-full blur-[80px] lg:blur-[100px] -z-10 animate-pulse" />
          <div className="absolute bottom-5 lg:bottom-10 left-[-5%] lg:left-[-10%] w-64 lg:w-96 h-64 lg:h-96 bg-indigo-400/10 rounded-full blur-[80px] lg:blur-[100px] -z-10" />

          <div className="w-full lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className=" flex flex-col gap-4 pb-4 text-center lg:text-left space-y-6 lg:space-y-8">
              <div>
                <span className="inline-flex items-center px-3 py-1 lg:px-4 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-semibold tracking-wider uppercase bg-(--color-primary-soft) text-(--color-primary) mb-4 lg:mb-6 shadow-sm border border-(--color-primary)/20">
                  🚀 Now in Technical Preview
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1]">
                  Scale Your <br className="hidden sm:block" />
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-(--color-primary) to-indigo-600">
                    Business Flow
                  </span>
                </h1>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-(--text-secondary) max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                The all-in-one management suite designed for modern teams. Built
                with Next.js 16 for unmatched speed and reliability.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 lg:gap-5">
                <Link
                  href="/login"
                  className="group relative px-8 lg:px-12 py-4 lg:py-5 bg-linear-to-br from-(--color-primary) to-indigo-600 text-white font-black rounded-xl lg:rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] hover:shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.5)] overflow-hidden text-center sm:w-auto w-full flex items-center justify-center gap-3 ring-4 ring-(--color-primary)/10 hover:ring-(--color-primary)/30"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />

                  <span className="relative flex items-center justify-center gap-3 tracking-wide">
                    Launch App
                    <div className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-xs group-hover:translate-x-0.5 transition-transform"
                      />
                    </div>
                  </span>
                </Link>
                <a
                  href="#features"
                  className="px-8 lg:px-12 py-4 lg:py-5 bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-(--border-color) text-(--text-primary) font-black rounded-xl lg:rounded-2xl hover:bg-(--color-primary-soft) hover:border-(--color-primary)/30 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 sm:w-auto w-full group/btn"
                >
                  Learn More
                  <div className="w-1.5 h-1.5 rounded-full bg-(--color-primary) group-hover/btn:scale-150 transition-transform" />
                </a>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-(--color-primary) to-indigo-500 rounded-3xl lg:rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[4/3] rounded-3xl lg:rounded-4xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-black/5 bg-(--bg-card)">
                <Image
                  src={image}
                  alt="Dashboard Mockup"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section
          id="features"
          className="w-full py-8 lg:py-12 flex flex-col items-center justify-between gap-6"
        >
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20 space-y-3 lg:space-y-4">
            <h2 className="text-(--color-primary) font-bold tracking-widest uppercase text-xs lg:text-sm">
              Capabilities
            </h2>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Powerful tools, simple interface.
            </p>
            <p className="text-(--text-secondary) text-base lg:text-lg">
              Everything you need to manage your projects, teams, and tasks in
              one unified dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6  lg:p-10 bg-(--bg-card) border border-(--border-color) rounded-2xl lg:rounded-4xl hover:border-(--color-primary) transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group flex flex-col items-center justify-center gap-3"
              >
                <div
                  className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 lg:mb-8 shadow-inner bg-white/50 group-hover:bg-(--color-primary-soft) transition-colors`}
                >
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className={`text-xl lg:text-2xl ${feature.color}`}
                  />
                </div>
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">
                  {feature.title}
                </h3>
                <p className="text-(--text-secondary) leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="w-full py-24 lg:py-40 relative overflow-hidden lg:overflow-visible">
          {/* Holographic Background Grid - Masked for premium feel */}
          <div
            className="absolute inset-x-0 top-0 bottom-0 -z-20 opacity-[0.06] dark:opacity-[0.1]"
            style={{
              backgroundImage:
                "linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              animation: "grid-flow 20s linear infinite",
              maskImage:
                "radial-gradient(circle at center, black, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black, transparent 80%)",
            }}
          ></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-(--bg-card)/60 backdrop-blur-md p-8 sm:p-12 md:p-16 lg:p-24 rounded-[3rem] lg:rounded-[5rem] border border-(--border-color) relative group transition-all duration-700 hover:shadow-[0_0_100px_rgba(var(--color-primary-rgb),0.1)]">
              {/* Dynamic Background Glows */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-(--color-primary-soft) rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-(--color-primary) group-hover:opacity-20 transition-all duration-1000" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-all duration-1000" />

              <div className="flex flex-col gap-20 items-center justify-between lg:flex-row relative z-10">
                <div className="flex flex-col gap-8 items-start">
                  <div className="inline-flex text-[var(--text-inverse)] items-center gap-2 p-1.5 pr-4 bg-gray-900 dark:bg-gray-800 rounded-full text-[10px] lg:text-sm font-black shadow-2xl ring-1 ring-white/20">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-[10px] font-bold shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse">
                      TOP
                    </span>
                    Engineered for Performance
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-4xl w-full sm:text-6xl lg:text-7xl font-black leading-none tracking-tighter">
                      Ultimate <br />
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-primary) to-indigo-500">
                        Tech Stack.
                      </span>
                    </h2>
                    <p className="text-base w-full lg:text-xl text-(--text-secondary) leading-relaxed max-w-md font-medium italic">
                      Pushing the boundaries of what's possible with modern
                      architecture.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 w-full sm:w-auto">
                    {[
                      { name: "Next.js 16 Edge", icon: "💎" },
                      { name: "Tailwind V4", icon: "🎨" },
                      { name: "TypeScript", icon: "🛡️" },
                      { name: "React 19", icon: "⚛️" },
                      { name: "Zod Safety", icon: "✅" },
                      { name: "Pro Icons", icon: "🎖️" },
                    ].map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 lg:gap-3 text-xs lg:text-sm font-black text-(--text-primary) px-4 py-2.5 lg:px-5 lg:py-3 bg-white/5 rounded-xl border border-(--border-color)/50 hover:border-(--color-primary) hover:bg-white/10 hover:translate-x-2 transition-all cursor-pointer group/item"
                      >
                        <span className="text-[10px] lg:text-xs group-hover/item:scale-125 transition-transform">
                          {tech.icon}
                        </span>
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-20 lg:mt-0 flex justify-center perspective-[1500px] relative">
                  {/* Orbital Connectivity Visualization */}
                  <div className="absolute inset-[-100px] lg:inset-[-150px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                    <div className="absolute inset-0 rounded-full border border-(--color-primary)/20 scale-125 lg:scale-150 animate-[spin_60s_linear_infinite]" />
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-(--color-primary)/10 scale-110 lg:scale-125 animate-[spin_40s_linear_infinite_reverse]" />
                  </div>

                  <div className="relative w-48 h-48 sm:w-64 md:w-80 sm:h-64 md:h-80 group/core transition-all duration-1000 preserve-3d">
                    {/* Glowing Core Orbit */}
                    <div className="absolute inset-[-15%] lg:inset-[-20%] rounded-full border border-(--color-primary)/20 animate-[spin_25s_linear_infinite] group-hover/core:inset-[-35%] lg:group-hover/core:inset-[-45%] group-hover/core:border-(--color-primary)/60 transition-all duration-1000">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-(--color-primary) rounded-full shadow-[0_0_20px_var(--color-primary)] ring-4 lg:ring-8 ring-(--color-primary)/10" />
                    </div>

                    {/* Core Energy Pulse */}
                    <div className="absolute inset-[15%] rounded-full bg-linear-to-br from-(--color-primary) to-indigo-600 p-[3px] lg:p-[4px] shadow-[0_0_50px_rgba(var(--color-primary-rgb),0.3)] lg:shadow-[0_0_80px_rgba(var(--color-primary-rgb),0.4)] group-hover/core:shadow-[0_0_100px_rgba(var(--color-primary-rgb),0.5)] group-hover/core:scale-110 transition-all duration-700 cursor-none">
                      <div className="w-full h-full rounded-full bg-(--bg-card) flex items-center justify-center relative overflow-hidden backdrop-blur-3xl ring-4 lg:ring-8 ring-white/5">
                        <div className="absolute inset-0 bg-(--color-primary) opacity-20 animate-pulse" />
                        <div className="relative text-center group-hover/core:scale-150 transition-transform duration-700">
                          <FontAwesomeIcon
                            icon={faRocket}
                            className="text-3xl sm:text-5xl lg:text-6xl text-(--color-primary) drop-shadow-[0_0_15px_var(--color-primary)]"
                          />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-br from-white/40 via-transparent to-black/40 pointer-events-none" />
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/40 to-transparent w-full h-[3px] top-1/2 -translate-y-1/2 animate-[radar-sweep_2s_linear_infinite]" />
                      </div>
                    </div>

                    {/* Holographic Nodes - Breaking the Card Border */}
                    {[
                      {
                        icon: faCode,
                        pos: "top-0 left-0",
                        hPos: "group-hover/core:-top-10 group-hover/core:-left-10 sm:group-hover/core:-top-16 sm:group-hover/core:-left-16 lg:group-hover/core:-top-32 lg:group-hover/core:-left-32",
                        color: "from-blue-400",
                      },
                      {
                        icon: faShieldHalved,
                        pos: "top-0 right-0",
                        hPos: "group-hover/core:-top-10 group-hover/core:-right-10 sm:group-hover/core:-top-16 sm:group-hover/core:-right-16 lg:group-hover/core:-top-32 lg:group-hover/core:-right-32",
                        color: "from-indigo-400",
                      },
                      {
                        icon: faGlobe,
                        pos: "bottom-0 left-0",
                        hPos: "group-hover/core:-bottom-10 group-hover/core:-left-10 sm:group-hover/core:-bottom-16 sm:group-hover/core:-left-16 lg:group-hover/core:-bottom-32 lg:group-hover/core:-left-32",
                        color: "from-cyan-400",
                      },
                      {
                        icon: faUsers,
                        pos: "bottom-0 right-0",
                        hPos: "group-hover/core:-bottom-10 group-hover/core:-right-10 sm:group-hover/core:-bottom-16 sm:group-hover/core:-right-16 lg:group-hover/core:-bottom-32 lg:group-hover/core:-right-32",
                        color: "from-teal-400",
                      },
                    ].map((node, i) => (
                      <div
                        key={i}
                        className={`absolute ${node.pos} ${node.hPos} w-12 h-12 lg:w-20 lg:h-20 bg-white/10 dark:bg-white/5 backdrop-blur-3xl border border-white/30 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float transition-all duration-1000 hover:scale-125 hover:border-(--color-primary) hover:z-50 group/node`}
                        style={{ animationDelay: `${i * -1.5}s` }}
                      >
                        <div
                          className={`absolute inset-0 bg-linear-to-br ${node.color} to-transparent opacity-0 group-hover/node:opacity-20 rounded-2xl lg:rounded-3xl transition-opacity`}
                        />
                        <FontAwesomeIcon
                          icon={node.icon}
                          className="text-lg lg:text-3xl text-(--text-primary) group-hover/node:text-(--color-primary) group-hover/node:drop-shadow-[0_0_15px_var(--color-primary)] transition-all"
                        />
                        {/* Floating Indicator */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-(--color-primary) rounded-full animate-ping opacity-75 hidden group-hover/node:block" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / CTA */}
        <footer className="w-full py-8 lg:py-12">
          <div className="text-center space-y-10 lg:space-y-12">
            <div className="space-y-4 lg:space-y-6 flex flex-col items-center justify-center gap-4 mb-6!">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Stop managing, <br />
                start <span className="text-(--color-primary)">leading.</span>
              </h2>
              <p className="text-lg lg:text-xl text-(--text-secondary) max-w-2xl mx-auto">
                Join thousands of managers who have already optimized their
                workflows.
              </p>
            </div>

            <Link
              href="/login"
              className="inline-flex items-center px-8 sm:px-12 py-4 lg:py-6 rounded-xl sm:rounded-4xl text-lg lg:text-xl font-black text-white bg-(--color-primary) hover:scale-110 transition-all duration-300 shadow-[0_20px_50px_-15px_var(--color-primary)] relative group overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              Try the Dashboard Free
            </Link>

            <div className="pt-10 lg:pt-16 flex flex-col items-center gap-8 border-t border-(--border-color)/50">
              <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6">
                <div className="flex items-center gap-2 font-black text-xl italic uppercase tracking-widest text-(--color-primary)">
                  <div className="w-8 h-8 bg-(--color-primary) rounded-lg flex items-center justify-center text-white text-xs">
                    DB
                  </div>
                  Dashboard.
                </div>
                <p className="text-(--text-muted) text-[10px] lg:text-sm font-medium order-3 sm:order-2">
                  © 2026 Omar Elbastawesy. Built with passion and precision.
                </p>
                <div className="flex gap-6 lg:gap-8 text-(--text-secondary) text-xs lg:text-sm font-bold order-2 sm:order-3">
                  <a
                    href="#"
                    className="hover:text-(--color-primary) transition-colors"
                  >
                    Privacy
                  </a>
                  <a
                    href="#"
                    className="hover:text-(--color-primary) transition-colors"
                  >
                    Terms
                  </a>
                  <a
                    href="#"
                    className="hover:text-(--color-primary) transition-colors"
                  >
                    Status
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
