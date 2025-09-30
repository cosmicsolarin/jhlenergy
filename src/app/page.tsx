import EcoPower from "@/components/EcoPower";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import TechnologyPartners from "@/components/TechnologyPartners";
import Testimonials from "@/components/Testimonials";
import TrustedExperts from "@/components/TrustedExperts";
import Values from "@/components/Values";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustedExperts />
      <EcoPower />
      <Solutions />
      <TechnologyPartners />
      <Values />
      <Testimonials />
      <Footer />
    </>
  );
}
