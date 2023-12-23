import styled, { css } from "styled-components";

export const Container = styled.li`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
    `}
`;
