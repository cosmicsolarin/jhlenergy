"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, useTexture } from "@react-three/drei";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = { title: string; imageUrl: string };

const products: Product[] = [
  { title: "On-Grid Systems", imageUrl: "/3d/ongrid.png" },
  { title: "Off-Grid Systems", imageUrl: "/3d/offgrid.png" },
  { title: "Hybrid Systems", imageUrl: "/3d/hybrid.png" },
  { title: "Solar Water Heater (FPC)", imageUrl: "/3d/fpc.png" },
  { title: "Solar Water Heater (ETC)", imageUrl: "/3d/etc.png" },
  { title: "Heat Pump Water Heaters", imageUrl: "/3d/hpwh.png" },
  { title: "Utility-Scale Plants", imageUrl: "/3d/utlility.png" },
  { title: "O & M", imageUrl: "/3d/maintenance.png" },
  { title: "Annual Maintenance (AMC)", imageUrl: "/3d/amc.png" },
];

const CARD_WIDTH = 6;
const CARD_HEIGHT = 7;
const GAP = -0.2;

const getCircularDist = (index: number, active: number, total: number) => {
  let dist = index - active;
  if (dist > total / 2) dist -= total;
  if (dist < -total / 2) dist += total;
  return dist;
};

const CarouselCard = React.memo(function CarouselCard({
  product,
  index,
  activeIndex,
  total,
  onSelect,
}: {
  product: Product;
  index: number;
  activeIndex: number;
  total: number;
  onSelect: (i: number) => void;
}) {
  const ref = React.useRef<THREE.Group>(null!);
  const texture = useTexture(product.imageUrl);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const smooth = Math.min(1, delta * 6);

    const dist = getCircularDist(index, activeIndex, total);
    const targetX = dist * (CARD_WIDTH + GAP);
    const targetZ = -Math.abs(dist) * 1.5;
    const targetRotY = dist * -0.15;
    const targetScale = Math.max(0.5, 1 - Math.abs(dist) * 0.15);

    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      targetX,
      smooth
    );
    ref.current.position.z = THREE.MathUtils.lerp(
      ref.current.position.z,
      targetZ,
      smooth
    );
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      targetRotY,
      smooth
    );
    const s = THREE.MathUtils.lerp(ref.current.scale.x, targetScale, smooth);
    ref.current.scale.set(s, s, s);
  });

  return (
    <group ref={ref} onClick={() => onSelect(index)}>
      <mesh>
        <planeGeometry args={[CARD_WIDTH, CARD_HEIGHT]} />
        <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
      </mesh>
      <Text
        position={[0, -CARD_HEIGHT / 2 - 0.35, 0.1]}
        fontSize={0.28}
        fontWeight={600}
        color="#1c1c1c"
        anchorX="center"
        anchorY="middle"
      >
        {product.title}
      </Text>
    </group>
  );
});

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % products.length),
      3000
    );
    return () => clearInterval(interval);
  }, [isHovered]);

  // Drag / swipe
  const bind = useDrag(
    ({
      down,
      movement: [mx],
      velocity: [vx],
      direction: [dx],
      memo = activeIndex,
    }) => {
      if (!down) {
        let newIndex = memo;
        if (Math.abs(vx) > 0.3) newIndex = memo - Math.sign(dx);
        else newIndex = Math.round(memo - (mx / (CARD_WIDTH + GAP)) * 1.5);
        setActiveIndex(
          ((newIndex % products.length) + products.length) % products.length
        );
      }
      return memo;
    }
  );

  return (
    <section
      id="solutions-carousel"
      className="py-16 sm:py-20 bg-green-50 text-gray-900 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Explore Our Products and Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Swipe or use the arrows to navigate through our innovative product
            line.
          </p>
        </div>

        <div
          className="relative h-[420px] w-full cursor-grab active:cursor-grabbing"
          {...bind()}
        >
          <Canvas camera={{ position: [0, 0, 15], fov: 30 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.7} />
            <spotLight
              position={[0, 15, 15]}
              angle={0.3}
              penumbra={1}
              intensity={1.2}
            />

            {products.map((p, i) => {
              if (
                Math.abs(getCircularDist(i, activeIndex, products.length)) > 2
              )
                return null;
              return (
                <CarouselCard
                  key={i}
                  product={p}
                  index={i}
                  activeIndex={activeIndex}
                  total={products.length}
                  onSelect={setActiveIndex}
                />
              );
            })}
          </Canvas>
        </div>

        <div className="relative flex justify-center items-center mt-8 gap-4">
          <Button
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + products.length) % products.length
              )
            }
            variant="outline"
            size="icon"
            className="bg-white border-white hover:bg-white/20 text-gray-900 rounded-full"
            aria-label="Previous product"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % products.length)
            }
            variant="outline"
            size="icon"
            className="bg-white border-white hover:bg-white/20 text-gray-900 rounded-full"
            aria-label="Next product"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
