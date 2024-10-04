import * as React from "react";
import { render } from "@testing-library/react";
import { ServerForm } from "../../../src";

describe("ServerForm", () => {
  it("should render correctly", () => {
    const wrapper = render(<ServerForm />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
