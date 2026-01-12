import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faLock,
  faCheck,
  faX,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Alert from "../../components/Alert/Alert";

export default function Signup({ onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validationSuite = async (data) => {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.success && res.ok) {
      setSuccess(true);
    } else {
      setAlert(true);
    }
  };

  return (
    <>
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

      <div className="flex flex-col items-center justify-between gap-10 w-full max-w-md bg-(--bg-card)/40 backdrop-blur-2xl p-10 sm:p-12 rounded-[3.5rem] border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden group animate-[fadeIn_0.6s_ease-out_forwards]">
        {/* Floating Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-transparent via-(--color-primary) to-transparent" />

        <div className="flex flex-col items-center space-y-4 relative z-10">
          <div className="w-20 h-20 bg-linear-to-br from-(--color-primary)/20 to-indigo-500/20 rounded-full flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-4xl text-(--color-primary) drop-shadow-[0_0_15px_var(--color-primary)]"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-black tracking-tighter text-(--text-primary)">
              AUTHENTICATION
            </h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-(--text-muted) font-bold">
              Secure Access Portal
            </p>
          </div>
        </div>

        <form
          method="POST"
          onSubmit={handleSubmit(validationSuite)}
          className="form flex w-full flex-col gap-6 relative z-10"
        >
          <div className="relative group/field">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within/field:text-(--color-primary) group-hover/field:text-(--color-primary) transition-colors">
              <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
            </div>
            <input
              className="input w-full pl-12 pr-6 py-4 rounded-full border border-[var(--color-primary)]/30 bg-white/5 text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all duration-300 placeholder:text-(--text-muted)/40 font-medium"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid Email",
                },
              })}
            />
            {errors.email && (
              <span className="absolute -bottom-5 left-6 text-red-500 text-[9px] font-black uppercase tracking-wider">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="relative group/field">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within/field:text-(--color-primary) group-hover/field:text-(--color-primary) transition-colors">
              <FontAwesomeIcon icon={faLock} className="text-sm" />
            </div>
            <input
              className="input w-full pl-12 pr-12 py-4 rounded-full border border-[var(--color-primary)]/30 bg-white/5 text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all duration-300 placeholder:text-(--text-muted)/40 font-medium"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Required",
                minLength: { value: 8, message: "Min 8 Chars" },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-(--text-muted) hover:text-(--color-primary) transition-colors"
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="text-xs"
              />
            </button>
            {errors.password && (
              <span className="absolute -bottom-5 left-6 text-red-500 text-[9px] font-black uppercase tracking-wider">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex justify-center mt-2">
            <button
              type="button"
              className="text-[10px] cursor-pointer font-black uppercase tracking-widest text-(--text-muted) hover:text-(--color-primary) transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <button
            className="cursor-pointer w-full relative group/btn py-4.5 rounded-full bg-linear-to-r from-(--color-primary) to-indigo-600 text-(--text-inverse) font-black text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:shadow-[0_15px_40px_-10px_var(--color-primary)] active:scale-95 overflow-hidden"
            type="submit"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
            Initialize Login
          </button>
        </form>

        <div className="relative z-10 text-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              onSwitch();
            }}
            className="text-[10px] font-black uppercase tracking-widest text-(--text-muted) hover:text-(--text-primary) transition-colors border-b border-white/10 pb-1"
          >
            No Account?{" "}
            <span className="text-(--color-primary) cursor-pointer">Register Here</span>
          </button>
        </div>
      </div>
    </>
  );
}
