import * as React from "react";
import { cn } from "@/lib/utils";

// Non-interactive slider stub: renders children only so pages that import Slider
// don't break, but removes visible track/thumb UI.
const Slider = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>
    {children}
  </div>
));
Slider.displayName = "Slider";

export { Slider };
