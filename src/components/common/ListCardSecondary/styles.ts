import styled, { css } from "styled-components";

export const Container = styled.li`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid:
            "item1"
            "item2"
            "item3";
        gap: ${theme.spacing.sm} ${theme.spacing.lg};
        place-items: center;

        .container__icon {
            width: max-content;
            height: min-content;
            padding: ${theme.spacing.sm};
            border-radius: ${theme.border.radius.circle};
            grid-area: item1;
            font-size: ${theme.icon.primary};
            background: linear-gradient(to right, ${theme.color.brand}, ${theme.color.main});
            color: ${theme.color.primary};
        }

        :nth-child(2) {
            grid-area: item2;
        }
        :nth-child(3) {
            grid-area: item3;
        }

        @media (width >= ${theme.screen.breakpoint.md}) {
            grid:
                "item1 item2"
                "item1 item3";
            justify-content: start;
            justify-items: start;
        }
    `}
`;
