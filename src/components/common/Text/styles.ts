import styled, { css } from "styled-components";

import { IFont } from "~types/global-types";

export const Container = styled.p<IFont>`
    ${({ theme, ...style }) => css`
        width: 100%;
        height: min-content;
        color: ${style.$color ? theme.color[style.$color] : theme.color.variants[style.$colorVariant!]};
        font: ${theme.typography[style.$typography]};
        text-align: ${style.$align};
    `}
`;
