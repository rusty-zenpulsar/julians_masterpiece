import { Card } from "@/components/ui/card";
import { FadeInSection } from "@/components/common/fade-in-section";

const features = [
  {
    title: "Real-Time Signals",
    description:
      "Anticipate market moves with sentiment and geopolitical insight tied to actual contracts.",
  },
  {
    title: "AI Automation",
    description: "Free analysts from repetitive research and news tracking.",
  },
  {
    title: "Strategy Testing",
    description:
      "Know how your strategies perform under stress — before capital is committed.",
  },
  {
    title: "Infrastructure, Not Dashboards",
    description:
      "We don't build dashboards. We replace legacy workflows with signal-driven infrastructure.",
  },
];

export function WhyItMatters() {
  return (
    <section id="why-it-matters" className="py-24 px-6 bg-zp-bg-blue">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zp-dark mb-6">Why It Matters</h2>
        </FadeInSection>

        <FadeInSection className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center shadow-subtle hover:shadow-card transition-all duration-300 border border-zp-border"
            >
              <div className="w-4 h-4 bg-zp-dark rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-zp-dark mb-3">{feature.title}</h3>
              <p className="text-sm text-zp-gray leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </FadeInSection>
      </div>
    </section>
  );
} 