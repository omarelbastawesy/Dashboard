export default function Container({ children }) {
  return (
    <div className="min-h-screen p-1.5 animate-[fadeIn_0.5s_ease-out]">
      {children}
    </div>
  );
}
