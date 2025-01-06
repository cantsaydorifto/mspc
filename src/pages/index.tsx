import Carousel from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import StickyCursor from "@/components/StickyCursor";
import TeamCardSection from "@/components/TeamCardSection";
import TeamSection from "@/components/TeamSection";
import { americanTypeMedium } from "@/utils/font";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    new Lenis({
      autoRaf: true,
    });
  }, []);
  return (
    <main className={`${americanTypeMedium.variable}`}>
      <StickyCursor />
      <HeroSection />
      <Carousel />
      <TeamSection />
      <TeamCardSection />
    </main>
  );
}
