import { useEffect, useState } from "react";

// Ant Design breakpoints
const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600,
};

export function useBreakpoint(){
    // Initial state should be undefined until the component mounts on the client side
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        // Set initial width once the component mounts
        setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array means this effect runs once after mount

    if (width === undefined) {
        // This prevents rendering while the width is still undefined (before the component has mounted)
        return { width: 0, breakpoint: "xs", gutterpoint: 10 };
    }

    // Determine the active breakpoint and gutterpoint based on width
    const breakpoint = (() => {
        if (width < breakpoints.sm) return "xs";        // <576px
        if (width < breakpoints.md) return "sm";        // 576 - 767px
        if (width < breakpoints.lg) return "md";        // 768 - 991px
        if (width < breakpoints.xl) return "lg";        // 992 - 1199px
        if (width < breakpoints.xxl) return "xl";       // 1200 - 1599px
        return "xxl";                                   // ≥1600px
    })();

    const gutterpoint = (() => {
        if (width < breakpoints.sm) return 10;        // <576px
        if (width < breakpoints.md) return 15;        // 576 - 767px
        if (width < breakpoints.lg) return 20;        // 768 - 991px
        if (width < breakpoints.xl) return 25;        // 992 - 1199px
        if (width < breakpoints.xxl) return 30;       // 1200 - 1599px
        return 30;                                    // ≥1600px
    })();

    return { width, breakpoint, gutterpoint };
};
