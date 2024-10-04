import * as React from "react";
import { render } from "@testing-library/react";
import { FormCheckbox } from "../../../../src";

describe("FormCheckbox", () => {
  it("should render correctly", () => {
    const wrapper = render(<FormCheckbox />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
