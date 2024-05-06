import * as React from "react";
import { render } from "@testing-library/react";
import { Loader } from "../src";

describe("Loader", () => {
  it("should render correctly", () => {
    const wrapper = render(<Loader />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Loader ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
