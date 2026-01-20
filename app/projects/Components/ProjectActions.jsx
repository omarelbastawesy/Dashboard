"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import AddProject from "./AddProject";

export default function ProjectActions({ project }) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleClose = (shouldRefresh) => {
    setIsEditOpen(false);
    if (shouldRefresh === true) {
      // In a client component, we can simply reload the window to refresh server data
      window.location.reload();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsEditOpen(true)}
        className="px-6 py-3 rounded-2xl bg-(--color-primary)/10 hover:bg-(--color-primary)/20 text-(--color-primary) font-bold flex items-center gap-2 border border-(--color-primary)/20 hover:border-(--color-primary)/40 transition-all active:scale-95 group cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faEdit}
          className="group-hover:rotate-12 transition-transform"
        />
        <span className="text-xs uppercase tracking-widest">Edit Node</span>
      </button>

      <AddProject
        isOpen={isEditOpen}
        onClose={handleClose}
        initialData={project}
      />
    </>
  );
}
