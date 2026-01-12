"use client";

import {
  faGear,
  faShieldHalved,
  faDisplay,
  faGlobe,
  faUser,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Components
import Container from "../components/Container/Container";
import Slider from "./components/Slider";
import Header from "../components/Header/Header";
import Edit from "./components/Edit";

const modules = [
  {
    id: "profile",
    name: "Identity Node",
    icon: faUser,
    desc: "Manage your primary operative credentials.",
  },
  {
    id: "security",
    name: "Encryption Layer",
    icon: faShieldHalved,
    desc: "Configure biometric and packet security.",
  },
  {
    id: "interface",
    name: "Neural Interface",
    icon: faDisplay,
    desc: "Tweak UI visual nodes and performance.",
  },
  {
    id: "network",
    name: "Uplink Config",
    icon: faGlobe,
    desc: "Manage global decentralized clusters.",
  },
  {
    id: "system",
    name: "Core Engine",
    icon: faMicrochip,
    desc: "Tune system performance and hardware.",
  },
];

export default function Settings() {
  const [activeModule, setActiveModule] = useState("profile");
  const [encryption, setEncryption] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <Container>
      <div className="flex flex-col gap-6 justify-between h-full">
        <Header
          head="System"
          blueHead="Tuning"
          icon={faGear}
          info="Fine-tune the operational parameters of the Quantum Dashboard."
          notice=""
        ></Header>

        <div className="flex flex-col xl:flex-row gap-10">
          <Slider
            modules={modules}
            activeModule={activeModule}
            setActiveModule={setActiveModule}
          />
          <Edit
            modules={modules}
            activeModule={activeModule}
            setActiveModule={setActiveModule}
          />
        </div>
      </div>
    </Container>
  );
}
