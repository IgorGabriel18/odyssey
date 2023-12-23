import styled, { css } from "styled-components";

export const Container = styled.footer`
    ${({ theme }) => css`
        width: min(100%, ${theme.screen.max_width});
        height: min-content;
        padding: ${theme.spacing.lg} ${theme.spacing.md};
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacing.md} ${theme.spacing.xxl};
        justify-content: center;
        align-items: center;
    `}
`;

export const Github = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(2, min-content) / 100%;
        row-gap: ${theme.spacing.sm};
        justify-items: center;
    `}
`;

export const Link = styled.a`
    ${({ theme }) => css`
        width: max-content;
        height: min-content;
        display: grid;
        grid: min-content / repeat(3, max-content);
        column-gap: ${theme.spacing.lg};
        align-items: center;

        .link__icon {
            display: block;
            color: ${theme.color.brand};
            font-size: ${theme.icon.tertiary};
        }
    `}
`;
