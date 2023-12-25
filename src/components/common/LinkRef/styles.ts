import styled, { css } from "styled-components";

import { IFont } from "~types/global-types";

export const Container = styled.a<IFont>`
    ${({ theme, ...style }) => css`
        width: fit-content;
        height: min-content;
        padding: ${theme.spacing.sm} ${theme.spacing.xl};
        border-radius: ${theme.border.radius.primary};
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacing.md};
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, transparent, ${theme.color.brand});
        color: ${style.$color ? theme.color[style.$color] : theme.color.variants[style.$colorVariant!]};
        font: ${theme.typography[style.$typography]};
        text-align: ${style.$align};
        transition: padding-inline ${theme.time.tertiary} ease-in-out;

        .container__icon {
            color: ${style.$color ? theme.color[style.$color] : theme.color.variants[style.$colorVariant!]};
            font-size: ${theme.icon.secondary};
        }

        &:hover {
            padding-inline: ${theme.spacing.mega};
        }
    `}
`;
