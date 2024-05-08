import * as React from "react";
import { render } from "@testing-library/react";
import { Icons } from "../src";

describe("Icons", () => {
  it("should render correctly", () => {
    const wrapper = render(<Icons />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Icons ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
