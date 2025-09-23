declare function useBreakpoint(): {
    width: number;
    breakpoint: string;
    gutterpoint: number;
    height?: undefined;
    is_mobile?: undefined;
    is_tab?: undefined;
    is_laptop?: undefined;
} | {
    width: number;
    height: number;
    breakpoint: string;
    gutterpoint: number;
    is_mobile: boolean;
    is_tab: boolean;
    is_laptop: boolean;
};

export { useBreakpoint };
