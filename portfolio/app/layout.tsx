import type { Metadata } from "next";
import { Space_Grotesk, Syne, Instrument_Serif } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Charlie McCormick — Portfolio",
  description: "Portfolio of Charlie McCormick, Design Strategist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${syne.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground`}
      >
        <Nav />

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
