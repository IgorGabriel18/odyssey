import styled, { css } from "styled-components";

export interface IContainerProps {
    $slideLayout?: {
        numberFrames: number;
    };
}

export const Container = styled.ul<IContainerProps>`
    ${({ theme, $slideLayout }) => css`
        width: 100%;
        height: min-content;
        gap: ${theme.spacing.xxl} ${theme.spacing.xl};

        ${$slideLayout
            ? css`
                  padding: 0 ${theme.spacing.xl} ${theme.spacing.lg};
                  overflow-x: auto;
                  scroll-snap-type: x mandatory;
                  display: grid;
                  grid: min-content / repeat(${$slideLayout.numberFrames}, min(100%, 16rem));

                  &::-webkit-scrollbar {
                      height: ${theme.border.size.secondary};
                      background-color: transparent;
                  }

                  &::-webkit-scrollbar-thumb {
                      border-radius: ${theme.border.radius.primary};
                      background-color: ${({ theme }) => theme.color.brand};
                  }
              `
            : css`
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
              `}
    `}
`;
