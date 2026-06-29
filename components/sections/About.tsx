"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import Heading from "../Heading";
import Container from "../Container";
import Section from "../Section";
import { siteContent } from "@/lib/content";
import { siteConfig } from "@/lib/config";
import { fadeInUp, premiumEase } from "../motion";

const About: React.FC = () => {
  const cardData = siteContent.about.degreeCard;

  return (
    <Section id="about" alternateBg={true} className="border-b border-graphite-200/60">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Biography Text (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Heading
            title={siteContent.about.sectionHeading}
            subtitle={siteContent.about.sectionTitle}
            level={2}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            transition={{ staggerChildren: 0.06 }}
            className="flex flex-col gap-4"
          >
            {siteContent.about.bioParagraphs.map((para, idx) => (
              <motion.p
                key={idx}
                variants={fadeInUp(8)}
                className="text-base sm:text-lg text-graphite-600 leading-relaxed text-pretty font-normal max-w-2xl"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Quick Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="pt-6 border-t border-graphite-200/80 flex flex-col gap-1.5 w-fit"
          >
            <span className="font-bold text-xl text-graphite-900 tracking-tight font-serif italic">
              {siteConfig.teacher.name}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-sage-600">
              {siteConfig.teacher.degreeShort}
            </span>
          </motion.div>
        </div>

        {/* Degree Qualification Card (5 cols - Conforming to card spec) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: premiumEase }}
          className="lg:col-span-5 relative w-full rounded-[32px] overflow-hidden border border-graphite-200/80 bg-white p-8 lg:p-10 flex flex-col gap-6 shadow-xs hover:border-sage-300 hover:shadow-sm transition-all duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between text-[8px] font-mono tracking-widest text-graphite-400 uppercase select-none">
            <span>[ ACADEMIC CREDENTIAL ]</span>
            <span>Est. 2022</span>
          </div>

          {/* Core Card Content */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sage-50 border border-sage-100/50 shadow-3xs text-sage-600">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-lg text-graphite-900 leading-tight text-balance">
                {cardData.title}
              </h4>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-graphite-850 leading-tight">
                {cardData.institution}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-graphite-500 font-medium">
                <Calendar className="h-3.5 w-3.5" />
                <span>{cardData.duration}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed text-pretty font-normal">
              {cardData.desc}
            </p>
          </div>

          <div className="h-[1px] bg-graphite-200/80 w-full" />

          {/* Footer watermark */}
          <div className="flex items-center justify-between text-[9px] font-mono tracking-wide text-graphite-400 select-none">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-sage-600">
              <Award className="h-3.5 w-3.5 text-sage-500" />
              Honours Distinction
            </span>
            <span>LMU-UK</span>
          </div>
        </motion.div>

      </Container>
    </Section>
  );
};

export default About;
