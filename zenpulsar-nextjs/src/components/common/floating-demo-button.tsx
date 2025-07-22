"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingDemoButtonProps {
  onClick: () => void;
}

export function FloatingDemoButton({ onClick }: FloatingDemoButtonProps) {
  return (
    <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
      <Button
        onClick={onClick}
        className="rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
        size="default"
      >
        <span>Request Demo</span>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
} 