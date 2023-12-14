import styled, { css } from "styled-components";

import { IFont } from "~types/global-types";

export const Container = styled.h2<IFont>`
    ${({ theme, $color, $colorVariant, $typography, $align, $lines }) => css`
        width: 100%;
        height: min-content;
        color: ${$color ? theme.color[$color] : theme.color.variants[$colorVariant!]};
        font: ${theme.typography[$typography!]};
        text-align: ${$align};

        ${$lines &&
        css`
            display: flex;
            column-gap: ${theme.spacing.md};
            justify-content: ${$lines === "right" ? "start" : "center"};
            align-items: center;

            ${$lines === "right" ? "&::after" : "&::before, &::after"} {
                content: "";
                width: 4rem;
                height: ${theme.border.size.primary};
                background-color: ${$color ? theme.color[$color] : theme.color.variants[$colorVariant!]};
            }
        `}
    `}
`;
