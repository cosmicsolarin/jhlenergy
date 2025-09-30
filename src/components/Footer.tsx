"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  // Get the current year for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 pt-16 sm:pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About JHL Energy */}
          <div className="space-y-4 text-center md:text-left">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start space-x-2"
            >
              <span className="font-bold text-2xl text-white">JHL</span>
              <span className="font-semibold text-xl text-gray-300">
                Energy
              </span>
            </Link>
            <p className="text-sm">
              Powering a sustainable future with reliable and efficient solar
              energy solutions across India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-white mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block hover:text-yellow-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block hover:text-yellow-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#solutions"
                className="block hover:text-yellow-400 transition-colors"
              >
                Solutions
              </Link>
              <Link
                href="#testimonials"
                className="block hover:text-yellow-400 transition-colors"
              >
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Column 3: Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start">
                <MapPin
                  size={20}
                  className="text-yellow-400 mt-1 mr-3 flex-shrink-0"
                />
                <p className="text-sm">
                  #13, 2nd Cross Pillareddy Layout, Near Indian Oil Petrol Bunk,
                  Chandapura, Bengaluru - 560099
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone size={18} className="text-yellow-400 mr-3" />
                <a
                  href="tel:7034455488"
                  className="hover:text-yellow-400 transition-colors text-sm"
                >
                  70344 55488
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail size={18} className="text-yellow-400 mr-3" />
                <a
                  href="mailto:sales@jhlenergyllp.com"
                  className="hover:text-yellow-400 transition-colors text-sm"
                >
                  sales@jhlenergyllp.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="text-center md:text-left" id="quote">
            <h3 className="font-bold text-lg text-white mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest news and offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 border-gray-600 text-white"
              />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center">
            &copy; {currentYear} JHL Energy LLP. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
