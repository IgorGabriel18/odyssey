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
        gapItems: optionsSpacingType;
        itemsPosition: optionsPositionType;
    };
}

export const Container = styled.section<IContainerProps>`
    ${({ theme, $isTopOfPage, $container }) => css`
        width: 100%;
        height: min-content;
        min-height: ${$container.heightFull ? "100vh" : "min-content"};
        padding: ${$isTopOfPage ? theme.spacing.ultra : theme.spacing.xxl} ${theme.spacing.md} ${theme.spacing.xxl};
        display: grid;
        grid: min-content / min(100%, ${theme.screen.max_width});
        justify-content: center;
        justify-items: ${$container.contentBoxPositionInLargeScreen};
        align-content: center;

        ${$container.bg &&
        css`
            background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.6)), url(${$container.bg.file});
            background-position: ${$container.bg.sizeFull
                ? "center"
                : $container.contentBoxPositionInLargeScreen === "start"
                  ? "right"
                  : "left"};
            background-size: ${$container.bg.sizeFull ? "cover" : "45rem 25rem"};
            background-repeat: no-repeat;

            @media (width >= ${theme.screen.breakpoint.xxl}) {
                background-position-x: ${$container.contentBoxPositionInLargeScreen === "start"
                    ? "calc(100% - 30%)"
                    : "30%"};
            }
        `}
    `}
`;

export const ContentBox = styled.div<IContentBoxProps>`
    ${({ theme, $contentBox }) => css`
        width: min(100%, ${theme.screen.boxSize[$contentBox.size]});
        height: min-content;
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacing[$contentBox.gapItems]};
        justify-content: ${$contentBox.itemsPosition};
    `}
`;
