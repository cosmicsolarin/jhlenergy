"use client";
import React from "react";
import { Lightbulb, Leaf, Users } from "lucide-react";

// Data for the values section for easy editing
const valuesData = [
  {
    icon: <Lightbulb size={32} className="text-green-700" />,
    title: "Innovation",
    description:
      "We are constantly exploring new technologies to provide the most efficient, reliable, and advanced solar solutions for our customers.",
  },
  {
    icon: <Leaf size={32} className="text-green-700" />,
    title: "Sustainability",
    description:
      "Our commitment to the planet is at the core of everything we do. We empower communities to reduce their carbon footprint with clean energy.",
  },
  {
    icon: <Users size={32} className="text-green-700" />,
    title: "Community",
    description:
      "We believe in building lasting relationships with our customers, providing exceptional service and support throughout their solar journey.",
  },
];

const Values = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Our Core Values
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide our work and our commitment to a
            sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {valuesData.map((value) => (
            <div
              key={value.title}
              className="text-center p-6 rounded-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-4">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
