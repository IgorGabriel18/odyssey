import { useContext } from "react";

import { ScreenContext } from "~contexts/ScreenContext";
import { optionsFontLinesType, optionsSpacingType, optionsTextAlignType } from "~types/global-types";

import { useContact } from "./useContact";
import { useSlider } from "./useSlider";

export const usePageContent = () => {
    const { breakpoint, screenWidth } = useContext(ScreenContext);
    const testimonials = useSlider();
    const contact = useContact();

    const gapItems: optionsSpacingType = screenWidth >= breakpoint().md ? "mega" : "md";
    const textAlign: optionsTextAlignType = screenWidth >= breakpoint().md ? "left" : "center";
    const fontLines: optionsFontLinesType = screenWidth >= breakpoint().md ? "right" : "left&right";

    return { breakpoint, screenWidth, testimonials, contact, gapItems, textAlign, fontLines };
};
