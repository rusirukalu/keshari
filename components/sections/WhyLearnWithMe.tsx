"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, BarChart3, RotateCcw, ArrowRight } from "lucide-react";
import Heading from "../Heading";
import Container from "../Container";
import AnimatedCard from "../AnimatedCard";
import Section from "../Section";
import { siteContent } from "@/lib/content";
import { staggerContainer } from "../motion";

const iconMap = [
  <User className="h-5 w-5 text-sage-600" />,
  <GraduationCap className="h-5 w-5 text-sage-600" />,
  <BarChart3 className="h-5 w-5 text-sage-600" />,
  <RotateCcw className="h-5 w-5 text-sage-600" />
];

const WhyLearnWithMe: React.FC = () => {
  const steps = siteContent.whyLearnWithMe.methodology.steps;

  return (
    <Section id="why-learn-with-me" alternateBg={false} className="border-b border-graphite-200/60">
      <Container className="flex flex-col gap-12 md:gap-16">
        
        {/* Editorial Heading */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <Heading
            title={siteContent.whyLearnWithMe.sectionHeading}
            subtitle={siteContent.whyLearnWithMe.sectionTitle}
            description={siteContent.whyLearnWithMe.sectionDesc}
            align="left"
            className="max-w-2xl"
          />
          
          {/* Highlight personal quote */}
          <div className="lg:max-w-xs border-l-2 border-sage-500 pl-4 py-1.5 select-none self-start">
            <p className="text-sm font-semibold italic text-graphite-700 leading-relaxed text-pretty">
              "{siteContent.whyLearnWithMe.philosophyQuote}"
            </p>
          </div>
        </div>

        {/* 1. Visual 4-Step Methodology Timeline */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs uppercase tracking-widest font-bold text-graphite-400 select-none">
            {siteContent.whyLearnWithMe.methodology.title}
          </h3>
          
          <motion.div
            variants={staggerContainer(0.06, 0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {steps.map((step, idx) => {
              const isLast = idx === steps.length - 1;
              return (
                <div key={idx} className="relative flex flex-col items-stretch">
                  {/* Arrow connector on desktop */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-[56px] -right-3 z-10 translate-x-1/2 text-graphite-300 pointer-events-none select-none">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}

                  <AnimatedCard
                    delay={idx * 0.04}
                    className="flex flex-col gap-5 items-start h-full p-8 lg:p-10 bg-white border border-graphite-200/80 rounded-[32px] shadow-xs hover:border-sage-300 hover:shadow-sm"
                  >
                    <span className="text-xs font-mono font-bold tracking-widest text-sage-600 uppercase select-none">
                      Step {step.step}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg font-bold text-graphite-900 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </AnimatedCard>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="h-[1px] bg-graphite-200/80 w-full" />

        {/* 2. Visual Benefits Grid */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs uppercase tracking-widest font-bold text-graphite-400 select-none">
            Key Learning Foundations
          </h3>

          <motion.div
            variants={staggerContainer(0.06, 0.04)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {siteContent.whyLearnWithMe.benefits.map((benefit, idx) => (
              <AnimatedCard
                key={idx}
                delay={idx * 0.04}
                className="flex gap-5 items-start bg-white p-8 lg:p-10 border border-graphite-200/80 rounded-[32px] shadow-xs hover:border-sage-300 hover:shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-sage-50 border border-sage-100/50 shadow-3xs text-sage-600 shrink-0">
                  {iconMap[idx]}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-base font-bold text-graphite-900 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-normal">
                    {benefit.desc}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>

      </Container>
    </Section>
  );
};

export default WhyLearnWithMe;
