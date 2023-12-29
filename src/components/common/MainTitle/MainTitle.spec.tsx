import { render } from "@testing-library/react";

import { theme } from "~styles/theme";
import { MockProviders } from "~tests/global-mocks";

import { MainTitle } from ".";

describe("MainTitle component", () => {
    it("Should render with your required props", () => {
        const { getByText, asFragment } = render(
            <MockProviders>
                <MainTitle
                    $color="primary"
                    $typography="bodyText"
                    $align="center"
                >
                    Text
                </MainTitle>
            </MockProviders>
        );

        const element = getByText("Text");
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyleRule("color", theme.color.primary);

        expect(asFragment()).toMatchSnapshot();
    });
});
