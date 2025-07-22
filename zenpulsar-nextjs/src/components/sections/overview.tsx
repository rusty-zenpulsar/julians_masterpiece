import { Card } from "@/components/ui/card";
import { FadeInSection } from "@/components/common/fade-in-section";
import { statistics } from "@/lib/constants";

export function Overview() {
  return (
    <section id="overview" className="py-24 px-6 bg-zp-bg-light">
      <div className="max-w-5xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zp-dark mb-6">
            Intelligence-First Commodity Trading
          </h2>
        </FadeInSection>

        <FadeInSection className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-zp-gray leading-relaxed">
              ZENPULSAR delivers real-time, AI-powered intelligence for commodity trading and risk
              management. We transform global news, geopolitical events, and policy signals into
              structured, strategy-ready insights. Our sentiment feeds and modular AI agents help
              traders act faster, validate positions, and stay ahead of risk in volatile markets.
            </p>
          </div>

          <Card className="p-8 shadow-subtle hover:shadow-card transition-all duration-300 border border-zp-border">
            <div className="space-y-4">
              {statistics.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-zp-dark rounded-full mr-4"></div>
                  <span className="text-sm font-medium text-zp-dark">
                    {stat.value} {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </FadeInSection>
      </div>
    </section>
  );
} 