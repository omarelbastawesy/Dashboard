import Link from "next/link";
import Spen from "./components/Spen/Spen";

export default async function Home() {

  return (
    <div className="min-h-screen bg-[var(--bg-main)]">
      this is web app for dashboard
      <Link href="/login">login</Link>
      <Spen />
    </div>
  );
}
