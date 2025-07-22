import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInSection } from "@/components/common/fade-in-section";

const offerings = [
  {
    title: "News & Sentiment-Based Trading Signals",
    features: [
      "Extracted from 3M+ articles daily in 185 languages using NLP and LLMs",
      "Each article scored as bullish or bearish, with confidence levels",
      "Covers metals (copper, aluminium), fertilizers, sugar, grains, and energy",
      "Captures disruptions like strikes, export bans, sanctions, and weather",
      "Proven correlation with intraday and T-day price movements",
      "API/MCP integration-ready, ingestible into internal models",
    ],
  },
  {
    title: "Geopolitical & Tariff Risk Factor Matrix",
    features: [
      "Stress-test strategies against war, sanctions, regime instability, and trade shocks",
      "Real-time political risk signals, not static macro overlays",
      "Built-in taxonomy of triggers: tariffs, export bans, regulatory changes",
      "Use for scenario modeling, volatility forecasts, and regional hedging",
      "Developed with launch partners including Impro.Ai",
    ],
  },
  {
    title: "Multi-Agent AI Systems",
    features: [
      "Custom AI agents built for commodity-specific research",
      "Agents automate tasks like PDF parsing, price tracking, news summarization",
      "Examples: Urea quote tracker, Rice market agent, Argus parser for fertilizer pricing",
      "Replaces PDFs, emails, and fragmented workflows",
    ],
  },
];

export function Offerings() {
  return (
    <section id="offerings" className="py-24 px-6 bg-zp-bg-subtle">
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-zp-dark mb-4">Core Offerings</h2>
          <p className="text-lg text-zp-gray max-w-2xl mx-auto">
            Comprehensive intelligence solutions designed for modern commodity trading
          </p>
        </FadeInSection>

        <FadeInSection className="grid lg:grid-cols-3 gap-10">
          {offerings.map((offering, index) => (
            <Card
              key={index}
              className="shadow-card border border-zp-border p-10 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="h-full flex flex-col">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl font-bold text-zp-dark leading-tight">
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <ul className="space-y-4 text-zp-gray">
                    {offering.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-zp-dark rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </Card>
          ))}
        </FadeInSection>
      </div>
    </section>
  );
} 