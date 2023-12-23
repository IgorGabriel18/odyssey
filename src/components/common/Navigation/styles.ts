import styled, { css } from "styled-components";

import { optionsBreakpointType } from "~types/global-types";

export interface IContainerProps {
    $breakpoint: optionsBreakpointType;
    $navbarAnimation?: {
        loading: boolean;
    };
}

export const Container = styled.nav<IContainerProps>`
    ${({ theme, ...rest }) => css`
        width: 100%;
        height: min-content;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.lg} ${theme.spacing.md};
        align-items: center;

        ${rest.$navbarAnimation &&
        css`
            @media (width < ${theme.screen.breakpoint[rest.$breakpoint]}) {
                animation: ${!rest.$navbarAnimation.loading
                        ? theme.animation.navbar.entrance
                        : theme.animation.navbar.exit}
                    ${theme.time.primary} ease-in-out;
            }
        `}

        @media (width >= ${theme.screen.breakpoint[rest.$breakpoint]}) {
            width: max-content;
            flex-direction: row;
        }
    `}
`;
