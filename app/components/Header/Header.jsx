import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({
  children,
  head,
  blueHead,
  icon,
  info,
  notice,
}) {
  return (
    <div className="relative mt-6!">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-(--text-primary) mb-2">
            {head}{" "}
            <span className="text-(--color-primary) drop-shadow-[0_0_15px_var(--color-primary)]">
              {blueHead}
            </span>
          </h1>
          <p className="text-(--text-secondary) font-medium tracking-wide flex items-center gap-2 text-sm sm:text-base">
            <FontAwesomeIcon icon={icon} className="text-(--color-primary)" />
            {info}{" "}
            <span className="text-(--success) font-black uppercase tracking-widest text-[10px] sm:text-xs">
              {notice}
            </span>
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
