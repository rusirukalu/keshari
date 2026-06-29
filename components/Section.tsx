import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  alternateBg?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, id, alternateBg = false, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-16 md:py-20 lg:py-24 overflow-hidden transition-colors duration-500",
          alternateBg ? "bg-graphite-100" : "bg-graphite-50", // Warm gray vs warm off-white!
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
