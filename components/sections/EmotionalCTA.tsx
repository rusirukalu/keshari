"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../Container";
import { Button } from "../ui/button";
import { siteConfig } from "@/lib/config";
import { siteContent } from "@/lib/content";

const EmotionalCTA: React.FC = () => {
  const handleScrollToContact = () => {
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
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-graphite-900 text-white border-b border-graphite-800">
      {/* Low-opacity math grid watermark pattern (3.5% opacity) */}
      <div className="absolute inset-0 math-grid opacity-[0.035] pointer-events-none select-none" />

      <Container className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl">
        {/* Label */}
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-sage-300 leading-none select-none">
          A Message from Miss Keshari
        </span>

        {/* Dynamic Bold Typography Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-balance text-white">
          {siteContent.emotionalCta.heading}
        </h2>

        {/* Muted paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-graphite-300 leading-relaxed font-normal text-pretty max-w-2xl">
          {siteContent.emotionalCta.subheading}
        </p>

        {/* Action CTAs (Standardized button sizing) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 select-none">
          <Button
            onClick={handleScrollToContact}
            variant="sage"
            size="lg"
            className="group h-12 px-7 text-sm font-bold transition-all duration-300 text-white"
          >
            <span>{siteContent.emotionalCta.primaryCta}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 px-7 text-sm font-bold border-graphite-700 bg-transparent text-white hover:bg-white hover:text-graphite-900 hover:border-white transition-all duration-300"
          >
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{siteContent.emotionalCta.secondaryCta}</span>
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default EmotionalCTA;
