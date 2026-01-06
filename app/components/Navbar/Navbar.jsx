"use client";

import {
  faFolderOpen,
  faHouse,
  faCircleCheck,
  faBars,
  faX,
  faWrench,
  faEnvelope,
  faBell,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", link: "/dashboard", icon: faHouse },
  { name: "Projects", link: "#projects", icon: faFolderOpen },
  { name: "Tasks", link: "#tasks", icon: faCircleCheck },
  { name: "Settings", link: "#setting", icon: faWrench },
  { name: "Messages", link: "#message", icon: faEnvelope },
  { name: "Notifications", link: "#notification", icon: faBell },
  { name: "Help", link: "#help", icon: faCircleInfo },
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
      <div
        className={`navbar fixed z-50 left-0 top-0 flex items-start justify-start flex-col gap-8 py-6 px-2 transition-all duration-300 ease-in-out h-screen bg-[var(--bg-card)] border-r border-[var(--border-color)] ${
          open ? "w-64" : "w-16"
        }`}
      >
        <div
          ref={iconRef}
          onClick={() => setOpen((prev) => !prev)}
          className="menu w-fit cursor-pointer px-3 py-2.5 rounded-md hover:bg-[var(--color-primary-soft)] transition-colors duration-200"
        >
          <FontAwesomeIcon
            className="w-5 h-5 text-[var(--text-primary)]"
            icon={open ? faX : faBars}
          />
        </div>
        <div ref={menuRef} className="links w-full flex flex-col gap-2">
          {links.map((ele) => {
            return (
              <Link
                key={ele.name}
                className="w-full flex items-center justify-start gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--color-primary-soft)] transition-all duration-200 group"
                href={ele.link}
                title={ele.name}
              >
                <FontAwesomeIcon
                  className="w-5 h-5 text-[var(--text-primary)] flex-shrink-0"
                  icon={ele.icon}
                />
                <span
                  className={`text-[var(--text-primary)] font-medium transition-all duration-300 whitespace-nowrap overflow-hidden ${
                    open ? "opacity-100 max-w-full" : "opacity-0 max-w-0"
                  }`}
                >
                  {ele.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className={`absolute h-screen z-40 inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm transition-all duration-300 ${
          open ? "opacity-100 w-screen" : "opacity-0 w-0"
        }`}
      ></div>
    </>
  );
}
