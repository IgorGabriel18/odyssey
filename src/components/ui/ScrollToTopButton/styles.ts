import styled, { css } from "styled-components";

export const Container = styled.button`
    ${({ theme }) => css`
        width: max-content;
        height: min-content;
        padding: ${theme.spacing.md};
        border: ${theme.border.size.primary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.circle};
        position: fixed;
        inset: ${`auto ${theme.spacing.lg} ${theme.spacing.lg} auto`};
        z-index: 10;
        background: ${theme.color.variants.glass};
        backdrop-filter: blur(${theme.blur});
        cursor: pointer;
        animation: ${theme.animation.simpleRender} ${theme.time.primary} ease-in-out;
        transition: transform ${theme.time.tertiary} ease-in-out;

        .container__icon {
            display: block;
            color: ${theme.color.brand};
            font-size: ${theme.icon.secondary};
        }

        &:hover {
            transform: scale(1.15);
        }
    `}
`;
