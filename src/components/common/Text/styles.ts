import styled, { css } from "styled-components";

import { IFont } from "~types/global-types";

export const Container = styled.p<IFont>`
    ${({ theme, $color, $colorVariant, $typography, $align }) => css`
        width: 100%;
        height: min-content;
        color: ${$color ? theme.color[$color] : theme.color.variants[$colorVariant!]};
        font: ${theme.typography[$typography!]};
        text-align: ${$align};
    `}
`;
