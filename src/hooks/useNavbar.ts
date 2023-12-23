import { useContext } from "react";
import { useTheme } from "styled-components";

import { ScreenContext } from "~contexts/ScreenContext";

import { useVisibility } from "./useVisibility";

const MILLISECONDS = 1000;

export const useNavbar = () => {
    const theme = useTheme();
    const { screenWidth, breakpoint } = useContext(ScreenContext);
    const renderButton = screenWidth < breakpoint().md;
    const { loading, visibility, handleClickToggleVisibility } = useVisibility({
        activateEffect: renderButton,
        newVisibility: false,
        timeoutDuration: parseFloat(theme.time.primary) * MILLISECONDS
    });
    const handleClick = screenWidth >= breakpoint().md ? undefined : handleClickToggleVisibility;
    const renderNavigation = screenWidth >= breakpoint().md || visibility;

    return { loading, visibility, handleClick, renderButton, renderNavigation };
};
