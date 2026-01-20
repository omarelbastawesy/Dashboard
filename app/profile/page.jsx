"use client";
import { useEffect, useState } from "react";
import { useUser } from "../components/GetUser/UserPovider";
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
  const { user, loading } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({});

  console.log(userData);

  useEffect(() => {
    fetch("/api/getUser")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });

    console.log(userData);

    //   const data = localStorage.getItem("userData");
    //   if (data) {
    //     setUserData(JSON.parse(data));
    //   } else {
    //     localStorage.setItem("userData", JSON.stringify(userData));
    //   }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Logic to save data would go here
    fetch("/api/getUser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  };

  if (loading) return <div>Loading...</div>;

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
          <User
            userData={userData}
            isEditing={isEditing}
            setUserData={setUserData}
          />

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
