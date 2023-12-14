import { theme } from "~styles/theme";

type Breakpoints = Record<string, number>;

const PX_UNIT = 16;

export const convertBreakpointsToPx = () => {
    const values = Object.entries(theme.screen.breakpoint).reduce((acc, [key, value]) => {
        acc[key] = parseInt(value, 10) * PX_UNIT;

        return acc;
    }, {} as Breakpoints);

    return values;
};
