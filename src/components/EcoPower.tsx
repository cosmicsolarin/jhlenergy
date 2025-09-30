"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EcoPower = () => {
  return (
    <section className="bg-[url('/bg.png')] bg-no-repeat bg-cover h-[500px] py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center items-center w-full h-full">
          {/* Left Column: Text Content */}
          <div className="text-white space-y-6 text-center lg:text-left w-2/3">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Power that Doesn't Cost the Earth
            </h2>
            <p className="text-lg text-green-100">
              We are committed to providing sustainable energy solutions that
              not only save you money but also contribute to a healthier planet
              for future generations.
            </p>
            <Button
              className="bg-[#facc15] text-black hover:bg-brand-yellow-dark rounded-full px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              asChild
            >
              <Link href="#solutions">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoPower;
