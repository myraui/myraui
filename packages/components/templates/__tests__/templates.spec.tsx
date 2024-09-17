import * as React from "react";
import { render } from "@testing-library/react";
import { Templates } from "../src";

describe("Templates", () => {
  it("should render correctly", () => {
    const wrapper = render(<Templates />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Templates ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
