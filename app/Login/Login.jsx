import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faX,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Alert from "../components/Alert/Alert";
import { useForm } from "react-hook-form";

export default function Login({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const info = localStorage.getItem("data");
    if (info && data.email === JSON.parse(info).email) {
      setAlert(true);
    } else {
      localStorage.setItem("data", JSON.stringify(data));
      setSuccess(true);
    }
  };

  return (
    <>
      {/* Alert Modal */}
      <Alert
        alert={alert}
        setAlert={setAlert}
        onSwitch={onSwitch}
        x={true}
        icon={faX}
        color="text-red-500"
        title="Authentication Error"
        message="User already exists or invalid credentials."
        buttonText="Sign Up"
      />

      <Alert
        alert={success}
        setAlert={setSuccess}
        onSwitch={onSwitch}
        x={false}
        icon={faCheck}
        color="text-green-500"
        title="Authentication Success"
        message="User registered successfully."
        buttonText="Sign Up"
      />

      <div className="flex flex-col items-center justify-between gap-6 container w-full  bg-[var(--bg-card)] rounded-xl shadow-[var(--shadow-md)] p-8 border border-[var(--border-color)] animate-fade-in">
        <div className="heading text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">
          Sign In
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="form flex w-full flex-col gap-5"
        >
          {/* =================== FIRST LINE =================== */}
          <div className="col flex w-full md:flex-row flex-col gap-5">
            <div className="name w-full">
              <input
                className="input w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 placeholder:text-[var(--text-muted)]"
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters.",
                  },
                })}
              />
              {errors.name && (
                <span className="error text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="email w-full">
              <input
                className="input w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 placeholder:text-[var(--text-muted)]"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <span className="error text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="phone w-full">
              <input
                className="input w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 placeholder:text-[var(--text-muted)]"
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone is required",
                })}
              />
              {errors.phone && (
                <span className="error text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          {/* =================== SECOND LINE =================== */}
          <div className="col flex w-full md:flex-row flex-col gap-5">
            <div className="jobTitle w-full">
              <input
                className="input w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 placeholder:text-[var(--text-muted)]"
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Job Title"
                {...register("jobTitle", {
                  required: "Job Title is required",
                  minLength: {
                    value: 5,
                    message: "Job Title must be at least 5 characters.",
                  },
                })}
              />
              {errors.jobTitle && (
                <span className="error text-red-500 text-sm">
                  {errors.jobTitle.message}
                </span>
              )}
            </div>

            <div className="position w-full">
              <input
                className="input w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 placeholder:text-[var(--text-muted)]"
                type="text"
                name="position"
                id="position"
                placeholder="Position"
                {...register("position", {
                  required: "Position is required",
                  minLength: {
                    value: 5,
                    message: "Position must be at least 5 characters.",
                  },
                })}
              />
              {errors.position && (
                <span className="error text-red-500 text-sm">
                  {errors.position.message}
                </span>
              )}
            </div>
          </div>

          {/* =================== THIRD LINE =================== */}
          <div className="col flex w-full md:flex-row flex-col gap-5">
            <div className="password w-full">
              <div className="relative ">
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                />
                <input
                  className="input w-full pl-4 py-3 pr-10 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 placeholder:text-[var(--text-muted)]"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters.",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <span className="error text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="confirmPassword w-full">
              <div className="relative">
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                />
                <input
                  className="input w-full pl-4 py-3 pr-10 rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 placeholder:text-[var(--text-muted)]"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
              </div>
              {errors.confirmPassword && (
                <span className="error text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>

          <span className="message text-sm text-[var(--text-secondary)] font-medium">
            Your registration will take about 24 hours to be confirmed.
          </span>

          <input
            className="login-button w-full cursor-pointer bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--text-inverse)] font-semibold py-3 rounded-lg transition-all duration-200 shadow-sm active:transform active:scale-[0.98]"
            type="submit"
            value="Sign In"
          />
        </form>

        <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
          Don't have an account?{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              onSwitch();
            }}
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-200 font-medium cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
