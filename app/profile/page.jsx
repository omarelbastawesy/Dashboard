"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPen,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

// components
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import User from "./components/User";
import Details from "./components/Details";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Omar Elbastawesy",
    role: "Frontend Web Developer",
    email: "omarelbastawesy1@gmail.com",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQE7YgfyUq68fw/profile-displayphoto-crop_800_800/B4EZrLeD1vHMAM-/0/1764350256108?e=1769644800&v=beta&t=c05vB889_q3CQ8ZP6D-m4laOnJp81FRi5y5gaCSMBl4",
    phone: "+201012345678",
    location: "Kafr El Sheikh, Egypt",
    bio: "Frontend Web Developer with 5 years of experience in building scalable web applications and intuitive user interfaces. Always learning and exploring new technologies.",
  });

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data));
    } else {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Logic to save data would go here
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <Container>
      <div className="max-w-5xl mx-auto space-y-8 animate-[fadeIn_0.6s_ease-out_forwards]">
        <Header
          head="My"
          blueHead="Profile"
          icon={faUser}
          info="Manage your personal information and account settings"
          notice=""
        >
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-lg cursor-pointer ${
              isEditing
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                : "bg-(--color-primary) text-(--text-inverse) hover:bg-(--color-primary-hover) hover:shadow-[0_10px_20px_-5px_var(--color-primary-soft)]"
            }`}
          >
            <FontAwesomeIcon icon={isEditing ? faShieldHalved : faPen} />
            {isEditing ? "Cancel Editing" : "Edit Profile"}
          </button>
        </Header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <User userData={userData} isEditing={isEditing} setUserData={setUserData}/>

          <Details
            userData={userData}
            isEditing={isEditing}
            handleSave={handleSave}
            setUserData={setUserData}
          />
        </div>
      </div>
    </Container>
  );
}
