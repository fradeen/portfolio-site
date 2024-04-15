import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import prisma from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fardeen's portfolio",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await prisma.user.findFirstOrThrow({
    select: {
      home: true
    }
  })
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen min-w-full flex flex-col justify-stretch dark:bg-black dark:text-white dark:shadow-white/50 shadow-black/50`}>
        <NavBar home={user.home} />
        {children}
      </body>
    </html>
  );
}
