"use client";

import {
  faFolderOpen,
  faHouse,
  faCircleCheck,
  faXmark,
  faWrench,
  faEnvelope,
  faBell,
  faCircleInfo,
  faUserGear,
  faCube,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logout from "./components/Logout";

const links = [
  { name: "Dashboard", link: "/dashboard", icon: faHouse },
  { name: "Projects", link: "/projects", icon: faFolderOpen },
  { name: "Tasks", link: "/tasks", icon: faCircleCheck },
  { name: "Messages", link: "/messages", icon: faEnvelope },
  { name: "Notifications", link: "/notifications", icon: faBell },
  { name: "Settings", link: "/settings", icon: faWrench },
  { name: "Help", link: "/help", icon: faCircleInfo },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const iconRef = useRef();
  const menuRef = useRef();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <nav
        ref={menuRef}
        className={`fixed z-999 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] bg-(--bg-card)/40 backdrop-blur-3xl border-(--border-color)/10 shadow-[0_32px_128px_-32px_rgba(0,0,0,0.6)] overflow-hidden group/nav 
          ${open ? "w-full sm:w-72 px-5" : "w-12 sm:w-20 px-0 sm:px-2"}
          sm:left-4 sm:top-4 sm:bottom-4 sm:rounded-[2.5rem] sm:border
          left-0 top-0 bottom-0 rounded-none border-r
          flex flex-col items-center py-8`}
      >
        {/* Holographic Glows */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-(--color-primary)/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-(--color-primary)/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Brand Header */}
        <div className="flex flex-col items-center mb-12 w-full overflow-hidden">
          <div
            ref={iconRef}
            onClick={() => setOpen(!open)}
            className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center cursor-pointer rounded-2xl bg-linear-to-br from-(--color-primary)/20 to-(--color-primary)/20 border border-(--border-color)/10 hover:border-(--color-primary)/50 transition-all duration-500 group/logo shadow-inner active:scale-95"
          >
            <div
              className={`absolute inset-0 bg-(--color-primary) rounded-2xl transition-opacity blur-xl ${
                open ? "opacity-0" : "opacity-20 animate-pulse"
              }`}
            />
            <FontAwesomeIcon
              icon={open ? faXmark : faCube}
              className={`sm:text-lg text-sm text-(--color-primary) drop-shadow-[0_0_10px_var(--color-primary)] transition-all duration-500 ${
                open ? "rotate-90 scale-75" : "rotate-0 scale-110"
              }`}
            />
          </div>
          <div
            className={`mt-3 flex flex-col items-center transition-all duration-500 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <span className="text-[11px] font-black tracking-[0.7em] text-(--text-primary) uppercase italic drop-shadow-[0_0_10px_rgba(var(--color-primary-rgb),0.2)]">
              Quantum
            </span>
            <div className="h-px w-8 bg-linear-to-r from-transparent via-(--color-primary) to-transparent mt-1" />
          </div>
        </div>

        {/* Navigation Matrix */}
        <div className="flex-1 flex flex-col sm:gap-3 gap-2 w-full space-y-3 overflow-y-auto no-scrollbar px-1">
          {links.map((ele) => {
            const isActive = pathname === ele.link;
            return (
              <Link
                key={ele.name}
                href={ele.link}
                title={!open ? ele.name : ""}
                className={`flex items-center gap-4 sm:py-4 py-3 rounded-2xl transition-all duration-500 group/item relative overflow-hidden ${
                  isActive
                    ? "bg-[var(--color-primary)]/15 border border-(--color-primary)/30 shadow-[0_0_20px_-5px_rgba(var(--color-primary-rgb),0.3)]"
                    : "hover:bg-(--color-primary-soft) border border-transparent"
                } ${open ? "px-5" : "justify-center"}`}
              >
                {/* Active Indicator & Closed State Glow */}
                {isActive && (
                  <>
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-(--color-primary) rounded-full shadow-[0_0_15px_var(--color-primary)] z-10" />
                    {!open && (
                      <div className="absolute inset-2 bg-(--color-primary)/10 blur-sm rounded-full" />
                    )}
                  </>
                )}

                <FontAwesomeIcon
                  className={`sm:text-lg text-sm transition-all duration-500 flex-shrink-0 relative z-20 ${
                    isActive
                      ? "text-(--color-primary) drop-shadow-[0_0_15px_var(--color-primary)] scale-110"
                      : "text-(--text-secondary) group-hover/item:text-(--text-primary) group-hover/item:drop-shadow-[0_0_12px_rgba(var(--color-primary-rgb),0.3)]"
                  } group-hover/item:scale-110`}
                  icon={ele.icon}
                />

                <span
                  className={`text-[14px] font-black tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${
                    open
                      ? "opacity-100 translate-x-0 w-full"
                      : "opacity-0 -translate-x-8 pointer-events-none w-0 hidden"
                  } ${
                    isActive
                      ? "text-(--text-inverse) drop-shadow-[0_0_8px_rgba(var(--color-primary-rgb),0.2)]"
                      : "text-(--text-secondary) group-hover/item:text-(--text-primary)"
                  }`}
                >
                  {ele.name}
                </span>

                {/* Hover Shimmer */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-(--color-primary)/5 to-transparent -translate-x-full group-hover/item:animate-[shimmer_2s_infinite] pointer-events-none" />
              </Link>
            );
          })}
        </div>

        {/* Bottom Intel Section */}
        <div className="flex flex-col justify-between gap-2 w-full pt-8 mt-6 border-t border-(--border-color)/5 space-y-3 px-1">
          <Link
            href="/profile"
            title={!open ? "Profile" : ""}
            className={`flex items-center gap-4 py-4 rounded-2xl transition-all duration-500 group/item relative overflow-hidden ${
              pathname === "/profile"
                ? "bg-[var(--color-primary)]/15 border border-(--color-primary)/30 shadow-[0_0_20px_-5px_rgba(var(--color-primary-rgb),0.3)]"
                : "hover:bg-(--color-primary-soft) border border-transparent"
            } ${open ? "px-5" : "justify-center"}`}
          >
            {/* Active Indicator & Closed State Glow */}
            {pathname === "/profile" && (
              <>
                <div className="absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-(--color-primary) rounded-full shadow-[0_0_15px_var(--color-primary)] z-10" />
                {!open && (
                  <div className="absolute inset-2 bg-(--color-primary)/10 blur-sm rounded-full" />
                )}
              </>
            )}

            <FontAwesomeIcon
              className={`sm:text-lg text-sm transition-all duration-500 flex-shrink-0 relative z-20 ${
                pathname === "/profile"
                  ? "text-(--color-primary) drop-shadow-[0_0_15px_var(--color-primary)] scale-110"
                  : "text-(--text-secondary) group-hover/item:text-(--text-primary) group-hover/item:drop-shadow-[0_0_12px_rgba(var(--color-primary-rgb),0.3)]"
              } group-hover/item:scale-110`}
              icon={faUserGear}
            />

            <span
              className={`text-[14px] font-black tracking-[0.2em] transition-all duration-500 whitespace-nowrap ${
                open
                  ? "opacity-100 translate-x-0 w-full"
                  : "opacity-0 -translate-x-8 pointer-events-none w-0 hidden"
              } ${
                pathname === "/profile"
                  ? "text-(--text-inverse) drop-shadow-[0_0_8px_rgba(var(--color-primary-rgb),0.2)]"
                  : "text-(--text-secondary) group-hover/item:text-(--text-primary)"
              }`}
            >
              {"Profile"}
            </span>

            {/* Hover Shimmer */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-(--color-primary)/5 to-transparent -translate-x-full group-hover/item:animate-[shimmer_2s_infinite] pointer-events-none" />
          </Link>

          <Logout open={open} />
        </div>
      </nav>

      {/* Cinematic Perspective Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-998 bg-black/70 backdrop-blur-xl transition-all duration-700 animate-[fadeIn_0.5s_ease-out]"
        >
          <div className="absolute inset-0 bg-linear-to-br from-(--color-primary)/5 to-transparent pointer-events-none" />
        </div>
      )}
    </>
  );
}
