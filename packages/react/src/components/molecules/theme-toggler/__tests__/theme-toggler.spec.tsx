import * as React from "react";
import { render } from "@testing-library/react";
import ThemeToggler from "../theme-toggler";

describe("ThemeToggler", () => {
  it("should render correctly", () => {
    const wrapper = render(<ThemeToggler />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<ThemeToggler ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
