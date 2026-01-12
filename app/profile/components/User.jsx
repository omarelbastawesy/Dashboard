import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";

export default function User({ userData, isEditing, setUserData }) {
  const [showImageInput, setShowImageInput] = useState(false);

  return (
    <div className="lg:col-span-1 space-y-8 flex flex-col gap-8">
      <div className="bg-(--bg-card) rounded-[2rem] p-8 text-center shadow-(--shadow-md) border border-(--border-color) relative overflow-hidden group">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-r from-(--color-primary) to-indigo-500 opacity-10"></div>

        <div className="relative mb-6 flex flex-col items-center">
          <div className="w-32 h-32 mx-auto bg-linear-to-br from-indigo-100 to-(--color-primary-soft) rounded-full flex items-center justify-center border-4 border-(--bg-card) shadow-xl relative overflow-hidden">
            {userData.image ? (
              <Image
                src={userData.image}
                alt="User"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            ) : (
              <FontAwesomeIcon
                icon={faUser}
                className="text-5xl text-(--color-primary) opacity-80"
              />
            )}
          </div>
          {isEditing && (
            <button
              onClick={() => setShowImageInput(!showImageInput)}
              className="absolute bottom-0 right-1/2 translate-x-12 translate-y-2 w-10 h-10 bg-(--color-primary) text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border-2 border-(--bg-card) z-10"
            >
              <FontAwesomeIcon icon={faCamera} className="text-sm" />
            </button>
          )}
          {showImageInput && isEditing && (
            <div className="absolute top-full mt-4 w-64 z-20 animate-[fadeIn_0.3s_ease-out_forwards]">
              <input
                type="text"
                placeholder="Paste image URL..."
                defaultValue={userData.image}
                onChange={(e) => setUserData({ ...userData, image: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-(--bg-main) border border-(--border-color) text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
                autoFocus
              />
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-(--text-primary) mb-1">
          {userData.name}
        </h2>
        <p className="text-(--text-primary) opacity-60 font-medium mb-6 uppercase tracking-wider text-xs">
          {userData.role}
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <div className="px-4 py-2 bg-(--bg-main) rounded-2xl">
            <span className="block text-xl font-bold text-(--color-primary)">
              24
            </span>
            <span className="text-[10px] uppercase text-(--text-secondary) font-bold">
              Projects
            </span>
          </div>
          <div className="px-4 py-2 bg-(--bg-main) rounded-2xl">
            <span className="block text-xl font-bold text-(--color-primary)">
              85%
            </span>
            <span className="text-[10px] uppercase text-(--text-secondary) font-bold">
              Success
            </span>
          </div>
        </div>
      </div>

      {/* Contact Information Summary */}
      <div className="bg-(--bg-card) rounded-[2rem] p-8 shadow-(--shadow-md) border border-(--border-color)">
        <h3 className="text-lg font-bold text-(--text-primary) mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-(--color-primary) rounded-full block"></span>
          Contact Info
        </h3>
        <div className="space-y-4 flex flex-col gap-4">
          <div className="flex items-center gap-4 text-(--text-secondary)">
            <div className="w-10 h-10 rounded-full bg-(--bg-main) flex items-center justify-center text-(--color-primary)">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text-sm overflow-hidden">
              <p className="font-bold text-(--text-primary)">Email</p>
              <p className="truncate">{userData.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-(--text-secondary)">
            <div className="w-10 h-10 rounded-full bg-(--bg-main) flex items-center justify-center text-(--color-primary)">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="text-sm">
              <p className="font-bold text-(--text-primary)">Phone</p>
              <p>{userData.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-(--text-secondary)">
            <div className="w-10 h-10 rounded-full bg-(--bg-main) flex items-center justify-center text-(--color-primary)">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="text-sm">
              <p className="font-bold text-(--text-primary)">Location</p>
              <p>{userData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
