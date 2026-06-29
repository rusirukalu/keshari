"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import Heading from "../Heading";
import Container from "../Container";
import Section from "../Section";
import { siteContent } from "@/lib/content";
import { staggerContainer, premiumEase } from "../motion";

const Gallery: React.FC = () => {
  // Balanced 2x2 alternating layout grid map
  const gridSpanMap: Record<string, string> = {
    img1: "lg:col-span-1 aspect-[3/4]",
    img2: "lg:col-span-2 aspect-[4/3] lg:aspect-[16/10]",
    img3: "lg:col-span-2 aspect-[4/3] lg:aspect-[16/10]",
    img4: "lg:col-span-1 aspect-[3/4]"
  };

  return (
    <Section id="gallery" alternateBg={false} className="border-b border-graphite-200/60">
      <Container className="flex flex-col gap-12 md:gap-16">
        {/* Title */}
        <Heading
          title={siteContent.gallery.sectionHeading}
          subtitle={siteContent.gallery.sectionTitle}
          description={siteContent.gallery.sectionDesc}
          align="center"
          className="mx-auto text-center"
        />

        {/* Editorial Alternating Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.04)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {siteContent.gallery.images.map((img, idx) => {
            const spanClass = gridSpanMap[img.id] || "lg:col-span-1 aspect-[4/3]";

            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.99 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: premiumEase, delay: idx * 0.04 }}
                className={`${spanClass} relative rounded-[32px] overflow-hidden border border-graphite-200/80 bg-white group shadow-xs flex flex-col justify-between p-8 lg:p-10 transition-all duration-300 hover:border-sage-350 hover:shadow-sm`}
              >
                {/* Visual grid details */}
                <div className="flex items-center justify-between text-[9px] font-mono tracking-widest text-graphite-400 uppercase select-none">
                  <span>[ Placeholder ]</span>
                  <span>{img.label}</span>
                </div>

                {/* Central graphic placeholder details */}
                <div className="my-auto flex flex-col items-center justify-center gap-4 text-center select-none py-6">
                  <div className="w-11 h-11 rounded-full bg-graphite-50 border border-graphite-200 shadow-3xs flex items-center justify-center text-graphite-400 group-hover:text-sage-500 group-hover:scale-105 transition-all duration-300">
                    <ImageIcon className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-1 max-w-[220px]">
                    <span className="font-bold text-sm text-graphite-900 leading-tight">
                      {img.label}
                    </span>
                    <span className="text-xs text-graphite-500 leading-relaxed font-normal">
                      {img.desc}
                    </span>
                  </div>
                </div>

                {/* Image asset location label */}
                <div className="text-[9px] font-mono text-graphite-400 text-center select-none uppercase tracking-wide">
                  public/images/{img.placeholder}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Gallery;
