import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { IntelligenceLayer } from "@/components/IntelligenceLayer";
import { Nav } from "@/components/Nav";
import { Problem } from "@/components/Problem";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <IntelligenceLayer />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
