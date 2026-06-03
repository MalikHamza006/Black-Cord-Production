import * as React from "react";
import { cn } from "@/lib/utils";

// Minimal, non-interactive carousel wrapper.
// Keeps the same exports so pages/imports won't break, but removes
// the interactive slider design and embla dependency in the UI.

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode };

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>
    {children}
  </div>
));
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>
    {children}
  </div>
));
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>
    {children}
  </div>
));
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = () => null;
const CarouselNext = () => null;

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
