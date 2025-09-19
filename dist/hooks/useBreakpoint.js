var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/hooks/useBreakpoint.tsx
var useBreakpoint_exports = {};
__export(useBreakpoint_exports, {
  useBreakpoint: () => useBreakpoint
});
module.exports = __toCommonJS(useBreakpoint_exports);
var import_react = require("react");
var breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
function useBreakpoint() {
  const [width, setWidth] = (0, import_react.useState)(void 0);
  (0, import_react.useEffect)(() => {
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
  const is_mobile = width < breakpoints.md;
  const is_laptop = width >= breakpoints.md && width < breakpoints.lg;
  return { width, breakpoint, gutterpoint, is_mobile, is_laptop };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useBreakpoint
});
