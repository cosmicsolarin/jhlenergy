"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  // State to manage the mobile menu's open/closed status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // UPDATED: Removed bg-white/80 and backdrop-blur-md for a solid background
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src={"/logo.png"}
            className="relative"
            alt="Logo"
            height={200}
            width={200}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-600 hover:text-green-700 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-600 hover:text-green-700 transition-colors"
          >
            About
          </Link>
          <Link
            href="#solutions"
            className="text-gray-600 hover:text-green-700 transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#contact"
            className="text-gray-600 hover:text-green-700 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button & Mobile Menu Icon */}
        <div className="flex items-center">
          <Button
            className="hidden sm:inline-flex bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-6 py-2 shadow-md hover:shadow-lg transition-all"
            asChild
          >
            <Link href="#quote">Get a Quote</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden ml-4 text-gray-700 z-50"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in-20 slide-in-from-top-4 duration-300">
          <Link
            href="/"
            className="text-2xl text-gray-700 hover:text-green-700 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-2xl text-gray-700 hover:text-green-700 transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#solutions"
            className="text-2xl text-gray-700 hover:text-green-700 transition-colors"
            onClick={toggleMenu}
          >
            Solutions
          </Link>
          <Link
            href="#contact"
            className="text-2xl text-gray-700 hover:text-green-700 transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Button
            className="bg-yellow-400 text-black hover:bg-yellow-500 rounded-full px-8 py-4 text-lg shadow-md hover:shadow-lg transition-all mt-8"
            asChild
          >
            <Link href="#quote" onClick={toggleMenu}>
              Get a Quote
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
