"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendar,
  faClock,
  faFlag,
  faFire,
  faLayerGroup,
  faUser,
  faUsers,
  faCircleCheck,
  faSpinner,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Container from "@/app/components/Container/Container";

export default function TaskDetail({ params }) {
  const router = useRouter();
  const [taskData, setTaskData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { task } = await params;
        const res = await fetch("/api/tasks");
        const data = await res.json();

        if (data.tasks) {
          const foundTask = data.tasks.find(
            (t) => t.name === decodeURIComponent(task),
          );
          if (foundTask) {
            setTaskData(foundTask);
          } else {
            setError("Task not found");
          }
        }
      } catch (err) {
        console.error("Error fetching task:", err);
        setError("Failed to load task");
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [params]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Critical":
        return "text-red-500 bg-red-500/10 border-red-500/30";
      case "High":
        return "text-orange-500 bg-orange-500/10 border-orange-500/30";
      case "Medium":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/30";
      case "Low":
        return "text-green-500 bg-green-500/10 border-green-500/30";
      default:
        return "text-gray-500 bg-gray-500/10 border-gray-500/30";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Done":
      case "Completed":
        return "text-green-500 bg-green-500/10 border-green-500/30";
      case "In Progress":
        return "text-blue-500 bg-blue-500/10 border-blue-500/30";
      case "Review":
        return "text-purple-500 bg-purple-500/10 border-purple-500/30";
      case "Blocked":
        return "text-red-500 bg-red-500/10 border-red-500/30";
      default:
        return "text-gray-500 bg-gray-500/10 border-gray-500/30";
    }
  };

  if (loading) {
    return (
      <Container>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center gap-4">
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-4xl text-(--color-primary) animate-spin"
            />
            <p className="text-(--text-muted) font-bold">Loading task...</p>
          </div>
        </div>
      </Container>
    );
  }

  if (error || !taskData) {
    return (
      <Container>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center gap-4">
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="text-4xl text-red-500"
            />
            <p className="text-(--text-muted) font-bold">
              {error || "Task not found"}
            </p>
            <button
              onClick={() => router.push("/tasks")}
              className="px-6 py-3 bg-(--color-primary) text-white font-bold rounded-xl hover:bg-(--color-primary)/80 transition-all"
            >
              Back to Tasks
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="flex flex-col gap-8 pb-8">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/tasks")}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-sm text-(--text-muted) group-hover:text-white transition-colors"
            />
            <span className="text-sm font-bold text-(--text-muted) group-hover:text-white transition-colors">
              Back
            </span>
          </button>
          <div className="h-8 w-px bg-white/10" />
          <h1 className="text-2xl font-black text-(--text-primary)">
            Task Details
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Task Header Card */}
            <div className="p-6 rounded-3xl bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-3xl font-black text-white mb-2">
                    {taskData.name}
                  </h2>
                  <p className="text-sm font-bold text-(--text-muted) uppercase tracking-widest">
                    {taskData.category}
                  </p>
                </div>
                <div className="flex gap-2">
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-bold text-xs uppercase tracking-wider ${getPriorityColor(
                      taskData.priority,
                    )}`}
                  >
                    <FontAwesomeIcon
                      icon={taskData.priority === "Critical" ? faFire : faFlag}
                      className={
                        taskData.priority === "Critical" ? "animate-pulse" : ""
                      }
                    />
                    {taskData.priority}
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border font-bold text-xs uppercase tracking-wider ${getStatusColor(
                    taskData.status,
                  )}`}
                >
                  <FontAwesomeIcon
                    icon={
                      taskData.status === "Done" ||
                      taskData.status === "Completed"
                        ? faCircleCheck
                        : faClock
                    }
                  />
                  {taskData.status}
                </div>
                {taskData.time && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-xs text-(--text-muted)"
                    />
                    <span className="text-xs font-bold text-(--text-muted)">
                      {taskData.time}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xs font-black uppercase tracking-widest text-(--text-muted) mb-3">
                  Description
                </h3>
                <p className="text-sm font-medium text-(--text-primary) leading-relaxed">
                  {taskData.description || "No description provided"}
                </p>
              </div>
            </div>

            {/* Assigned Users Card */}
            {taskData.assignedTo && taskData.assignedTo.length > 0 && (
              <div className="p-6 rounded-3xl bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-lg text-(--color-primary)"
                  />
                  <h3 className="text-xs font-black uppercase tracking-widest text-(--text-muted)">
                    Assigned To
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {taskData.assignedTo.map((user, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-(--color-primary)/30 transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-xs font-black text-white">
                        {user.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-bold text-(--text-primary)">
                        {user}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Metadata */}
          <div className="flex flex-col gap-6">
            {/* Project Card */}
            {taskData.projectId && (
              <div className="p-6 rounded-3xl bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    className="text-lg text-(--color-primary)"
                  />
                  <h3 className="text-xs font-black uppercase tracking-widest text-(--text-muted)">
                    Project
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-lg font-black text-white">
                    {taskData.projectId.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-bold text-(--text-primary)">
                    {taskData.projectId}
                  </span>
                </div>
              </div>
            )}

            {/* Timestamps Card */}
            <div className="p-6 rounded-3xl bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-lg text-(--color-primary)"
                />
                <h3 className="text-xs font-black uppercase tracking-widest text-(--text-muted)">
                  Timeline
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {taskData.createdAt && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-(--text-muted)">
                      Created
                    </span>
                    <span className="text-sm font-bold text-(--text-primary)">
                      {new Date(taskData.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}
                    </span>
                  </div>
                )}
                {taskData.updatedAt && (
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-(--text-muted)">
                      Last Updated
                    </span>
                    <span className="text-sm font-bold text-(--text-primary)">
                      {new Date(taskData.updatedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Info Card */}
            {taskData.assigned && (
              <div className="p-6 rounded-3xl bg-(--bg-card)/40 backdrop-blur-3xl border border-white/10 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-lg text-(--color-primary)"
                  />
                  <h3 className="text-xs font-black uppercase tracking-widest text-(--text-muted)">
                    Assigned Summary
                  </h3>
                </div>
                <p className="text-sm font-bold text-(--text-primary)">
                  {taskData.assigned}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
