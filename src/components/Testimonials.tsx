"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "We're saving ₹5,000+ every month and tracking everything on the app. Excellent support too!",
    author: "Rohan Sharma",
    title: "Homeowner, Whitefield",
    avatarUrl: "https://avatar.iran.liara.run/public", // Placeholder path, add images to public/avatars/
  },
  {
    quote:
      "As a business, cutting operational costs is key. JHL's commercial rooftop system was a smart investment. The installation was quick, and the performance has exceeded our expectations.",
    author: "Priya Menon",
    title: "Operations Manager, Peenya",
    avatarUrl: "https://avatar.iran.liara.run/public",
  },
  {
    quote:
      "We needed a reliable off-grid solution for our farm, and JHL delivered. Their system provides consistent power for our irrigation pumps and facilities. Their service is top-notch.",
    author: "Ankit Patel",
    title: "Farm Owner, near Hosur",
    avatarUrl: "https://avatar.iran.liara.run/public",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextTestimonial = () => {
    const isLast = currentIndex === testimonials.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-16 sm:py-24 text-black bg-green-50">
      <div className="container mx-auto px-4  p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <FaQuoteLeft className="text-5xl text-[#3CAB90]" />
            <h2 className="text-4xl sm:text-5xl font-extrabold ">
              What they say about JHL
            </h2>
            <p className="text-gray-400 text-lg">
              More than 3000 people have been helped by JHL.
            </p>
          </div>

          {/* Right Column (Carousel) */}
          <div className="relative">
            <Card className="bg-[#3CAB90] border-0 text-white w-full shadow-lg rounded-2xl p-8 sm:p-10 min-h-[350px] flex flex-col justify-between">
              {/* Top Section with Pagination */}
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm text-green-100">What they say</p>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentIndex === index ? "bg-white" : "bg-white/40"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Animated Content Wrapper */}
              {/* UPDATED: Added a key prop and animation classes.
                  Changing the key tells React to re-render this component,
                  which re-triggers the fade-in animation.
              */}
              <div
                key={currentIndex}
                className="animate-in fade-in duration-500"
              >
                {/* Main Content */}
                <CardContent className="p-0 flex-grow flex flex-col justify-center">
                  <p className="text-xl sm:text-2xl font-medium leading-relaxed">
                    {testimonials[currentIndex].quote}
                  </p>
                </CardContent>

                {/* Author and Navigation */}
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonials[currentIndex].avatarUrl}
                      alt={testimonials[currentIndex].author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-sm text-green-100">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={prevTestimonial}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
