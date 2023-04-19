import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Testimonials />
    </>
  );
}
