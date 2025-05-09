import * as React from "react";
import { cn } from "@/lib/utils";

interface WidgetContainerProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * WidgetContainer applies design system box-shadow, border-radius, background, and padding.
 * Uses CSS custom properties for color tokens. Ensures accessibility and visual separation.
 */
export function WidgetContainer({ className, children }: WidgetContainerProps) {
  return (
    <section
      className={cn(
        "bg-white rounded-lg shadow-widget p-6 md:p-8 my-6",
        "border border-border",
        "[box-shadow:0_2px_8px_rgba(0,0,0,0.08)]",
        className
      )}
      style={{
        // Map to design system tokens if needed
        // Example: background: 'var(--widget-bg, #fff)',
      }}
      tabIndex={-1}
      aria-label="Widget Container"
    >
      {children}
    </section>
  );
} 