import { fireEvent, render } from "@testing-library/react";

import { theme } from "~styles/theme";
import { MockProviders, handleClick } from "~tests/global-mocks";

import { LinkRef } from ".";

describe("LinkRef component", () => {
    it("Should render with its required properties", () => {
        const { getByText, asFragment } = render(
            <MockProviders>
                <LinkRef
                    href="#sectionId"
                    $color="primary"
                    $typography="bodyText"
                    $align="center"
                >
                    Link
                </LinkRef>
            </MockProviders>
        );

        const element = getByText("Link");
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyleRule("color", theme.color.primary);

        expect(asFragment()).toMatchSnapshot();
    });
    it("Should handle click event", () => {
        const { getByText } = render(
            <MockProviders>
                <LinkRef
                    href="#sectionId"
                    onClick={handleClick}
                    $color="primary"
                    $typography="bodyText"
                    $align="center"
                >
                    Link
                </LinkRef>
            </MockProviders>
        );

        fireEvent.click(getByText("Link"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
