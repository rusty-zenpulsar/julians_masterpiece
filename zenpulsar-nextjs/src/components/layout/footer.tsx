import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

interface FooterProps {
  onAccessClick: () => void;
}

export function Footer({ onAccessClick }: FooterProps) {
  return (
    <footer className="py-20 px-6 bg-white border-t border-zp-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Image
            src="/logo.png"
            alt="ZENPULSAR"
            width={168}
            height={56}
            className="h-14 w-auto mx-auto mb-6"
          />
          <p className="text-lg text-zp-gray max-w-2xl mx-auto">
            Intelligence-driven commodity trading for the modern era
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-zp-dark mb-4">Platform</h4>
            <div className="space-y-2 text-zp-gray">
              <div>Sentiment Analysis</div>
              <div>AI Agent Systems</div>
              <div>Risk Assessment</div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-zp-dark mb-4">Contact</h4>
            <div className="space-y-2">
              <Link
                href={`mailto:${siteConfig.links.email}`}
                className="block text-zp-gray hover:text-zp-dark transition-colors"
              >
                {siteConfig.links.email}
              </Link>
              <Link
                href={siteConfig.links.website}
                className="block text-zp-gray hover:text-zp-dark transition-colors"
              >
                zenpulsar.com
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-zp-dark mb-4">Get Started</h4>
            <Button
              onClick={onAccessClick}
              variant="default"
              className="shadow-subtle"
            >
              Request Access
            </Button>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-zp-border">
          <p className="text-sm text-zp-light-gray">
            © 2025 ZENPULSAR. Professional commodity intelligence solutions.
          </p>
        </div>
      </div>
    </footer>
  );
} 