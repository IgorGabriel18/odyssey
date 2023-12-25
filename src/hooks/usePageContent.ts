import { useContext } from "react";

import { ScreenContext } from "~contexts/ScreenContext";
import { optionsSpacingType, optionsTextAlignType } from "~types/global-types";

import { useContact } from "./useContact";
import { useSlider } from "./useSlider";

export const usePageContent = () => {
    const { screenWidth, breakpoint } = useContext(ScreenContext);
    const testimonials = useSlider();
    const contact = useContact();

    const itemsGap: optionsSpacingType = screenWidth >= breakpoint().md ? "mega" : "lg";
    const textAlign: optionsTextAlignType = screenWidth >= breakpoint().md ? "left" : "center";

    return { itemsGap, textAlign, testimonials, contact };
};
