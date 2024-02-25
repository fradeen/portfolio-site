import type { Metadata } from "next";
import "./globals.css";
import Body from "@/components/body/body";
import ThemeContextProvider from "@/contexts/themeContext";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Fardeen\'s porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <Body>
          {children}
        </Body>
      </ThemeContextProvider>
    </html>
  );
}
