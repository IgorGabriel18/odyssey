import { render } from "@testing-library/react";

import { MockProviders } from "~tests/global-mocks";

import { ListCard } from ".";

describe("ListCard component", () => {
    it("Should correctly apply the size specified through the $size property and must not have children break to the component", () => {
        const { container, asFragment } = render(
            <MockProviders>
                <ListCard $size="full">
                    <h1>Child</h1>
                </ListCard>
            </MockProviders>
        );

        const element = container.firstChild;
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyleRule("width", "100%");
        expect(element).toHaveStyleRule("flex-wrap", "nowrap");

        expect(asFragment()).toMatchSnapshot();
    });
    it("Should correctly apply the size specified through the $size property and must have children break to the component", () => {
        const { container, asFragment } = render(
            <MockProviders>
                <ListCard
                    $size="full"
                    $wrap
                >
                    <h1>Child</h1>
                </ListCard>
            </MockProviders>
        );

        const element = container.firstChild;
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyleRule("width", "100%");
        expect(element).toHaveStyleRule("flex-wrap", "wrap");

        expect(asFragment()).toMatchSnapshot();
    });
});
