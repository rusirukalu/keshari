"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Heading from "../Heading";
import Container from "../Container";
import AnimatedCard from "../AnimatedCard";
import Section from "../Section";
import { siteContent } from "@/lib/content";
import { staggerContainer } from "../motion";

const StudentSuccess: React.FC = () => {
  return (
    <Section id="success" alternateBg={true} className="border-b border-graphite-200/60">
      <Container className="flex flex-col gap-12 md:gap-16">
        
        {/* Heading */}
        <Heading
          title={siteContent.testimonials.sectionHeading}
          subtitle={siteContent.testimonials.sectionTitle}
          align="left"
          className="max-w-3xl"
        />

        {/* Swipe Carousel (Mobile) and Grid (Desktop) */}
        <motion.div
          variants={staggerContainer(0.06, 0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex overflow-x-auto lg:overflow-visible lg:grid lg:grid-cols-3 gap-6 lg:gap-8 snap-x snap-mandatory pb-6 lg:pb-0 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {siteContent.testimonials.list.map((item, idx) => {
            const initials = item.author
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2)
              .replace(".", "");

            return (
              <div 
                key={idx}
                className="flex-shrink-0 w-[290px] sm:w-[320px] lg:w-auto snap-center snap-always flex flex-col items-stretch"
              >
                <AnimatedCard
                  delay={idx * 0.04}
                  className="relative flex flex-col justify-between items-stretch bg-white border border-graphite-200/80 rounded-[32px] shadow-xs hover:border-sage-350 hover:shadow-sm transition-all duration-300 h-full p-8 lg:p-10"
                >
                  {/* Decorative Large Quotation Graphic */}
                  <span className="absolute top-6 right-8 font-serif text-6xl text-sage-200/50 leading-none select-none pointer-events-none">
                    “
                  </span>

                  <div className="flex flex-col gap-5 justify-between h-full relative z-10">
                    {/* Quote text */}
                    <blockquote className="text-sm sm:text-base text-graphite-750 leading-relaxed text-pretty font-normal italic pr-4">
                      "{item.quote}"
                    </blockquote>

                    <div className="flex flex-col gap-4">
                      <div className="h-[1px] bg-graphite-200/80 w-full" />

                      {/* Profile info with initials */}
                      <div className="flex items-center gap-3.5 select-none">
                        <div className="w-9 h-9 rounded-full bg-sage-50 border border-sage-200/65 text-sage-700 flex items-center justify-center font-bold text-xs shadow-3xs shrink-0">
                          {initials}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <cite className="font-bold text-sm text-graphite-900 not-italic leading-none">
                            {item.author}
                          </cite>
                          <span className="text-[10px] text-graphite-500 font-bold leading-none uppercase tracking-wide">
                            {item.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
};

export default StudentSuccess;
