import { render } from "@testing-library/react";

import { theme } from "~styles/theme";
import { MockProviders } from "~tests/global-mocks";

import { SectionContainer } from ".";

describe("SectionContainer component", () => {
    it("Should render with your required props", () => {
        const { container, getByText, asFragment } = render(
            <MockProviders>
                <SectionContainer
                    $container={{ contentBoxPositionInLargeScreen: "center" }}
                    $contentBox={{ size: "full", itemsGap: "md", itemsPosition: "center" }}
                >
                    Child
                </SectionContainer>
            </MockProviders>
        );

        const elementContainer = container.firstChild;
        expect(elementContainer).toBeInTheDocument();
        expect(elementContainer).toHaveStyleRule("min-height", "min-content");
        expect(elementContainer).toHaveStyleRule(
            "padding",
            `${theme.spacing.xxl} ${theme.spacing.md} ${theme.spacing.xxl}`
        );
        expect(elementContainer).toHaveStyleRule("justify-items", "center");
        expect(elementContainer).not.toHaveStyleRule("background-image");

        const elementChild = getByText("Child");
        expect(elementChild).toBeInTheDocument();
        expect(elementChild).toHaveStyleRule("width", "min(100%, 100%)");
        expect(elementChild).toHaveStyleRule("row-gap", theme.spacing.md);
        expect(elementChild).toHaveStyleRule("align-items", "center");

        expect(asFragment()).toMatchSnapshot();
    });
    it("Should render with your optional props", () => {
        const { container, asFragment } = render(
            <MockProviders>
                <SectionContainer
                    $isTopOfPage
                    $container={{
                        heightFull: true,
                        contentBoxPositionInLargeScreen: "center",
                        bg: { file: "../assets/bg.png", sizeFull: true }
                    }}
                    $contentBox={{ size: "full", itemsGap: "md", itemsPosition: "center" }}
                >
                    Child
                </SectionContainer>
            </MockProviders>
        );

        const elementContainer = container.firstChild;
        expect(elementContainer).toBeInTheDocument();
        expect(elementContainer).toHaveStyleRule("min-height", "100vh");
        expect(elementContainer).toHaveStyleRule(
            "padding",
            `${theme.spacing.ultra} ${theme.spacing.md} ${theme.spacing.xxl}`
        );
        expect(elementContainer).toHaveStyleRule("background-size", "cover");

        expect(asFragment()).toMatchSnapshot();
    });
});
