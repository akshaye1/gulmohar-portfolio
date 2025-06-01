
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, FilmIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
      scrolled ? "bg-background/80 backdrop-blur-md shadow-lg border-b" : "bg-transparent border-transparent"
    )}>
      <div className="container flex h-header-height max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <FilmIcon className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold sm:inline-block font-headline">
            Oomkar Anil Panchal
          </span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "hover:text-primary transition-colors duration-200",
                pathname === item.href ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
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
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-accent/50">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-lg">
              <div className="flex flex-col space-y-4 p-6">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <FilmIcon className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Oomkar Anil Panchal</span>
                </Link>
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-lg hover:text-primary py-2 transition-colors duration-200",
                      pathname === item.href ? "text-primary font-semibold" : "text-foreground hover:text-primary/80"
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
