'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';

export function Header() {
  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link
        href="/"
        className="flex title-font font-medium items-center text-gray-900 dark:text-gray-200 mb-4 md:mb-0"
      >
        <span className="ml-3 text-xl font-poppins">IDNASIRASIRA</span>
      </Link>
      <nav className="hidden md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center">
        <Link
          href="#home"
          className="mr-5 hover:text-blue-600 dark:text-gray-200 transition-all duration-300 tracking-tight cursor-pointer hover:border-b-2 hover:border-blue-500"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="mr-5 hover:text-blue-600 dark:text-gray-200 transition-all duration-300 tracking-tight cursor-pointer hover:border-b-2 hover:border-blue-500"
        >
          About
        </Link>
        <Link
          href="#skills"
          className="mr-5 hover:text-blue-600 dark:text-gray-200 transition-all duration-300 tracking-tight cursor-pointer hover:border-b-2 hover:border-blue-500"
        >
          Skills
        </Link>
        <Link
          href="#experiences"
          className="mr-5 hover:text-blue-600 dark:text-gray-200 transition-all duration-300 tracking-tight cursor-pointer hover:border-b-2 hover:border-blue-500"
        >
          Experiences
        </Link>
        <Link
          href="#projects"
          className="mr-5 hover:text-blue-600 dark:text-gray-200 transition-all duration-300 tracking-tight cursor-pointer hover:border-b-2 hover:border-blue-500"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="mr-5 hover:text-blue-600 dark:text-gray-200 transition-all duration-300 tracking-tight cursor-pointer hover:border-b-2 hover:border-blue-500"
        >
          Contact
        </Link>
      </nav>

      {/* <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button> */}
      <ModeToggle />
    </header>
  );
}

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
