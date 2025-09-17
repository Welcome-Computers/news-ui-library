// src/hooks/useBreakpoint.tsx
import { useEffect, useState } from "react";
var breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
function useBreakpoint() {
  const [width, setWidth] = useState(void 0);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (width === void 0) {
    return { width: 0, breakpoint: "xs", gutterpoint: 10 };
  }
  const breakpoint = (() => {
    if (width < breakpoints.sm) return "xs";
    if (width < breakpoints.md) return "sm";
    if (width < breakpoints.lg) return "md";
    if (width < breakpoints.xl) return "lg";
    if (width < breakpoints.xxl) return "xl";
    return "xxl";
  })();
  const gutterpoint = (() => {
    if (width < breakpoints.sm) return 10;
    if (width < breakpoints.md) return 15;
    if (width < breakpoints.lg) return 20;
    if (width < breakpoints.xl) return 25;
    if (width < breakpoints.xxl) return 30;
    return 30;
  })();
  return { width, breakpoint, gutterpoint };
}

export {
  useBreakpoint
};
