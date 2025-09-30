"use client";
import React from "react";
import Image from "next/image";

const TechnologyPartners = () => {
  return (
    <section className="py-16 sm:py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Our Technology Partners
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with industry leaders to bring you the most reliable and
            technologically advanced solar and energy solutions.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="p-4 rounded-4xl">
            {/* CORRECTED: Switched to a reliable PNG version of the logo */}
            <Image
              src="/vguard.jpg"
              alt="V-Guard Logo"
              width={200}
              height={100}
              className="object-contain rounded-4xl"
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 italic">
            JHL Energy LLP is an Authorised Distributor of V-Guard Industries
            Ltd.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
