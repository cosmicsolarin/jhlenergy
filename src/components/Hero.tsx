"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[100vh] min-h-[600px] text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cover.png')",
        }}
      >
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left justify-center h-full container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-shadow-lg">
            Empowering a Brighter Tomorrow with JHL
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-200 text-shadow-md">
            Your trusted partner in sustainable energy. We provide
            high-efficiency solar solutions for residential, commercial, and
            industrial needs across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-transform hover:scale-105"
              asChild
            >
              <Link href="#solutions">Our Solutions</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className=" text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full px-8 py-6 text-lg font-semibold shadow-lg transition-all hover:scale-105"
              asChild
            >
              <Link href="#quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
