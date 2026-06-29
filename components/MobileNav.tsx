"use client";

import * as React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X } from "lucide-react";
import { siteContent } from "@/lib/content";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { isReducedMotionActive } from "./motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  onEnquireClick: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavLinkClick,
  onEnquireClick,
}) => {
  const isReduced = typeof window !== "undefined" && isReducedMotionActive();

  // Prevent scroll when overlay is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose();
    // Wait a brief moment for overlay to slide away before scrolling
    setTimeout(() => {
      onNavLinkClick(e, href);
    }, isReduced ? 50 : 250);
  };

  const handleCTA = () => {
    onClose();
    setTimeout(() => {
      onEnquireClick();
    }, isReduced ? 50 : 250);
  };

  // Centralized motion settings for overlay
  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: "easeInOut", delay: 0.05 } },
  };

  const listVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.08,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
        >
          {/* Header bar within full overlay */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-lg text-graphite-900 tracking-tight leading-none">
                {siteContent.navigation.brand}
              </span>
              <span className="text-[10px] text-graphite-500 uppercase tracking-widest leading-none mt-1 font-semibold">
                {siteContent.navigation.brandSub}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-graphite-600 hover:text-graphite-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Centered nav items */}
          <div className="my-auto py-12 flex flex-col items-center">
            <motion.nav
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5 items-center text-center w-full"
            >
              {siteContent.navigation.links.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.div key={link.href} variants={linkVariants} className="w-full">
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={cn(
                        "text-3xl md:text-4xl font-bold tracking-tight py-2.5 block transition-colors w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 rounded-xl",
                        isActive
                          ? "text-graphite-900"
                          : "text-graphite-400 hover:text-graphite-900"
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.div>
                );
              })}
            </motion.nav>
          </div>

          {/* Action footer */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.25 }}
            className="flex flex-col items-center gap-6"
          >
            <Button onClick={handleCTA} variant="default" className="w-full max-w-xs h-12 text-base">
              {siteContent.navigation.ctaLabel}
            </Button>
            <span className="text-[10px] text-graphite-400 text-center uppercase tracking-widest leading-none font-semibold">
              English Medium Mathematics Specialists
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
