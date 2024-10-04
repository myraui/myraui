import * as React from "react";
import { render } from "@testing-library/react";
import { Form } from "../../src";

describe("Form", () => {
  it("should render correctly", () => {
    const wrapper = render(<Form />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
