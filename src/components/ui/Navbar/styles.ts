import styled, { css } from "styled-components";

export const Container = styled.header`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        padding: ${theme.spacing.lg} ${theme.spacing.md};
        position: fixed;
        inset: 0 0 auto 0;
        z-index: 10;
        display: grid;
        grid: min-content / min(100%, ${theme.screen.max_width});
        justify-content: center;
        background-color: ${theme.color.variants.glass};
        backdrop-filter: blur(${theme.blur});
    `}
`;

export const SubContainer = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacing.xl} ${theme.spacing.md};
        justify-content: space-between;
        align-items: center;

        @media (width >= ${theme.screen.breakpoint.md}) {
            justify-content: space-around;
        }
    `}
`;

export const MenuButton = styled.button`
    ${({ theme }) => css`
        width: max-content;
        height: min-content;
        border: none;
        background-color: transparent;
        cursor: pointer;

        .menu-button__icon {
            display: block;
            color: ${theme.color.primary};
            font-size: ${theme.icon.primary};
            animation: ${theme.animation.simpleRender} ${theme.time.primary} ease-in-out;
        }
    `}
`;
