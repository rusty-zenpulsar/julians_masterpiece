"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/overview";
import { Offerings } from "@/components/sections/offerings";
import { WhyItMatters } from "@/components/sections/why-it-matters";
import { Pricing } from "@/components/sections/pricing";
import { CTA } from "@/components/sections/cta";
import { SectionDivider } from "@/components/common/section-divider";
import { FloatingDemoButton } from "@/components/common/floating-demo-button";
import { FormModal } from "@/components/forms/form-modal";
import { DemoFormData, AccessFormData } from "@/lib/types";

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  const handleDemoSubmit = async (data: DemoFormData) => {
    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit demo request");
      }

      alert("Demo request sent successfully!");
      setIsDemoModalOpen(false);
    } catch (error) {
      console.error("Demo submission error:", error);
      alert("Failed to send demo request. Please try again.");
    }
  };

  const handleAccessSubmit = async (data: AccessFormData) => {
    try {
      const response = await fetch("/api/access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit access request");
      }

      alert("Access request sent successfully!");
      setIsAccessModalOpen(false);
    } catch (error) {
      console.error("Access submission error:", error);
      alert("Failed to send access request. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-zp-dark">
      <Header onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <Hero onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <SectionDivider />
      <Overview />
      
      <SectionDivider />
      <Offerings />
      
      <SectionDivider />
      <WhyItMatters />
      
      <SectionDivider />
      <Pricing />
      
      <SectionDivider />
      <CTA onDemoClick={() => setIsDemoModalOpen(true)} />
      
      <Footer onAccessClick={() => setIsAccessModalOpen(true)} />
      
      <FloatingDemoButton onClick={() => setIsDemoModalOpen(true)} />

      <FormModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type="demo"
        onDemoSubmit={handleDemoSubmit}
      />

      <FormModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
        type="access"
        onAccessSubmit={handleAccessSubmit}
      />
    </main>
  );
}
