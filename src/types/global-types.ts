import { ReactNode } from "react";

import { theme } from "~styles/theme";

export type optionsBoxSizeType = keyof typeof theme.screen.boxSize;
export type optionsSpacingType = keyof typeof theme.spacing;
export type optionsColorType = keyof typeof theme.color;
export type optionsColorVariantsType = keyof typeof theme.color.variants;
export type optionsTypographyType = keyof typeof theme.typography;
export type optionsPositionType = "start" | "center" | "end";
export type optionsFontLinesType = "right" | "left&right";
export type optionsTextAlignType = "center" | "left" | "justify";

export interface IChildren {
    children: ReactNode;
}
export interface IFont {
    $color?: optionsColorType;
    $colorVariant?: optionsColorVariantsType;
    $typography?: optionsTypographyType;
    $align: optionsTextAlignType;
    $lines?: optionsFontLinesType;
}
