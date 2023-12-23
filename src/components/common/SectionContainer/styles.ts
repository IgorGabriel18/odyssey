import styled, { css } from "styled-components";

import { optionsBoxSizeType, optionsPositionType, optionsSpacingType } from "~types/global-types";

export interface IContainerProps {
    $isTopOfPage?: true;
    $container: {
        heightFull: boolean;
        contentBoxPositionInLargeScreen: optionsPositionType;
        bg?: {
            file: string;
            sizeFull: boolean;
        };
    };
}
export interface IContentBoxProps {
    $contentBox: {
        size: optionsBoxSizeType;
        gapItems: optionsSpacingType;
        itemsPosition: optionsPositionType;
    };
}

export const Container = styled.section<IContainerProps>`
    ${({ theme, ...rest }) => css`
        width: 100%;
        height: min-content;
        min-height: ${rest.$container.heightFull ? "100vh" : "min-content"};
        padding: ${rest.$isTopOfPage ? theme.spacing.ultra : theme.spacing.xxl} ${theme.spacing.md} ${theme.spacing.xxl};
        display: grid;
        grid: min-content / min(100%, ${theme.screen.max_width});
        justify-content: center;
        justify-items: ${rest.$container.contentBoxPositionInLargeScreen};
        align-content: center;

        ${rest.$container.bg &&
        css`
            background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.6)), url(${rest.$container.bg.file});
            background-position: ${rest.$container.bg.sizeFull
                ? "center"
                : rest.$container.contentBoxPositionInLargeScreen === "start"
                  ? "right"
                  : "left"};
            background-size: ${rest.$container.bg.sizeFull ? "cover" : "45rem 25rem"};
            background-repeat: no-repeat;

            @media (width >= ${theme.screen.breakpoint.xxl}) {
                background-position-x: ${rest.$container.contentBoxPositionInLargeScreen === "start"
                    ? "calc(100% - 30%)"
                    : "30%"};
            }
        `}
    `}
`;

export const ContentBox = styled.div<IContentBoxProps>`
    ${({ theme, ...rest }) => css`
        width: min(100%, ${theme.screen.boxSize[rest.$contentBox.size]});
        height: min-content;
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacing[rest.$contentBox.gapItems]};
        justify-content: ${rest.$contentBox.itemsPosition};
    `}
`;
