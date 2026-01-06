import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Alert from "../../components/Alert/Alert";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export default function Signup({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationSuite = (data) => {
    const userData = JSON.parse(localStorage.getItem("data"));

    if (
      userData &&
      data.email &&
      data.email === userData.email &&
      data.password === userData.password
    ) {
      localStorage.setItem("login", true);
      setSuccess(true);
    } else {
      setAlert(true);
    }
  };

  return (
    <>
      {/* Alert Modal */}
      <Alert
        alert={alert}
        setAlert={setAlert}
        onSwitch={setAlert}
        x={true}
        icon={faX}
        color="text-red-500"
        title="Error"
        message="Your email or password is incorrect."
        buttonText="Try Again"
        link="/login"
      />

      <Alert
        alert={success}
        setAlert={setSuccess}
        onSwitch={setSuccess}
        icon={faCheck}
        x={false}
        color="text-green-500"
        title="Success"
        message="You Logged In Successfully"
        buttonText="Dashboard"
        link="/dashboard"
      />
      <div className="flex flex-col items-center justify-between gap-6 container w-full max-w-md bg-[var(--bg-card)] rounded-xl shadow-[var(--shadow-md)] p-8 border border-[var(--border-color)] animate-[fadeIn_0.4s_ease-out_forwards]">
        <div className="heading text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">
          Sign Up
        </div>

        <form
          method="POST"
          onSubmit={handleSubmit(validationSuite)}
          className="form flex w-full flex-col gap-5"
        >
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

          <div className="flex justify-end">
            <span className="forgot-password text-sm">
              <button className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-200 font-medium cursor-pointer">
                Forgot Password?
              </button>
            </span>
          </div>

          <input
            className="login-button w-full cursor-pointer bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--text-inverse)] font-semibold py-3 rounded-lg transition-all duration-200 shadow-sm active:transform active:scale-[0.98]"
            type="submit"
            value="Sign Up"
          />
        </form>

        <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
          Already have an account?{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              onSwitch();
            }}
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors duration-200 font-medium cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
