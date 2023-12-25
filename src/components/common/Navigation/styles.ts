import styled, { css } from "styled-components";

import { IFont, optionsBreakpointType } from "~types/global-types";

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

export const Link = styled.a<IFont>`
    ${({ theme, ...style }) => css`
        width: 100%;
        height: min-content;
        color: ${style.$color ? theme.color[style.$color] : theme.color.variants[style.$colorVariant!]};
        font: ${theme.typography[style.$typography]};
        text-align: ${style.$align};
        transition: all ${theme.time.tertiary} ease-in-out;

        &:hover {
            color: ${theme.color.brand};
            animation: ${theme.animation.swingEffect} ${theme.time.tertiary} ease-in-out;
        }
    `}
`;
