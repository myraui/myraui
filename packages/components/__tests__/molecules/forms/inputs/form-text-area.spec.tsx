import * as React from "react";
import { render } from "@testing-library/react";
import { FormTextArea } from "../../../../src";

describe("FormTextArea", () => {
  it("should render correctly", () => {
    const wrapper = render(<FormTextArea />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
