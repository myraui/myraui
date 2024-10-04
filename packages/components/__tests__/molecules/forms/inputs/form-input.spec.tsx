import * as React from "react";
import { render } from "@testing-library/react";
import { FormInput } from "../../../../src";

describe("FormInput", () => {
  it("should render correctly", () => {
    const wrapper = render(<FormInput />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
