import styled, { css } from "styled-components";

export const Container = styled.main`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: flex;
        flex-direction: column;
        row-gap: ${theme.spacing.xxl};

        .game-distributor-items__icon {
            width: max-content;
            height: min-content;
            padding: ${theme.spacing.sm};
            border: ${theme.border.size.primary} solid ${theme.color.brand};
            border-radius: ${theme.border.radius.circle};
            background: ${theme.color.variants.glass};
            color: ${theme.color.brand};
            font-size: ${theme.icon.secondary};
        }
    `}
`;

export const Testimonial = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacing.xl} ${theme.spacing.lg};
        justify-content: center;
    `}
`;

export const TestimonialGroup = styled.fieldset`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        min-height: 10rem;
        padding: ${theme.spacing.xl};
        border: ${theme.border.size.primary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.secondary};
    `}
`;

export const TestimonialLegend = styled.legend`
    ${({ theme }) => css`
        width: 50%;
        height: min-content;
        padding: ${theme.spacing.xs} ${theme.spacing.lg};
        border: ${theme.border.size.primary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.primary};
        color: ${theme.color.primary};
        font: ${theme.typography.bodyText};
        text-align: center;
    `}
`;

export const TestimonialButton = styled.button`
    ${({ theme }) => css`
        width: max-content;
        height: min-content;
        padding: ${theme.spacing.xs} ${theme.spacing.md};
        border: ${theme.border.size.primary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.primary};
        background: ${theme.color.variants.glass};
        cursor: pointer;

        .testimonial-button__icon {
            display: block;
            color: ${theme.color.brand};
            font-size: ${theme.icon.tertiary};
        }
    `}
`;

export const Form = styled.form`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        padding: ${theme.spacing.lg} ${theme.spacing.sm};
        border-radius: ${theme.border.radius.secondary};
        display: grid;
        grid: repeat(3, min-content) / 100%;
        gap: ${theme.spacing.lg};
        place-items: center;
        background-color: ${theme.color.primary};

        @media (width >= ${theme.screen.breakpoint.md}) {
            width: 85%;
            padding-inline: ${theme.spacing.xxl};
            grid: repeat(2, min-content) / repeat(2, 1fr);
            grid-template-areas:
                "item1 item3 item3"
                "item2 item3 item3";

            :nth-child(1) {
                grid-area: item1;
            }
            :nth-child(2) {
                grid-area: item2;
            }
            :nth-child(3) {
                grid-area: item3;
            }
        }
    `}
`;

export const FormGroup = styled.div`
    ${({ theme }) => css`
        width: 80%;
        height: min-content;
        padding: ${theme.spacing.sm};
        border-radius: ${theme.border.radius.primary};
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        gap: ${theme.spacing.md} ${theme.spacing.lg};
        background-color: ${theme.color.main};

        :nth-child(3) {
            width: max-content;
            padding: ${theme.spacing.xs} ${theme.spacing.xxl};
            border-radius: ${theme.border.radius.secondary};
            position: absolute;
            inset: calc(100% + ${theme.spacing.sm}) auto 0;
            background-color: ${theme.color.main};
        }
    `}
`;

export const FormInput = styled.input`
    ${({ theme }) => css`
        width: 1fr;
        height: min-content;
        border: none;
        outline: none;
        background-color: transparent;
        color: ${theme.color.primary};
        font: ${theme.typography.bodyText};
    `}
`;

export const FormButton = styled.button`
    ${({ theme }) => css`
        width: max-content;
        height: min-content;
        border: none;
        background-color: transparent;
        cursor: pointer;

        .form-button__icon {
            display: block;
            color: ${theme.color.primary};
            font-size: ${theme.icon.tertiary};
        }
    `}
`;
