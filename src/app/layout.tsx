import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import prisma from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const user = await prisma.user.findFirstOrThrow({})
  return {
    title: `${user.name}'s Portfolio`,
    description: "",
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/logo.svg',
          href: '/logo.svg',
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: '/logo_light.svg',
          href: '/logo_light.svg',
        },
      ],
    },
    keywords: user.tags
  }
}

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
      <body className={`${inter.className} min-h-screen min-w-full flex flex-col justify-stretch dark:bg-black dark:text-white dark:shadow-white/50 shadow-black/50 prose dark:prose-invert prose-xl md:prose-2xl prose-img:m-0 prose-a:no-underline prose-headings:m-0 text-justify`}>
        <NavBar home={user.home} />
        {children}
      </body>
    </html>
  );
}
