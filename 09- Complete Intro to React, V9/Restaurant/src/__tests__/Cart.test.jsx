import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";

test("snapshot with nothing in cart", () => {
    const { asFragment } = render(<Cart cart={[]} />);
    expect(asFragment()).toMatchSnapshot();
    // used instead of creating the __snapshots__ folder as it shows it here in the file itself.
    // expect(asFragment()).toMatchInlineSnapshot();
});