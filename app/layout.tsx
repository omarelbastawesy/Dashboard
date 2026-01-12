import "./globals.css";
import ClientLayout from "./ClientLayout";
import Background from "./components/Background/Background"

export const metadata = {
  title: "Dashboard",
  description: "Modern Admin Dashboard",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <Background />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
