"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Heading from "../Heading";
import Container from "../Container";
import AnimatedCard from "../AnimatedCard";
import Section from "../Section";
import { Badge } from "../ui/badge";
import { siteConfig } from "@/lib/config";
import { siteContent } from "@/lib/content";
import { staggerContainer } from "../motion";

const Classes: React.FC = () => {
  return (
    <Section id="classes" alternateBg={false} className="border-b border-graphite-200/60">
      <Container className="flex flex-col gap-12 md:gap-16">
        {/* Section Heading */}
        <Heading
          title={siteContent.classes.sectionHeading}
          subtitle={siteContent.classes.sectionTitle}
          description={siteContent.classes.sectionDesc}
          align="left"
          className="max-w-3xl"
        />

        {/* Dynamic Card Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {siteConfig.teacher.grades.map((grade, idx) => {
            const isOl = grade.id === "g11";
            const outcomesList = siteContent.classes.outcomes[grade.id as keyof typeof siteContent.classes.outcomes] || [];

            return (
              <AnimatedCard
                key={grade.id}
                delay={idx * 0.04}
                className="flex flex-col justify-between items-stretch bg-white border border-graphite-200/80 rounded-[32px] shadow-xs hover:border-sage-350"
              >
                <div className="flex flex-col gap-5">
                  {/* Header Badge & Title */}
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-bold tracking-tight text-graphite-900 leading-none">
                      {grade.label}
                    </h3>
                    
                    <Badge variant={isOl ? "sage" : "secondary"}>
                      {isOl ? "O/L Exam" : "Syllabus"}
                    </Badge>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-normal text-pretty">
                    {grade.description}
                  </p>

                  <div className="h-[1px] bg-graphite-200/80 w-full" />

                  {/* Syllabus outcomes list */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase font-bold text-graphite-400 tracking-widest select-none">
                      Key Outcomes
                    </span>
                    <ul className="flex flex-col gap-2.5">
                      {outcomesList.map((outcome, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-graphite-750 leading-snug">
                          <Check className="h-4 w-4 text-sage-600 shrink-0 mt-0.5" />
                          <span className="text-pretty">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Classes;
