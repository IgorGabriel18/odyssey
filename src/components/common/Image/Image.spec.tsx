import { render } from "@testing-library/react";

import { theme } from "~styles/theme";
import { MockProviders } from "~tests/global-mocks";

import { Image } from ".";

describe("Image component", () => {
    it("Should render with your basic props", () => {
        const { getByAltText, asFragment } = render(
            <MockProviders>
                <Image
                    src="../assets/image.png"
                    alt="Image"
                />
            </MockProviders>
        );

        const element = getByAltText("Image");
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyleRule("width", "100%");

        expect(asFragment()).toMatchSnapshot();
    });
    it("Should correctly apply the size specified via the $size prop to the component", () => {
        const { getByAltText, asFragment } = render(
            <MockProviders>
                <Image
                    src="../assets/image.png"
                    alt="Image"
                    $size="primary"
                />
            </MockProviders>
        );

        const element = getByAltText("Image");
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyleRule("width", theme.icon.primary);

        expect(asFragment()).toMatchSnapshot();
    });
});
