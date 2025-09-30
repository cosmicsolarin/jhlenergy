import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingButtons from "@/components/FloatingButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Create a CSS variable for the font
});

export const metadata: Metadata = {
  title: "JHL Energy LLP - Powering a Sustainable Future",
  description:
    "Your trusted partner for On-Grid, Off-Grid, and Solar Water Heating solutions across India. MNRE approved national vendor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font variable to the body */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased !scroll-smooth",
          inter.variable
        )}
      >
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
