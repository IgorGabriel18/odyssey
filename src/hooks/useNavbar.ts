import { useContext } from "react";
import { useTheme } from "styled-components";

import { ScreenContext } from "~contexts/ScreenContext";

import { useVisibility } from "./useVisibility";

const MILLISECONDS = 1000;

export const useNavbar = () => {
    const theme = useTheme();
    const { screenWidth, breakpoint } = useContext(ScreenContext);
    const renderButton = screenWidth < breakpoint().md;
    const { isLoading, visibility, handleClickToggleVisibility } = useVisibility({
        condition: renderButton,
        newVisibilityToLargeScreen: false,
        delay: parseFloat(theme.time.tertiary) * MILLISECONDS
    });
    const renderNavigation = screenWidth >= breakpoint().md || visibility;

    return { isLoading, visibility, handleClickToggleVisibility, renderButton, renderNavigation };
};
