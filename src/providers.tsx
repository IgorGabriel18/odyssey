import React from "react";
import { ThemeProvider } from "styled-components";

import { ScreenContextProvider } from "~contexts/ScreenContext";
import { theme } from "~styles/theme";
import { IChildren } from "~types/global-types";

export function Providers({ children }: IChildren) {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <ScreenContextProvider>{children}</ScreenContextProvider>
            </ThemeProvider>
        </React.StrictMode>
    );
}
