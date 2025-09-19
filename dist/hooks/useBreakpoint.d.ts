declare function useBreakpoint(): {
    width: number;
    breakpoint: string;
    gutterpoint: number;
    is_mobile?: undefined;
    is_laptop?: undefined;
} | {
    width: number;
    breakpoint: string;
    gutterpoint: number;
    is_mobile: boolean;
    is_laptop: boolean;
};

export { useBreakpoint };
