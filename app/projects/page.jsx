"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChartLine } from "@fortawesome/free-solid-svg-icons";

// components
import Container from "../components/Container/Container";
import Header from "../components/Header/Header";
import Status from "./Components/Status";
import Project from "./Components/Project";
import AddProject from "./Components/AddProject";

export default function Projects() {
  const [showAddProject, setShowAddProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      if (res.ok) {
        const data = await res.json();
        const mappedProjects = data.projects.map((p) => ({
          ...p,
          id: p._id,
          members: p.teamMembers.length,
          date: new Date(p.startDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        }));
        setProjects(mappedProjects);
      }
    } catch (error) {
      console.error("Failed to fetch projects", error);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchProjects();
  }, []);

  // Refresh when adding a project (passed to onClose for simplicity in this flow, or distinct prop)
  const handleClose = (shouldRefresh) => {
    setShowAddProject(false);
    if (shouldRefresh === true) {
      fetchProjects();
    }
  };

  return (
    <Container>
      <AddProject isOpen={showAddProject} onClose={handleClose} />
      <div className="flex flex-col gap-6 justify-between h-full">
        <Header
          head="Project"
          blueHead="Matrix"
          icon={faChartLine}
          info="Orchestrating"
          notice={`${projects.length} active operational nodes`}
        >
          <button
            onClick={() => setShowAddProject(true)}
            className="flex cursor-pointer items-center gap-3 px-6 py-3 bg-linear-to-r from-(--color-primary) to-indigo-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.5)] transition-all active:scale-95 group"
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="group-hover:rotate-90 transition-transform duration-500"
            />
            Add new project
          </button>
        </Header>

        {/* Stats Summary Area */}
        <Status />

        {/* Grid Matrix */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-(--color-primary) text-xl font-bold animate-pulse">
              Loading Matrix...
            </div>
          </div>
        ) : (
          <Project projects={projects} />
        )}
      </div>
    </Container>
  );
}
