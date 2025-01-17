import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import prisma from "@/lib/db";
import imgUrlGenerator from "@/lib/imgUrlGenerator";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const user = await prisma.user.findFirstOrThrow({})

  return {
    title: `${user.name}'s Portfolio`,
    description: `Hi, I'm ${user.name}. ${user.intro}`,
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
    keywords: user.tags,
    openGraph: {
      title: `${user.name}'s Portfolio`,
      description: `Hi, I'm ${user.name}. ${user.intro}`,
      images: [
        {
          url: imgUrlGenerator({ src: user.avatarSrc, width: 720 })
        }
      ],
      tags: user.tags
    },
    twitter: {
      title: `${user.name}'s Portfolio`,
      description: `Hi, I'm ${user.name}. ${user.intro}`,
      images: [
        {
          url: imgUrlGenerator({ src: user.avatarSrc, width: 720 })
        }
      ]
    },
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
      <body className={`${inter.className} min-h-screen min-w-full flex flex-col justify-stretch dark:bg-black dark:text-white dark:shadow-white/50 shadow-black/50 prose dark:prose-invert prose-xl md:prose-2xl `}>
        <NavBar home={user.home} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
