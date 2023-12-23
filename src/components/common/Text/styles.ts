import styled, { css } from "styled-components";

import { IFont } from "~types/global-types";

export const Container = styled.p<IFont>`
    ${({ theme, ...rest }) => css`
        width: 100%;
        height: min-content;
        color: ${rest.$color ? theme.color[rest.$color] : theme.color.variants[rest.$colorVariant!]};
        font: ${theme.typography[rest.$typography]};
        text-align: ${rest.$align};
    `}
`;
