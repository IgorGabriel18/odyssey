/* eslint-disable react-refresh/only-export-components */
import { ThemeProvider } from "styled-components";

import { theme } from "~styles/theme";
import { IChildren } from "~types/global-types";

export function MockProviders({ children }: IChildren) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export const handleClick = jest.fn();
