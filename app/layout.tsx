import "./globals.css";
import ClientLayout from "./ClientLayout";
import Background from "./components/Background/Background";
import { UserProvider } from "./components/GetUser/UserPovider";

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
        <ClientLayout>
          <UserProvider>{children}</UserProvider>
        </ClientLayout>
      </body>
    </html>
  );
}
