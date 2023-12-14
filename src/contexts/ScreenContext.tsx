import { createContext, useCallback, useEffect, useState } from "react";

import { IChildren } from "~types/global-types";
import { convertBreakpointsToPx } from "~utils/conversion";

interface IScreenContext {
    screenWidth: number;
    breakpoint: typeof convertBreakpointsToPx;
    scrollButtonVisibility: boolean;
    handleClickScrollToTop: () => void;
}

export const ScreenContext = createContext({} as IScreenContext);
const breakpoint = convertBreakpointsToPx;
const SCROLL_VISIBILITY_THRESHOLD = 200;

export function ScreenContextProvider({ children }: IChildren) {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [scrollButtonVisibility, setScrollButtonVisibility] = useState<boolean>(false);

    const handleScreenWidth = () => setScreenWidth(window.innerWidth);
    const handleScrollButtonVisibility = useCallback(
        () => setScrollButtonVisibility(window.scrollY >= SCROLL_VISIBILITY_THRESHOLD),
        []
    );
    const handleClickScrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

    useEffect(() => {
        window.addEventListener("resize", handleScreenWidth);

        return () => window.removeEventListener("resize", handleScreenWidth);
    }, [screenWidth]);
    useEffect(() => {
        window.addEventListener("scroll", handleScrollButtonVisibility);

        return () => window.removeEventListener("scroll", handleScrollButtonVisibility);
    }, [handleScrollButtonVisibility]);

    return (
        <ScreenContext.Provider value={{ screenWidth, breakpoint, scrollButtonVisibility, handleClickScrollToTop }}>
            {children}
        </ScreenContext.Provider>
    );
}
