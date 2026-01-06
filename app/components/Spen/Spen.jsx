export default function Spen({ alert = false }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
        alert
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-center p-8 fixed z-10 ">
        <div
          id="wifi-loader"
          className="w-16 h-16 rounded-[50px] relative flex items-center justify-center"
        >
          <svg
            className="absolute w-[86px] h-[86px] flex items-center justify-center"
            viewBox="0 0 86 86"
          >
            <circle
              className="absolute [stroke-linejoin:round] [stroke-linecap:round] fill-none rounded-full stroke-[6px] stroke-linecap-round stroke-linejoin-round -rotate-[100deg] origin-center stroke-(--border-color) [stroke-dasharray:62.75_188.25] animate-[circle-outer_1.8s_ease_infinite_0.3s]"
              cx="43"
              cy="43"
              r="40"
            />
            <circle
              className="absolute [stroke-linejoin:round] [stroke-linecap:round] fill-none rounded-full stroke-[6px] stroke-linecap-round stroke-linejoin-round -rotate-[100deg] origin-center stroke-(--color-primary) [stroke-dasharray:62.75_188.25] animate-[circle-outer_1.8s_ease_infinite_0.15s]"
              cx="43"
              cy="43"
              r="40"
            />
            <circle
              className="absolute [stroke-linejoin:round] [stroke-linecap:round] fill-none rounded-full stroke-[6px] stroke-linecap-round stroke-linejoin-round -rotate-[100deg] origin-center stroke-(--color-primary) opacity-0 [stroke-dasharray:62.75_188.25]"
              cx="43"
              cy="43"
              r="40"
            />
          </svg>

          <svg
            className="absolute w-[60px] h-[60px] flex items-center justify-center"
            viewBox="0 0 60 60"
          >
            <circle
              className="absolute [stroke-linejoin:round] [stroke-linecap:round] fill-none rounded-full stroke-[6px] stroke-linecap-round stroke-linejoin-round -rotate-[100deg] origin-center stroke-(--border-color) [stroke-dasharray:42.5_127.5] animate-[circle-middle_1.8s_ease_infinite_0.25s]"
              cx="30"
              cy="30"
              r="27"
            />
            <circle
              className="absolute [stroke-linejoin:round] [stroke-linecap:round] fill-none rounded-full stroke-[6px] stroke-linecap-round stroke-linejoin-round -rotate-[100deg] origin-center stroke-(--color-primary) [stroke-dasharray:42.5_127.5] animate-[circle-middle_1.8s_ease_infinite_0.1s]"
              cx="30"
              cy="30"
              r="27"
            />
          </svg>

          <svg
            className="absolute w-[34px] h-[34px] flex items-center justify-center"
            viewBox="0 0 34 34"
          >
            <circle
              className="absolute [stroke-linejoin:round] [stroke-linecap:round] fill-none rounded-full stroke-[6px] stroke-linecap-round stroke-linejoin-round -rotate-[100deg] origin-center stroke-(--border-color) [stroke-dasharray:22_66] animate-[circle-inner_1.8s_ease_infinite_0.2s]"
              cx="17"
              cy="17"
              r="14"
            />
            <circle
              className="absolute [stroke-linejoin:round] [stroke-linecap:round] fill-none rounded-full stroke-[6px] stroke-linecap-round stroke-linejoin-round -rotate-[100deg] origin-center stroke-(--color-primary) [stroke-dasharray:22_66] animate-[circle-inner_1.8s_ease_infinite_0.05s]"
              cx="17"
              cy="17"
              r="14"
            />
          </svg>

          <div
            className="absolute -bottom-10 flex items-center justify-center lowercase font-bold text-sm tracking-[0.2px] 
            before:content-[attr(data-text)] before:text-(--text-secondary)
            after:content-[attr(data-text)] after:text-(--color-primary) after:animate-[wifi-text_3.6s_ease_infinite] after:absolute after:left-0"
            data-text="Loading..."
          />
        </div>
      </div>
    </div>
  );
}
