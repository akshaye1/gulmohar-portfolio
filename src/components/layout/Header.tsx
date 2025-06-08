"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import Logo from "@/../public/Gulmohar logo craft.png"; // Correct import for Next.js public assets
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        pacifico.variable,
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg border-b"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container flex h-header-height max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src={Logo}
            alt="Gulmohar Production Logo"
            width={48}
            height={48}
            priority
            className="text-primary"
          />
          <span className="text-xl font-bold sm:inline-block font-headline font-[var(--font-pacifico)]">
            Gulmohar Production
          </span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "hover:text-primary transition-colors duration-200",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2 md:flex-none">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-accent/50"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-lg"
            >
              <div className="flex flex-col space-y-4 p-6">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <Image
                    src={Logo}
                    alt="Gulmohar Production Logo"
                    width={24}
                    height={24}
                    className="text-primary"
                  />
                  <span className="font-bold font-headline">
                    Gulmohar Production
                  </span>
                </Link>
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-lg hover:text-primary py-2 transition-colors duration-200",
                      pathname === item.href
                        ? "text-primary font-semibold"
                        : "text-foreground hover:text-primary/80"
                    )}
                  >
                    <item.icon className="inline-block w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
