"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/lib/constants";

interface HeaderProps {
  onDemoClick: () => void;
}

export function Header({ onDemoClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 bg-white/90 backdrop-blur-sm shadow-nav transition-all duration-300 ${
        isScrolled ? "nav-compact py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="ZENPULSAR" width={120} height={32} className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-zp-gray hover:text-zp-dark transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={onDemoClick} size="default">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden ${isMobileMenuOpen ? "open" : ""}`}
        >
          <div className="py-4 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-zp-gray hover:text-zp-dark transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={onDemoClick} className="mt-4">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 