import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInSection } from "@/components/common/fade-in-section";

const pricingPlans = [
  {
    title: "Sentiment Feed",
    price: "Custom",
    subtitle: "pricing",
    description:
      "Daily or intraday signals by commodity and region with confidence scores. API-ready.",
    features: ["Real-time data feeds", "Confidence scoring", "API integration"],
  },
  {
    title: "AI Agent Systems",
    price: "Custom",
    subtitle: "pricing",
    description:
      "Modular AI agents for parsing, summarizing, and monitoring. Custom-built or templated.",
    features: ["Custom AI agents", "Workflow automation", "Pipeline integration"],
  },
  {
    title: "Geopolitical Risk Matrix",
    price: "Custom",
    subtitle: "pricing",
    description:
      "Live geopolitical risk overlay for strategy validation. Early access available.",
    features: ["Strategy testing", "Risk assessment", "Early access program"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-zp-bg-subtle">
      <div className="max-w-6xl mx-auto">
        <FadeInSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-zp-dark mb-4">Pricing</h2>
          <p className="text-lg text-zp-gray max-w-2xl mx-auto">
            Flexible pricing tailored to your specific intelligence needs
          </p>
        </FadeInSection>

        <FadeInSection className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className="shadow-card border border-zp-border p-10 text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl font-bold text-zp-dark mb-6">
                  {plan.title}
                </CardTitle>
                <div className="mb-8">
                  <p className="text-3xl font-bold text-zp-dark mb-2">{plan.price}</p>
                  <p className="text-sm text-zp-gray">{plan.subtitle}</p>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <p className="text-zp-gray leading-relaxed mb-8">{plan.description}</p>
                <div className="space-y-3 text-sm text-zp-light-gray text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-zp-dark rounded-full mr-3"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </FadeInSection>
      </div>
    </section>
  );
} 