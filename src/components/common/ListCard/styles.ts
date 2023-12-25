import styled, { css } from "styled-components";

import { optionsCardSizeType } from "~types/global-types";

export interface IContainerProps {
    $size: optionsCardSizeType;
    $wrap?: true;
}

export const Container = styled.li<IContainerProps>`
    ${({ theme, ...style }) => css`
        width: ${style.$size === "full" ? "100%" : "min(100%, 18rem)"};
        height: min-content;
        display: flex;
        flex-wrap: ${style.$wrap ? "wrap" : "nowrap"};
        gap: ${theme.spacing.xs} ${theme.spacing.lg};
        justify-content: center;
        align-items: center;
    `}
`;
