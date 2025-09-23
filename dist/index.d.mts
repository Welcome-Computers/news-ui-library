import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface iProps {
    item: any;
    type?: "type-1" | "type-2" | "type-3" | "type-4" | "type-5" | "type-6" | "type-7" | "type-8" | "type-9" | "type-10" | "type-11" | "type-12" | "type-13" | "type-14" | "type-15" | undefined;
}
declare const NewsCard: (props: iProps) => react_jsx_runtime.JSX.Element;

interface CommonAvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    name?: string;
    style?: React.CSSProperties;
}
declare const CommonAvatar: React.FC<CommonAvatarProps>;

declare const SquareLoader: React.FC;

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

declare const getFullName: (value: any) => string;
declare const getSFullName: (value: any) => string;
declare const extractIdFromSlug: (slugAndId: unknown) => number | null;

export { CommonAvatar, NewsCard, SquareLoader, extractIdFromSlug, getFullName, getSFullName, useBreakpoint };
