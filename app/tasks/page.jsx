"use client";

import { faPlus, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

// components
import Container from "../components/Container/Container";
import Task from "./components/Task";
import Filter from "./components/Filter";
import Header from "../components/Header/Header";
import AddTasks from "./components/AddTasks";

const tasks = [
  {
    id: "TSK-001",
    title: "Sync Neural Interface",
    category: "Development",
    priority: "Critical",
    status: "In Progress",
    time: "2h left",
    assigned: "Alpha-1",
  },
  {
    id: "TSK-002",
    title: "Purge Database Latency",
    category: "Operations",
    priority: "High",
    status: "To Do",
    time: "Tomorrow",
    assigned: "Beta-4",
  },
  {
    id: "TSK-003",
    title: "Encrypt Quantum Packets",
    category: "Security",
    priority: "Critical",
    status: "Review",
    time: "Now",
    assigned: "Gamma-9",
  },
  {
    id: "TSK-004",
    title: "Optimise Heat Sink Nodes",
    category: "Hardware",
    priority: "Medium",
    status: "Done",
    time: "Completed",
    assigned: "Delta-2",
  },
];

export default function Tasks() {
  const [tasksData, setTasksData] = useState([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const getTasks = async () => {
    try {
      const res = await fetch("/api/tasks");
      const data = await res.json();
      setTasksData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <div className="flex flex-col gap-6 justify-between h-full">
        <div className="flex flex-col gap-4 mb-12">
          <Header
            head="Operational"
            blueHead="Flow"
            icon={faLayerGroup}
            info="Manage and synchronize system tasks across the decentralised matrix."
            notice=""
          >
            <button
              onClick={() => setIsAddTaskOpen(true)}
              className="flex cursor-pointer items-center gap-3 px-6 py-3 bg-linear-to-r from-(--color-primary) to-indigo-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.5)] transition-all active:scale-95 group"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="group-hover:rotate-90 transition-transform duration-500"
              />
              Add New Task
            </button>
          </Header>

          <Filter />
        </div>

        <Task tasks={tasksData.tasks || []} />
      </div>

      <AddTasks
        isOpen={isAddTaskOpen}
        onClose={(shouldRefresh) => {
          setIsAddTaskOpen(false);
          if (shouldRefresh) {
            getTasks();
          }
        }}
      />
    </Container>
  );
}
