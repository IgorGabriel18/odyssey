import styled, { css } from "styled-components";

import { IFont } from "~types/global-types";

export const Container = styled.h4<IFont>`
    ${({ theme, ...style }) => css`
        width: 100%;
        height: min-content;
        color: ${style.$color ? theme.color[style.$color] : theme.color.variants[style.$colorVariant!]};
        font: ${theme.typography[style.$typography]};
        text-align: ${style.$align};

        ${style.$lines &&
        css`
            display: flex;
            flex-direction: column;
            gap: ${theme.spacing.md};
            justify-content: ${style.$lines === "right" ? "start" : "center"};
            align-items: center;

            ${style.$lines === "right" ? "&::after" : "&::before, &::after"} {
                content: "";
                width: 4rem;
                height: ${theme.border.size.primary};
                background-color: ${style.$color
                    ? theme.color[style.$color]
                    : theme.color.variants[style.$colorVariant!]};
            }

            @media (width >= ${theme.screen.breakpoint.sm}) {
                flex-direction: row;
            }
        `}
    `}
`;
