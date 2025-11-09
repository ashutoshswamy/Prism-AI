import type { Metadata } from "next";
import { Sixtyfour, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sixtyfour = Sixtyfour({
  variable: "--font-sixtyfour",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prism AI - AI-Powered Design Assistant",
  description: "Generate beautiful design suggestions with AI. Get color palettes, fonts, layouts, and code snippets instantly.",
  icons: {
    icon: "/prism-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sixtyfour.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
