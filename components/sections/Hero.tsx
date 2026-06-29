"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, GraduationCap, Users } from "lucide-react";
import { Button } from "../ui/button";
import Container from "../Container";
import { siteContent } from "@/lib/content";
import { siteConfig } from "@/lib/config";
import { fadeInUp, staggerContainer, premiumEase } from "../motion";

const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-36 md:pt-44 lg:pt-48 pb-16 md:pb-20 lg:pb-24 overflow-hidden bg-graphite-50"
    >
      {/* Low-opacity math coordinate grid background */}
      <div className="absolute inset-0 math-grid opacity-[0.035] pointer-events-none select-none" />

      <Container className="relative z-10 flex flex-col gap-16 md:gap-24">
        
        {/* Core Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Portrait - Image-First (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: premiumEase }}
            className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[32px] overflow-hidden border border-graphite-200 bg-white p-8 lg:p-10 flex flex-col justify-between shadow-xs group hover:border-sage-300 hover:shadow-sm transition-all duration-300"
          >
            {/* Fine coordinate axis markers */}
            <div className="flex items-center justify-between text-[8px] font-mono tracking-widest text-graphite-400 uppercase select-none">
              <span>[ PRIMARY PORTRAIT ]</span>
              <span>LMU GRADUATE</span>
            </div>

            {/* Geometry sketches in card */}
            <div className="my-auto flex flex-col items-center justify-center text-center gap-5 relative select-none">
              <div className="w-16 h-16 rounded-[24px] bg-graphite-100 border border-graphite-200 flex items-center justify-center text-sage-600 font-mono text-xl font-bold transition-all duration-300 group-hover:scale-105 shadow-3xs">
                f(x)
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xl text-graphite-900 tracking-tight">
                  {siteConfig.teacher.name}
                </span>
                <span className="text-[10px] text-graphite-500 max-w-[200px] leading-relaxed mx-auto font-bold uppercase tracking-wider">
                  {siteConfig.teacher.role}
                </span>
              </div>
            </div>

            {/* Asset tag */}
            <div className="text-[9px] font-mono text-graphite-400 text-center select-none uppercase tracking-wide">
              public/images/{siteConfig.placeholders.teacherPortrait}
            </div>
          </motion.div>

          {/* Copy Side (col-span-7) */}
          <motion.div
            variants={staggerContainer(0.06, 0.05)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start gap-6 lg:pl-4"
          >
            {/* Subject Tag */}
            <motion.div
              variants={fadeInUp(8)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-50 border border-sage-200/50 text-sage-700 text-[10px] font-bold tracking-widest uppercase select-none"
            >
              <Sparkles className="h-3.5 w-3.5 text-sage-600" />
              <span>{siteContent.hero.badge}</span>
            </motion.div>

            {/* Concise Headline */}
            <motion.h1
              variants={fadeInUp(12)}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.5rem] font-extrabold text-graphite-900 leading-[1.08] tracking-tight text-balance"
            >
              {siteContent.hero.headline}
            </motion.h1>

            {/* Supporting sentence */}
            <motion.p
              variants={fadeInUp(12)}
              className="text-base sm:text-lg md:text-xl text-graphite-600 leading-relaxed text-pretty font-normal max-w-2xl mt-1"
            >
              {siteContent.hero.subHeadline}
            </motion.p>

            {/* Trust Indicators Checkboxes */}
            <motion.div
              variants={fadeInUp(12)}
              className="grid grid-cols-2 gap-y-3 gap-x-8 w-full max-w-lg mt-2 select-none"
            >
              {siteContent.hero.trustItems.map((item, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-2.5 text-sm font-bold text-graphite-750"
                >
                  <span className="text-sage-600 font-bold leading-none">{item.split(" ")[0]}</span>
                  <span>{item.substring(2)}</span>
                </span>
              ))}
            </motion.div>

            {/* CTA buttons (Standardized sizes) */}
            <motion.div
              variants={fadeInUp(14)}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
            >
              <Button
                onClick={() => handleScrollTo("#contact")}
                variant="sage"
                size="lg"
                className="group h-12 px-7 text-sm font-bold shadow-xs text-white"
              >
                <span>{siteContent.hero.ctaPrimary}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                onClick={() => handleScrollTo("#about")}
                variant="outline"
                size="lg"
                className="h-12 px-7 text-sm border-graphite-200 text-graphite-700 hover:border-graphite-900 hover:bg-graphite-100/50 font-bold"
              >
                <span>{siteContent.hero.ctaSecondary}</span>
              </Button>
            </motion.div>
          </motion.div>

        </div>

        {/* Compact Horizontal Trust Strip (Aligned to Spacing Scale) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: premiumEase, delay: 0.25 }}
          className="border-t border-graphite-200/80 pt-10 select-none"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-between text-left">
            
            {/* Stat 1: English Medium */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white rounded-xl border border-graphite-200/85 text-sage-600 shadow-3xs">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-graphite-900">English Medium</span>
                <span className="text-[11px] text-graphite-500 font-medium">Syllabus Focused</span>
              </div>
            </div>

            {/* Stat 2: LMU Graduate */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white rounded-xl border border-graphite-200/85 text-sage-600 shadow-3xs">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-graphite-900">BEng (Hons)</span>
                <span className="text-[11px] text-graphite-500 font-medium">London Met Graduate</span>
              </div>
            </div>

            {/* Stat 3: Grades 6-11 */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white rounded-xl border border-graphite-200/85 text-sage-600 shadow-3xs">
                <Award className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-graphite-900">Grades 6–11</span>
                <span className="text-[11px] text-graphite-500 font-medium">O/L Mathematics</span>
              </div>
            </div>

            {/* Stat 4: Student Metric */}
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white rounded-xl border border-graphite-200/85 text-sage-600 shadow-3xs">
                <Users className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-bold text-graphite-900">500+ Guided</span>
                <span className="text-[11px] text-graphite-500 font-medium">100% Pass Rate Record</span>
              </div>
            </div>

          </div>
        </motion.div>

      </Container>
    </section>
  );
};

export default Hero;
