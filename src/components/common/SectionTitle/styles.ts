import styled, { css } from "styled-components";

import { IFont } from "~types/global-types";

export const Container = styled.h2<IFont>`
    ${({ theme, ...rest }) => css`
        width: 100%;
        height: min-content;
        color: ${rest.$color ? theme.color[rest.$color] : theme.color.variants[rest.$colorVariant!]};
        font: ${theme.typography[rest.$typography]};
        text-align: ${rest.$align};

        ${rest.$lines &&
        css`
            display: flex;
            column-gap: ${theme.spacing.md};
            justify-content: ${rest.$lines === "right" ? "start" : "center"};
            align-items: center;

            ${rest.$lines === "right" ? "&::after" : "&::before, &::after"} {
                content: "";
                width: 4rem;
                height: ${theme.border.size.primary};
                background-color: ${rest.$color ? theme.color[rest.$color] : theme.color.variants[rest.$colorVariant!]};
            }
        `}
    `}
`;
