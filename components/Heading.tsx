import * as React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  level?: 1 | 2 | 3 | 4;
  hasAccentLine?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  description,
  align = "left",
  level = 2,
  hasAccentLine = false,
  className,
  ...props
}) => {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  const TitleTag = `h${level}` as "h1" | "h2" | "h3" | "h4";

  const titleSizes = {
    1: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6rem] font-extrabold tracking-tight leading-[1.05]",
    2: "text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight leading-[1.1]",
    3: "text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight",
    4: "text-xl sm:text-2xl font-semibold tracking-tight",
  }[level];

  return (
    <div className={cn("flex flex-col gap-3 max-w-3xl", alignmentClass, className)} {...props}>
      {subtitle && (
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-sage-600 select-none">
          {subtitle}
        </span>
      )}
      
      <TitleTag className={cn("text-graphite-900 text-balance", titleSizes)}>
        {title}
      </TitleTag>

      {/* Optional Editorial Underline Accent */}
      {hasAccentLine && (
        <div className={cn(
          "h-[2px] bg-sage-500 rounded-full w-12 mt-1",
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
        )} />
      )}

      {description && (
        <p className={cn(
          "text-graphite-600 text-pretty leading-relaxed font-normal max-w-2xl mt-2",
          level === 1 ? "text-lg sm:text-xl" : "text-base sm:text-lg"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
