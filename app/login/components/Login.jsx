import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faX,
  faCheck,
  faUser,
  faEnvelope,
  faPhone,
  faBriefcase,
  faShieldHalved,
  faLock,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Alert from "../../components/Alert/Alert";
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

  const onSubmit = async ({ name, email, phone, jobTitle, password }) => {
    try {
      const data = { name, email, phone, jobTitle, password };
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setSuccess(true);
      } else {
        setAlert(true);
      }
    } catch (err) {
      setAlert(true);
    }
  };

  return (
    <>
      <Alert
        alert={alert}
        setAlert={setAlert}
        onSwitch={onSwitch}
        x={true}
        icon={faX}
        color="text-red-500"
        title="Registration Failed"
        message="An account with this email already exists."
        buttonText="Try Signing In"
        link="/login"
      />

      <Alert
        alert={success}
        setAlert={setSuccess}
        onSwitch={onSwitch}
        x={false}
        icon={faCheck}
        color="text-green-500"
        title="Account Created"
        message="Your application is being reviewed. Expected time: 24h."
        buttonText="Return to Landing"
        link="/"
      />

      <div className="flex flex-col items-center gap-10 w-full max-w-2xl bg-(--bg-card)/40 backdrop-blur-2xl p-8 sm:p-12 rounded-[3.5rem] border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden group animate-[fadeIn_0.6s_ease-out_forwards]">
        {/* Floating Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-linear-to-r from-transparent via-(--color-primary) to-transparent" />

        <div className="flex flex-col items-center space-y-4 relative z-10">
          <div className="w-24 h-24 bg-linear-to-br from-indigo-500/20 to-(--color-primary)/20 rounded-full flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500">
            <FontAwesomeIcon
              icon={faUserPlus}
              className="text-5xl text-(--color-primary) drop-shadow-[0_0_15px_var(--color-primary)]"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-black tracking-tighter text-(--text-primary) uppercase">
              Registration
            </h2>
            <p className="text-[10px] uppercase tracking-[0.4em] text-(--text-muted) font-bold">
              Secure Enrollment Program
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="form flex w-full flex-col gap-10 relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            {/* Name */}
            <div className="relative group/field">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within/field:text-(--color-primary) group-hover/field:text-(--color-primary) transition-colors">
                <FontAwesomeIcon icon={faUser} className="text-xs" />
              </div>
              <input
                className="input w-full pl-12 pr-6 py-4 rounded-full border border-[var(--color-primary)]/30 bg-white/5 text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all duration-300 placeholder:text-(--text-muted)/40 font-medium"
                type="text"
                placeholder="Full Name"
                {...register("name", {
                  required: "Required",
                  minLength: { value: 3, message: "AT LEAST 3 CHARS" },
                })}
              />
              {errors.name && (
                <span className="absolute -bottom-5 left-5 text-red-500 text-[9px] font-black uppercase tracking-wider">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="relative group/field">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within/field:text-(--color-primary) group-hover/field:text-(--color-primary) transition-colors">
                <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
              </div>
              <input
                className="input w-full pl-12 pr-6 py-4 rounded-full border border-[var(--color-primary)]/30 bg-white/5 text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all duration-300 placeholder:text-(--text-muted)/40 font-medium"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "INVALID EMAIL",
                  },
                })}
              />
              {errors.email && (
                <span className="absolute -bottom-5 left-5 text-red-500 text-[9px] font-black uppercase tracking-wider">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="relative group/field">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within/field:text-(--color-primary) group-hover/field:text-(--color-primary) transition-colors">
                <FontAwesomeIcon icon={faPhone} className="text-xs" />
              </div>
              <input
                className="input w-full pl-12 pr-6 py-4 rounded-full border border-[var(--color-primary)]/30 bg-white/5 text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all duration-300 placeholder:text-(--text-muted)/40 font-medium"
                type="number"
                placeholder="Phone (WhatsApp)"
                {...register("phone", {
                  required: "Required",
                  minLength: {
                    value: 11,
                    message: "INVALID PHONE AT LEAST 11 CHARS",
                  },
                })}
              />
              {errors.phone && (
                <span className="absolute -bottom-5 left-5 text-red-500 text-[9px] font-black uppercase tracking-wider">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Job Title */}
            <div className="relative group/field">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within/field:text-(--color-primary) group-hover/field:text-(--color-primary) transition-colors">
                <FontAwesomeIcon icon={faBriefcase} className="text-xs" />
              </div>
              <input
                className="input w-full pl-12 pr-6 py-4 rounded-full border border-[var(--color-primary)]/30 bg-white/5 text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all duration-300 placeholder:text-(--text-muted)/40 font-medium"
                type="text"
                placeholder="Job Title"
                {...register("jobTitle", { required: "Required" })}
              />
              {errors.jobTitle && (
                <span className="absolute -bottom-5 left-5 text-red-500 text-[9px] font-black uppercase tracking-wider">
                  {errors.jobTitle.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="relative group/field">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within/field:text-(--color-primary) group-hover/field:text-(--color-primary) transition-colors">
                <FontAwesomeIcon icon={faLock} className="text-xs" />
              </div>
              <input
                className="input w-full pl-12 pr-12 py-4 rounded-full border border-[var(--color-primary)]/30 bg-white/5 text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all duration-300 placeholder:text-(--text-muted)/40 font-medium"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Required",
                  minLength: { value: 8, message: "Min 8 chars" },
                })}
              />
              {errors.password && (
                <span className="absolute -bottom-5 left-5 text-red-500 text-[9px] font-black uppercase tracking-wider">
                  {errors.password.message}
                </span>
              )}
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
            </div>

            {/* Confirm Password */}
            <div className="relative group/field">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within/field:text-(--color-primary) group-hover/field:text-(--color-primary) transition-colors">
                <FontAwesomeIcon icon={faShieldHalved} className="text-xs" />
              </div>
              <input
                className="input  w-full pl-12 pr-12 py-4 rounded-full border border-[var(--color-primary)]/30 bg-white/5 text-(--text-primary) focus:outline-none focus:ring-2 focus:ring-(--color-primary)/20 focus:border-(--color-primary) transition-all duration-300 placeholder:text-(--text-muted)/40 font-medium"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Required",
                  validate: (v) =>
                    v === watch("password") || "password not match",
                })}
              />
              {errors.confirmPassword && (
                <span className="absolute -bottom-5 left-5 text-red-500 text-[9px] font-black uppercase tracking-wider">
                  {errors.confirmPassword.message}
                </span>
              )}
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-(--text-muted) hover:text-(--color-primary) transition-colors"
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                  className="text-xs"
                />
              </button>
            </div>
          </div>

          <div className="p-4 bg-[var(--color-primary)]/20 rounded-4xl">
            <p className="text-[10px] text-center font-black text-(--text-muted) uppercase tracking-[0.3em]">
              Data encryption active • Processing delay: 24h
            </p>
          </div>

          <button
            className="cursor-pointer w-full relative group/btn py-5 rounded-full bg-linear-to-r from-(--color-primary) to-indigo-600 text-(--text-inverse) font-black text-xs tracking-[0.2em] uppercase transition-all duration-500 hover:shadow-[0_15px_45px_-10px_var(--color-primary)] active:scale-95 overflow-hidden"
            type="submit"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
            SEND APPLICATION
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
            Existing Member?
            <span className="text-(--color-primary) cursor-pointer">
              Direct Login
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
