import * as React from "react";
import { render } from "@testing-library/react";
import { SubmitButton } from "../../../../src";

describe("SubmitButton", () => {
  it("should render correctly", () => {
    const wrapper = render(<SubmitButton />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
