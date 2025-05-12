import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< Updated upstream
=======
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
>>>>>>> Stashed changes

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "University Management Dashboard",
  description: "Next.js University Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< Updated upstream
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
=======
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children} <ToastContainer position="bottom-right" theme="dark" />
        </body>
      </html>
    </ClerkProvider>
>>>>>>> Stashed changes
  );
}
