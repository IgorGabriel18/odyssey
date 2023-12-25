import styled, { css } from "styled-components";

import { optionsBoxSizeType, optionsPositionType, optionsSpacingType } from "~types/global-types";

export interface IContainerProps {
    $isTopOfPage?: true;
    $container: {
        heightFull?: true;
        contentBoxPositionInLargeScreen: optionsPositionType;
        bg?: {
            file: string;
            sizeFull?: true;
        };
    };
}
export interface IContentBoxProps {
    $contentBox: {
        size: optionsBoxSizeType;
        itemsGap: optionsSpacingType;
        itemsPosition: optionsPositionType;
    };
}

export const Container = styled.section<IContainerProps>`
    ${({ theme, ...style }) => css`
        width: 100%;
        height: min-content;
        min-height: ${style.$container.heightFull ? "100vh" : "min-content"};
        padding: ${style.$isTopOfPage ? theme.spacing.ultra : theme.spacing.xxl} ${theme.spacing.md}
            ${theme.spacing.xxl};
        display: grid;
        grid: min-content / min(100%, ${theme.screen.max_width});
        place-content: center;
        justify-items: ${style.$container.contentBoxPositionInLargeScreen};

        ${style.$container.bg &&
        css`
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${style.$container.bg.file});
            background-position: ${style.$container.bg.sizeFull
                ? "center"
                : style.$container.contentBoxPositionInLargeScreen === "start"
                  ? "right"
                  : "left"};
            background-size: ${style.$container.bg.sizeFull ? "cover" : "45rem 25rem"};
            background-repeat: no-repeat;

            @media (width >= ${theme.screen.breakpoint.xxl}) {
                background-position-x: ${style.$container.contentBoxPositionInLargeScreen === "start"
                    ? "calc(100% - 30%)"
                    : "30%"};
            }
        `}
    `}
`;

export const ContentBox = styled.div<IContentBoxProps>`
    ${({ theme, ...style }) => css`
        width: min(100%, ${theme.screen.boxSize[style.$contentBox.size]});
        height: min-content;
        display: flex;
        flex-direction: column;
        row-gap: ${theme.spacing[style.$contentBox.itemsGap]};
        align-items: ${style.$contentBox.itemsPosition};
    `}
`;
