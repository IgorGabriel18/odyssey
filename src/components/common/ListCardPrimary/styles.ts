import styled, { css } from "styled-components";

export interface IContainerProps {
    $container: {
        scroll?: true;
        size: "full" | "min";
    };
}
export interface IImageProps {
    $size: "full" | "min";
}

export const Container = styled.li<IContainerProps>`
    ${({ $container }) => css`
        width: ${$container.size === "full" ? "100%" : "min(100%, 16rem)"};
        height: min-content;

        ${$container.scroll &&
        css`
            scroll-snap-align: center;
        `}
    `}
`;

export const Figure = styled.figure`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(2, min-content) / 100%;
        row-gap: ${theme.spacing.sm};
        justify-items: center;
    `}
`;

export const Image = styled.img<IImageProps>`
    ${({ $size }) => css`
        width: ${$size === "full" ? "100%" : ""};
        height: ${$size === "full" ? "min-content" : ""};
    `}
`;

export const Figcaption = styled.figcaption`
    ${({ theme }) => css`
        color: ${theme.color.primary};
        font: ${theme.typography.bodyText};
        text-align: center;
    `}
`;
