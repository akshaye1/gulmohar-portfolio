import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter, Fahkwang } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fahkwang = Fahkwang({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fahkwang",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gulmohar Production - Video Production & Creative Services",
  description:
    "Portfolio of Gulmohar Production, specializing in video editing, motion graphics design, color correction, VFX, sound design, and 2D/3D animation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fahkwang.variable} font-sans`}
    >
      <head />
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 animate-fadeInUp animation-delay-200">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
