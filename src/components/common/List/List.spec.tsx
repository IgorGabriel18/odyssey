import { render } from "@testing-library/react";

import { MockProviders } from "~tests/global-mocks";

import { List } from ".";

describe("List component", () => {
    it("Should render correctly with a child", () => {
        const { container, getByText, asFragment } = render(
            <MockProviders>
                <List>
                    <h1>Child</h1>
                </List>
            </MockProviders>
        );

        const elementContainer = container.firstChild;
        expect(elementContainer).toBeInTheDocument();
        const elementChild = getByText("Child");
        expect(elementChild).toBeInTheDocument();

        expect(asFragment()).toMatchSnapshot();
    });
});
