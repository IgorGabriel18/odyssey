import styled, { css } from "styled-components";

export const Container = styled.ul`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacing.xxl} ${theme.spacing.xl};
        justify-content: center;
    `}
`;
