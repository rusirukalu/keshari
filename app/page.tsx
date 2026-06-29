import * as React from "react";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import WhyLearnWithMe from "@/components/sections/WhyLearnWithMe";
import About from "@/components/sections/About";
import Classes from "@/components/sections/Classes";
import StudentSuccess from "@/components/sections/StudentSuccess";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import EmotionalCTA from "@/components/sections/EmotionalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Shrinking Header */}
      <Header />

      {/* Human-Centered Storytelling Journey */}
      <main className="flex-1 w-full bg-graphite-50 relative">
        {/* 1. Hero Banner + Trust Strip */}
        <Hero />

        {/* 2. Visual Value Pitch (Philosophy + 4-Step Approach + Benefits) */}
        <WhyLearnWithMe />

        {/* 3. Narrative Bio + Software Engineering Degree Timeline */}
        <About />

        {/* 4. Grade Classes grid Outcomes */}
        <Classes />

        {/* 5. Typographical Reviews Success Quotes */}
        <StudentSuccess />

        {/* 6. Alternating Photographic Previews */}
        <Gallery />

        {/* 7. Enquiry Form + Google Maps Embed + FAQ Accordion Panels */}
        <Contact />

        {/* 8. Closing Conversion Emotional CTA */}
        <EmotionalCTA />
      </main>

      {/* Warm Gray Footer */}
      <Footer />
    </>
  );
}
