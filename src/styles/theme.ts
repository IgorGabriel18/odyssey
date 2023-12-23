import { keyframes } from "styled-components";

export const theme = {
    color: {
        brand: "#f68e5f",
        main: "#070320",
        primary: "#ffffff",
        secondary: "#cecece",
        variants: {
            error: "#fc2a2a",
            glass: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))"
        }
    },
    screen: {
        max_width: "90rem",
        breakpoint: {
            tny: "20rem",
            xs: "30rem",
            sm: "36rem",
            md: "48rem",
            lg: "62rem",
            xl: "75rem",
            xxl: "90rem",
            mega: "120rem"
        },
        boxSize: {
            full: "100%",
            sm: "30rem",
            md: "45rem",
            lg: "55em",
            xl: "75rem"
        }
    },
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        xxl: "3rem",
        mega: "4rem",
        super: "6rem",
        ultra: "10rem"
    },
    typography: {
        legend: "normal 400 0.75rem / normal 'Montserrat', 'sans-serif'",
        bodyText: "normal 400 1rem / normal 'Montserrat', 'sans-serif'",
        subTitle: "normal 500 1.125rem / normal 'Montserrat', 'sans-serif'",
        sectionTitle: "normal 600 1.5rem / normal 'Montserrat', 'sans-serif'",
        mainTitle: "normal 700 2.25rem / normal 'Montserrat', 'sans-serif'"
    },
    blur: "0.25rem",
    icon: {
        primary: "3rem",
        secondary: "1.25rem",
        tertiary: "2.25rem"
    },
    border: {
        size: {
            primary: "0.125rem",
            secondary: "0.5rem"
        },
        radius: {
            circle: "100%",
            primary: "4rem",
            secondary: "0.5rem"
        }
    },
    time: {
        primary: "0.75s",
        secondary: "0.75s",
        tertiary: "0.5s"
    },
    animation: {
        simpleRender: keyframes`
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        `,
        swingEffect: keyframes`
            0% {
                transform: rotate(0deg);
            }
            25% {
                transform: rotate(5deg);
            }
            50% {
                transform: rotate(-5deg);
            }
            100% {
                transform: rotate(0deg);
            }
        `,
        navbar: {
            entrance: keyframes`
                from {
                    transform: translateX(100%) skewX(20deg);
                    opacity: 0;
                }
                to {
                    transform: translateX(0) skewX(0deg);
                    opacity: 1;
                }
            `,
            exit: keyframes`
                from {
                    transform: translateX(0) skewX(0deg);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%) skewX(20deg);
                    opacity: 0;
                }
            `
        }
    }
};
