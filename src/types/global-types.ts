import { ReactNode } from "react";

import { theme } from "~styles/theme";

export type optionsIconType = keyof typeof theme.icon;
export type optionsBreakpointType = keyof typeof theme.screen.breakpoint;
export type optionsColorType = keyof typeof theme.color;
export type optionsColorVariantsType = keyof typeof theme.color.variants;
export type optionsTypographyType = keyof typeof theme.typography;
export type optionsSpacingType = keyof typeof theme.spacing;
export type optionsBoxSizeType = keyof typeof theme.screen.boxSize;
export type optionsTextAlignType = "center" | "left" | "justify";
export type optionsPositionType = "start" | "center" | "end";
export type optionsFontLinesType = "right" | "left&right";

export interface IChildren {
    children: ReactNode;
}
export interface IRender {
    render: boolean;
}
export interface IFont {
    $color?: optionsColorType;
    $colorVariant?: optionsColorVariantsType;
    $typography: optionsTypographyType;
    $align: optionsTextAlignType;
    $lines?: optionsFontLinesType;
}
