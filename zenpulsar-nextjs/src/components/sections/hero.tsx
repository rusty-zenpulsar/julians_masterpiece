import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/common/fade-in-section";

interface HeroProps {
  onDemoClick: () => void;
}

export function Hero({ onDemoClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      <div className="max-w-5xl mx-auto text-center">
        <FadeInSection>
          <div className="mb-12">
            <Image
              src="/logo.png"
              alt="ZENPULSAR"
              width={192}
              height={96}
              className="h-18 md:h-24 w-auto mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-zp-dark leading-tight">
              COMMODITIES INTELLIGENCE
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-zp-gray mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            Actionable geopolitical intelligence and AI-powered signals for commodity traders who
            need to move faster, smarter.
          </p>
          <Button
            onClick={onDemoClick}
            size="lg"
            className="shadow-card hover:shadow-lg"
          >
            Request Demo
          </Button>
        </FadeInSection>
      </div>
    </section>
  );
} 