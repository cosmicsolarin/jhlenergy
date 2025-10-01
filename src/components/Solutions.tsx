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

// UPDATED: Renamed water heaters, added AMC, and prepared for new images.
const solutionsData = {
  power: [
    {
      title: "On-Grid Solar Systems",
      description:
        "Reduce your electricity bills by generating your own power and exporting surplus to the grid.",
      imageUrl: "/products/ongrid.png",
      pdfUrl: "/brochures/SPS_On-Grid_Proposal_Quotation_format_2025.pdf",
    },
    {
      title: "Off-Grid Solar Systems",
      description:
        "Achieve complete energy independence with our reliable standalone power solutions.",
      imageUrl: "/products/offgrid.jpg",
      pdfUrl: "/brochures/offgrid_leaflet_Sep24.pdf",
    },
    {
      title: "Hybrid Solar Systems",
      description:
        "Combine the savings of on-grid with the security of battery backup for uninterrupted power.",
      imageUrl: "/products/hybrid.png",
      pdfUrl: "/brochures/JHL_Solar_Draft.pdf",
    },
  ],
  water: [
    {
      title: "Solar Water Heater (FPC)",
      description:
        "Durable and efficient Flat Plate Collector systems for consistent hot water supply.",
      imageUrl: "/products/waterheater.png", // New image path
      pdfUrl: "/brochures/VG_FPC_SERIES_2_PAGE_LEAFLET_CNM_V7.pdf",
    },
    {
      title: "Solar Water Heater (ETC)",
      description:
        "High-performance Evacuated Tube Collector technology for faster heating.",
      imageUrl: "/products/truhot.png", // New image path
      pdfUrl: "/brochures/TRU-HOT.pdf",
    },
    {
      title: "Heat Pump Water Heaters",
      description:
        "Energy-efficient heating using ambient air, available in various capacities for all needs.",
      imageUrl: "/products/hpwh.png",
      pdfUrl: "/brochures/HPWH_Brochure_06.pdf",
    },
  ],
  epc: [
    {
      title: "Utility-Scale Solar Plants",
      description:
        "End-to-end solutions for large-scale solar power generation projects.",
      imageUrl: "/3d/utlility.png",
      pdfUrl: "/brochures/JHL_Solar_Draft.pdf",
    },
    {
      title: "Operations & Maintenance (O&M)",
      description:
        "Comprehensive O&M services to ensure your solar assets perform optimally for decades.",
      imageUrl: "/3d/maintenance.png",
      pdfUrl: "/brochures/JHL_Solar_Draft.pdf",
    },
    {
      title: "Annual Maintenance Contract (AMC)",
      description:
        "Ensure your solar investment performs optimally year-round with our comprehensive AMC services for all brands.",
      imageUrl: "/3d/amc.png", // Re-using maintenance image
      pdfUrl: "/brochures/JHL_Solar_Draft.pdf",
    },
  ],
};

// UPDATED: Added "All" tab
const tabs = [
  { id: "all", label: "All Products & Services" },
  { id: "power", label: "Solar Power Systems" },
  { id: "water", label: "Water Heating" },
  { id: "epc", label: "EPC & Services" },
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const allProducts = [
    ...solutionsData.power,
    ...solutionsData.water,
    ...solutionsData.epc,
  ];

  const updateIndicator = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setIndicatorStyle({}); // Reset style on mobile
      return;
    }

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

        {/* UPDATED: Tabs container to accommodate 4 tabs */}
        <div className="relative w-full max-w-3xl mx-auto bg-gray-100 rounded-xl sm:rounded-full p-1.5 mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabsRef.current[index] = el;
                }}
                onClick={() => setActiveTab(tab.id)}
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
          <div
            className="absolute top-1.5 h-[calc(100%-0.75rem)] bg-[#facc15] rounded-full shadow-md transition-all duration-300 ease-in-out hidden sm:block"
            style={indicatorStyle}
          />
        </div>

        {/* UPDATED: Content rendering to include the "all" tab */}
        <div>
          {activeTab === "all" && <TabContent data={allProducts} />}
          {activeTab === "power" && <TabContent data={solutionsData.power} />}
          {activeTab === "water" && <TabContent data={solutionsData.water} />}
          {activeTab === "epc" && <TabContent data={solutionsData.epc} />}
        </div>
      </div>
    </section>
  );
};

const TabContent = ({ data, columns = "lg:grid-cols-3" }: TabContentProps) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-2 ${columns} gap-8 max-w-6xl mx-auto`}
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
            className="w-full border-gray-300 hover:bg-[#facc15]"
          >
            Download Brochure
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default Solutions;
