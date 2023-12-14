import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #root {
            width: 100%;
            height: auto;
            min-height: 100vh;
            background-color: ${theme.color.main};

            a {
                text-decoration: none;
            }

            li {
                list-style: none;
            }
        }
    `}
`;
