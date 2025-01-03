import Carousel from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import StickyCursor from "@/components/StickyCursor";
import { americanTypeMedium } from "@/utils/font";

export default function Home() {
  return (
    <main className={`${americanTypeMedium.variable}`}>
      <StickyCursor />
      <HeroSection />
      <Carousel />
    </main>
  );
}
