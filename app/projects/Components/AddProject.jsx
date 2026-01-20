"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCheck,
  faBriefcase,
  faCalendar,
  faUserTie,
  faMoneyBillWave,
  faListCheck,
  faPercent,
  faLayerGroup,
  faFlag,
  faAlignLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

export default function AddProject({ isOpen, onClose }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (isOpen) {
      setLoadingEmployees(true);
      fetch("/api/users")
        .then((res) => res.json())
        .then((data) => {
          setEmployees(data.employees || []);
          setLoadingEmployees(false);
        })
        .catch((err) => {
          console.error("Failed to fetch employees", err);
          setLoadingEmployees(false);
        });
    }
  }, [isOpen]);

  const onSubmit = async (data) => {
    setError("");
    try {
      // Convert specific fields
      const payload = {
        ...data,
        teamMembers: data.teamMembers || [], // Already an array of strings from checkboxes
        budget: Number(data.budget),
        progress: Number(data.progress),
      };
      console.log(payload);

      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        reset();
        setTimeout(() => {
          setSuccess(false);
          onClose(true); // Close after success and trigger refresh
        }, 2000);
      } else if (res.status === 409) {
        setError("Project already exists.");
      } else {
        setError("Failed to create project");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Cinematic Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-xl transition-opacity duration-500"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-(--bg-card)/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_32px_128px_-16px_rgba(0,0,0,0.6)] animate-[fadeIn_0.4s_ease-out]">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-(--color-primary) to-transparent opacity-70" />

        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 border-b border-white/5 bg-(--bg-card)/90 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-(--color-primary)/20 to-indigo-500/20 flex items-center justify-center border border-white/10">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-(--color-primary) text-xl drop-shadow-[0_0_8px_var(--color-primary)]"
              />
            </div>
            <div>
              <h2 className="text-xl font-black text-(--text-primary) uppercase tracking-wide">
                Initialize Project
              </h2>
              <p className="text-[10px] font-bold text-(--text-muted) tracking-widest uppercase">
                New Operational Node
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-(--error)/10 text-(--text-muted) hover:text-(--error) transition-all duration-300 active:scale-95"
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          {success ? (
            <div className="flex flex-col items-center justify-center py-20 animate-pulse">
              <div className="w-20 h-20 rounded-full bg-(--success)/20 flex items-center justify-center mb-6">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-4xl text-(--success)"
                />
              </div>
              <h3 className="text-2xl font-black text-(--text-primary)">
                Project Created
              </h3>
              <p className="text-(--text-muted)">Redirecting to dashboard...</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-8"
            >
              {error && (
                <div className="p-4 rounded-xl bg-(--error)/10 border border-(--error)/20 text-(--error) text-sm font-bold text-center">
                  {error}
                </div>
              )}

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Name */}
                <InputField
                  label="Project Name"
                  icon={faBriefcase}
                  register={register}
                  name="name"
                  placeholder="e.g. Quantum Nexus"
                  required
                  validation={{
                    minLength: { value: 6, message: "At least 6 chars" },
                  }}
                  error={errors.name}
                />

                {/* Owner */}
                <InputField
                  label="Project Owner"
                  icon={faUserTie}
                  register={register}
                  name="owner"
                  placeholder="e.g. Alex Chen"
                  required
                  error={errors.owner}
                />

                {/* Start Date */}
                <InputField
                  label="Start Date"
                  icon={faCalendar}
                  type="date"
                  register={register}
                  name="startDate"
                  required
                  error={errors.startDate}
                />

                <InputField
                  label="End Date"
                  icon={faCalendar}
                  type="date"
                  register={register}
                  name="endDate"
                  required
                  validation={{
                    validate: (value) => {
                      const start = watch("startDate");
                      if (start && value && new Date(value) < new Date(start)) {
                        return "End Date must be after Start Date";
                      }
                      return true;
                    },
                  }}
                  error={errors.endDate}
                />

                {/* Team Members - Checkbox List */}
                <div className="col-span-1 md:col-span-2">
                  <div className="relative group/field w-full">
                    <label className="text-[10px] font-black uppercase tracking-widest text-(--text-muted) mb-2 block ml-4">
                      Team Members (Employees)
                    </label>
                    <div className="relative p-6 rounded-3xl border border-(--border-color)/50 bg-white/5 max-h-48 overflow-y-auto custom-scrollbar">
                      {loadingEmployees ? (
                        <div className="text-center text-(--text-muted) text-xs">
                          Loading employees...
                        </div>
                      ) : employees.length === 0 ? (
                        <div className="text-center text-(--text-muted) text-xs">
                          No employees found.
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {employees.map((emp) => (
                            <label
                              key={emp._id}
                              className="flex items-center gap-3 cursor-pointer group/item"
                            >
                              <div className="relative">
                                <input
                                  type="checkbox"
                                  value={emp._id}
                                  {...register("teamMembers")}
                                  className="peer sr-only"
                                />
                                <div className="w-5 h-5 rounded-lg border-2 border-(--text-muted) peer-checked:border-(--color-primary) peer-checked:bg-(--color-primary) transition-all flex items-center justify-center">
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-white text-[10px] opacity-0 peer-checked:opacity-100 transition-opacity"
                                  />
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-(--text-secondary)">
                                  {emp.avatar ? (
                                    <img
                                      src={emp.avatar}
                                      alt={emp.name}
                                      className="w-full h-full rounded-full object-cover"
                                    />
                                  ) : (
                                    emp.name.charAt(0)
                                  )}
                                </div>
                                <span className="text-sm font-medium text-(--text-secondary) group-hover/item:text-white transition-colors">
                                  {emp.name}
                                </span>
                              </div>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.teamMembers && (
                      <ErrorMessage message={errors.teamMembers.message} />
                    )}
                  </div>
                </div>

                {/* Budget */}
                <InputField
                  label="Budget ($)"
                  icon={faMoneyBillWave}
                  type="number"
                  register={register}
                  name="budget"
                  placeholder="0.00"
                  required
                  error={errors.budget}
                />

                {/* Progress */}
                <InputField
                  label="Initial Progress (%)"
                  icon={faPercent}
                  type="number"
                  register={register}
                  name="progress"
                  placeholder="0 - 100 %"
                  required
                  error={errors.progress}
                />
              </div>

              {/* Description */}
              <div className="relative group/field">
                <label className="text-[10px] font-black uppercase tracking-widest text-(--text-muted) mb-2 block">
                  Project Description
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-5 text-(--text-muted) group-focus-within/field:text-(--color-primary) transition-colors">
                    <FontAwesomeIcon icon={faAlignLeft} className="text-sm" />
                  </div>
                  <textarea
                    className="w-full pl-12 pr-6 py-4 min-h-[120px] rounded-3xl border border-(--border-color)/50 bg-white/5 text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all duration-300 placeholder:text-(--text-muted)/40 font-medium resize-none"
                    placeholder="Briefly describe the operational goals..."
                    {...register("description", {
                      required: "Required",
                      minLength: { value: 10, message: "At least 10 chars" },
                    })}
                  />
                </div>
                {errors.description && (
                  <ErrorMessage message={errors.description.message} />
                )}
              </div>

              {/* Radio Groups */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
                <RadioGroup
                  label="Status"
                  name="status"
                  icon={faListCheck}
                  options={["Active", "Pending", "Completed", "Paused"]}
                  register={register}
                  required
                  error={errors.status}
                />
                <RadioGroup
                  label="Type"
                  name="type"
                  icon={faLayerGroup}
                  options={["Development", "Design", "Research", "Marketing"]}
                  register={register}
                  required
                  error={errors.type}
                />
                <RadioGroup
                  label="Priority"
                  name="priority"
                  icon={faFlag}
                  options={["Low", "Medium", "High", "Critical"]}
                  register={register}
                  required
                  error={errors.priority}
                />
              </div>

              {/* Submit Button */}
              <button
                disabled={isSubmitting}
                className="mt-4 w-full cursor-pointer relative group/btn py-4 rounded-2xl bg-linear-to-r from-(--color-primary) to-indigo-600 text-(--text-inverse) font-black text-xs tracking-[0.3em] uppercase shadow-[0_10px_30px_-10px_var(--color-primary)] transition-all duration-500 hover:shadow-[0_20px_40px_-10px_var(--color-primary)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">
                  {isSubmitting ? "Initializing..." : "Create Project Node"}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner code
function InputField({
  label,
  icon,
  type = "text",
  register,
  name,
  required = false,
  error,
  placeholder,
  defaultValue,
  validation = {},
}) {
  return (
    <div className="relative group/field w-full">
      <label className="text-[10px] font-black uppercase tracking-widest text-(--text-muted) mb-2 block ml-4">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within/field:text-(--color-primary) group-hover/field:text-(--color-primary) transition-colors pointer-events-none">
          <FontAwesomeIcon icon={icon} className="text-sm" />
        </div>
        <input
          className={`w-full pl-12 pr-6 py-3.5 rounded-2xl border border-(--border-color)/50 bg-white/5 text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all duration-300 placeholder:text-(--text-muted)/40 font-bold text-sm ${
            type === "date"
              ? "cursor-pointer [&::-webkit-calendar-picker-indicator]:hidden min-h-[52px]"
              : ""
          }`}
          style={type === "date" ? { colorScheme: "dark" } : {}}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          step={type === "number" ? "any" : undefined}
          min={name === "progress" ? 0 : undefined}
          max={name === "progress" ? 100 : undefined}
          onClick={(e) => {
            if (type === "date") {
              try {
                e.target.showPicker();
              } catch (error) {
                // Fallback for browsers that don't support showPicker
              }
            }
          }}
          {...register(name, {
            required: required && "Required",
            ...validation,
          })}
        />
      </div>
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}

function RadioGroup({ label, name, icon, options, register, required, error }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-(--text-muted) px-2">
        <FontAwesomeIcon icon={icon} className="text-xs" />
        <span className="text-[9px] font-black uppercase tracking-widest">
          {label}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <label
            key={opt}
            className="relative cursor-pointer group flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all active:scale-95"
          >
            <input
              type="radio"
              value={opt}
              className="peer sr-only"
              {...register(name, { required: required && "Required" })}
            />
            {/* Custom Radio Circle */}
            <div className="w-4 h-4 rounded-full border-2 border-(--text-muted) peer-checked:border-(--color-primary) flex items-center justify-center transition-colors peer-checked:[&>div]:scale-100">
              <div className="w-2 h-2 rounded-full bg-(--color-primary) scale-0 transition-transform" />
            </div>
            <span className="text-xs font-bold text-(--text-secondary) peer-checked:text-(--text-primary) transition-colors">
              {opt}
            </span>
            {/* Glow effect on checked */}
            <div className="absolute inset-0 rounded-xl peer-checked:shadow-[0_0_15px_-5px_var(--color-primary)] peer-checked:border-(--color-primary)/30 pointer-events-none transition-all" />
          </label>
        ))}
      </div>
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <span className="absolute -bottom-5 left-4 text-(--error) text-[9px] font-black uppercase tracking-wider animate-pulse">
      {message}
    </span>
  );
}
