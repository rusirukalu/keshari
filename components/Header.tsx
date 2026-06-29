"use client";

import * as React from "react";
import { siteConfig } from "@/lib/config";
import { siteContent } from "@/lib/content";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Shrink header on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section-aware active navigation highlighting
  React.useEffect(() => {
    const sections = siteContent.navigation.links.map((link) =>
      document.querySelector(link.href)
    );

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -50% 0px", // triggers when section center crosses viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Smooth scroll helper
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = isScrolled ? 64 : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleEnquireClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const headerOffset = 64;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full font-sans border-b",
          isScrolled
            ? "bg-graphite-50/80 backdrop-blur-md py-3.5 border-graphite-200/60 shadow-xs"
            : "bg-transparent py-5 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => handleNavLinkClick(e, "#hero")}
            className="flex flex-col select-none group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 rounded-lg"
          >
            <span className="font-bold text-lg md:text-xl text-graphite-900 tracking-tight leading-none transition-colors group-hover:text-sage-600">
              {siteContent.navigation.brand}
            </span>
            <span className="text-[9px] md:text-[10px] text-graphite-500 uppercase tracking-widest leading-none mt-1 font-semibold">
              {siteContent.navigation.brandSub}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteContent.navigation.links.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={cn(
                    "text-sm font-semibold tracking-tight transition-colors py-1 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 rounded-lg px-2 -mx-2",
                    isActive
                      ? "text-graphite-900 font-bold"
                      : "text-graphite-600 hover:text-graphite-900"
                  )}
                >
                  {link.label}
                  {/* Underline Slide Effect */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-sage-500 rounded-full animate-in fade-in zoom-in duration-200" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center">
            <Button
              onClick={handleEnquireClick}
              variant="outline"
              size="sm"
              className="border-graphite-900 text-graphite-900 hover:bg-graphite-900 hover:text-white h-10 px-5 text-xs font-bold"
            >
              {siteContent.navigation.ctaLabel}
            </Button>
          </div>

          {/* Mobile Hamburg Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex lg:hidden p-2 -mr-2 text-graphite-600 hover:text-graphite-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-lg min-w-[44px] min-h-[44px] items-center justify-center cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Premium Full Screen Mobile Menu Overlay */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavLinkClick={handleNavLinkClick}
        onEnquireClick={handleEnquireClick}
      />
    </>
  );
};

export default Header;
