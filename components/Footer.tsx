"use client";

import * as React from "react";
import Container from "./Container";
import { siteConfig } from "@/lib/config";
import { siteContent } from "@/lib/content";

const Footer: React.FC = () => {
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 64;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-graphite-100 py-16 border-t border-graphite-200/60 font-sans">
      <Container className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        
        {/* Brand Side (5 cols) */}
        <div className="md:col-span-5 flex flex-col gap-4 items-start">
          <div className="flex flex-col">
            <span className="font-bold text-lg text-graphite-900 tracking-tight leading-none">
              {siteContent.navigation.brand}
            </span>
            <span className="text-[9px] text-graphite-500 uppercase tracking-widest leading-none mt-1 font-semibold">
              {siteContent.navigation.brandSub}
            </span>
          </div>
          <p className="text-sm text-graphite-650 max-w-[280px] leading-relaxed text-pretty">
            {siteContent.footer.colophon}
          </p>
        </div>

        {/* Links Grid Side (7 cols) */}
        <div className="md:col-span-7 grid grid-cols-2 gap-8 sm:gap-12">
          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-wider font-bold text-graphite-400 select-none">
              {siteContent.footer.navigation.title}
            </span>
            <nav className="flex flex-col gap-2.5">
              {siteContent.footer.navigation.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="text-sm font-semibold text-graphite-600 hover:text-graphite-900 transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-wider font-bold text-graphite-400 select-none">
              {siteContent.footer.contact.title}
            </span>
            <ul className="flex flex-col gap-2.5 text-sm font-semibold text-graphite-600">
              <li>{siteConfig.contact.address}</li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-graphite-900 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-graphite-900 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright boundary */}
        <div className="md:col-span-12 pt-8 border-t border-graphite-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-semibold text-graphite-400 select-none">
          <span>{siteContent.footer.copyright}</span>
          <span className="text-[10px] tracking-wider uppercase font-bold text-sage-600">
            Colombo • Sri Lanka
          </span>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
