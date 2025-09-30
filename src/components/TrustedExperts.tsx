"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const TrustedExperts = () => {
  return (
    <section className="py-16 sm:py-20 bg-brand-off-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          {/* UPDATED: Added text-center for mobile and lg:text-left for desktop */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
              Trusted Solar Energy Experts Across India
            </h2>
            <p className="text-gray-600 text-lg">
              We leverage our deep industry knowledge and cutting-edge
              technology to deliver high-performance solar solutions.
            </p>
            {/* UPDATED: Centered the list on mobile, aligned left on desktop */}
            <ul className="space-y-4 w-fit mx-auto lg:mx-0">
              <li className="flex items-center">
                <CheckCircle2 className="text-brand-green mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  MNRE Approved National Vendor
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-brand-green mr-3 flex-shrink-0" />
                <span className="text-gray-700">30+ Years Panel Warranty</span>
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-brand-green mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Pan-India Service Coverage
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column: Image and Stats */}
          {/* UPDATED: This container now manages stacking and centering on mobile */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <Image
              src="/trusted.png"
              alt="Stylized 3D rendering of a green earth with solar panels"
              width={600}
              height={600}
              className="rounded-2xl object-cover shadow-2xl"
            />
            {/* UPDATED: Switched from absolute to relative on mobile for proper stacking */}
            <div
              className="relative -mt-12 mx-auto w-[90%] bg-[#facc15] text-gray-800 p-6 rounded-2xl shadow-xl
                           lg:absolute lg:-bottom-8 lg:-left-8 lg:mt-0 lg:w-auto lg:max-w-xs"
            >
              <div className="flex flex-col space-y-2 text-center lg:text-left">
                <div>
                  <p className="font-bold text-3xl">25+</p>
                  <p className="text-sm">Years of Experience</p>
                </div>
                <div>
                  <p className="font-bold text-3xl">1.2 GW+</p>
                  <p className="text-sm">Installed Capacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedExperts;
