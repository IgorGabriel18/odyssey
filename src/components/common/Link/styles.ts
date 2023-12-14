import styled, { css } from "styled-components";

import { IFont } from "~types/global-types";

export const Container = styled.a<IFont>`
    ${({ theme, $color, $colorVariant, $typography, $align }) => css`
        width: 100%;
        max-width: max-content;
        height: min-content;
        padding: ${theme.spacing.md} ${theme.spacing.mega};
        border-radius: ${theme.border.radius.primary};
        background: linear-gradient(to left, ${theme.color.brand}, ${theme.color.main});
        color: ${$color ? theme.color[$color] : theme.color.variants[$colorVariant!]};
        font: ${theme.typography[$typography!]};
        text-align: ${$align};
    `}
`;
