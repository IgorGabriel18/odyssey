import styled, { css } from "styled-components";

import { optionsIconType } from "~types/global-types";

export interface IContainerProps {
    $size?: optionsIconType;
}

export const Container = styled.img<IContainerProps>`
    ${({ theme, $size }) => css`
        width: ${$size ? theme.icon[$size] : "100%"};
        height: ${$size ? theme.icon[$size] : "min-content"};
    `}
`;
