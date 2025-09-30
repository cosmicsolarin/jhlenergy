"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SolutionCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
};

type TabContentProps = {
  data: SolutionCardProps[];
  columns?: string;
};

const solutionsData = {
  power: [
    {
      title: "On-Grid Solar Systems",
      description:
        "Reduce your electricity bills by generating your own power and exporting surplus to the grid.",
      imageUrl: "/products/ongrid.png",
      pdfUrl: "/brochures/SPS _ On-Grid _ Proposal _ Quotation format 2025.pdf",
    },
    {
      title: "Off-Grid Solar Systems",
      description:
        "Achieve complete energy independence with our reliable standalone power solutions.",
      imageUrl: "/products/offgrid.jpg",
      pdfUrl: "/brochures/offgrid leaflet Sep24.pdf",
    },
    {
      title: "Hybrid Solar Systems",
      description:
        "Combine the savings of on-grid with the security of battery backup for uninterrupted power.",
      imageUrl: "/products/hybrid.png",
      pdfUrl: "/brochures/JHL Solar Draft.pdf",
    },
  ],
  water: [
    {
      title: "VG FPC Series Solar Water Heaters",
      description:
        "Durable and efficient Flat Plate Collector systems for consistent hot water supply.",
      imageUrl: "/products/waterheater.png",
      pdfUrl: "/brochures/VG_FPC SERIES_ 2 PAGE LEAFLET_CNM_V7.pdf",
    },
    {
      title: "TRU-HOT (ETC) Solar Water Heaters",
      description:
        "High-performance Evacuated Tube Collector technology for faster heating.",
      imageUrl: "/products/truhot.png",
      pdfUrl: "/brochures/TRU-HOT .pdf",
    },
    {
      title: "Heat Pump Water Heaters",
      description:
        "Energy-efficient heating using ambient air, available in various capacities for all needs.",
      imageUrl: "/products/hpwh.png",
      pdfUrl: "/brochures/HPWH_Brochure 06.pdf",
    },
  ],
  epc: [
    {
      title: "Utility-Scale Solar Plants",
      description:
        "End-to-end solutions for large-scale solar power generation projects.",
      imageUrl: "/products/hybrid.png",
      pdfUrl: "/brochures/JHL Solar Draft.pdf",
    },
    {
      title: "Operations & Maintenance (O&M)",
      description:
        "Comprehensive O&M services to ensure your solar assets perform optimally for decades.",
      imageUrl: "/products/hybrid.png",
      pdfUrl: "/brochures/JHL Solar Draft.pdf",
    },
  ],
};

const tabs = [
  { id: "power", label: "Solar Power Systems" },
  { id: "water", label: "Water Heating" },
  { id: "epc", label: "EPC & Services" },
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Using useCallback to memoize the function
  const updateIndicator = useCallback(() => {
    // Only run this logic on screens wider than the 'sm' breakpoint (640px)
    if (window.innerWidth < 640) return;

    const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const activeTabElem = tabsRef.current[activeTabIndex];
    if (activeTabElem) {
      setIndicatorStyle({
        left: activeTabElem.offsetLeft,
        width: activeTabElem.offsetWidth,
      });
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    // Add a resize listener to recalculate position on window resize
    window.addEventListener("resize", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeTab, updateIndicator]);

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Our Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of high-performance, tailor-made energy solutions
            for every need.
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto bg-gray-100 rounded-xl sm:rounded-full p-1.5 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabsRef.current[index] = el;
                }}
                onClick={() => setActiveTab(tab.id)}
                // UPDATED: Added conditional classes for mobile vs desktop active state
                className={`relative z-10 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 
                  ${
                    activeTab === tab.id
                      ? "text-gray-900 sm:text-gray-900 bg-[#facc15] sm:bg-transparent"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* UPDATED: Hide the sliding indicator on small screens */}
          <div
            className="absolute top-1.5 h-[calc(100%-0.75rem)] bg-[#facc15] rounded-full shadow-md transition-all duration-300 ease-in-out hidden sm:block"
            style={indicatorStyle}
          />
        </div>

        <div>
          {activeTab === "power" && <TabContent data={solutionsData.power} />}
          {activeTab === "water" && <TabContent data={solutionsData.water} />}
          {activeTab === "epc" && (
            <TabContent data={solutionsData.epc} columns="lg:grid-cols-2" />
          )}
        </div>
      </div>
    </section>
  );
};

const TabContent = ({ data, columns = "lg:grid-cols-3" }: TabContentProps) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-2 ${columns} gap-8 max-w-4xl mx-auto`}
  >
    {data.map((item) => (
      <SolutionCard key={item.title} {...item} />
    ))}
  </div>
);

const SolutionCard = ({
  title,
  description,
  imageUrl,
  pdfUrl,
}: SolutionCardProps) => {
  const downloadFilename = `${title
    .replace(/[^a-zA-Z0-9]/g, "-")
    .replace(/-+/g, "-")}-Brochure.pdf`;

  return (
    <Card className="overflow-hidden flex flex-col group transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 p-0">
      <CardHeader className="p-0">
        <div className="relative h-60 w-full">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105 object-bottom"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-bold mb-2 text-gray-800">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <a href={pdfUrl} download={downloadFilename} className="w-full">
          <Button
            variant="outline"
            className="w-full border-gray-300 hover:bg-gray-100"
          >
            Download Brochure
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default Solutions;
