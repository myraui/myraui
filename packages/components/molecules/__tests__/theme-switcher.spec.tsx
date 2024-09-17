import * as React from "react";
import { render } from "@testing-library/react";
import { ThemeSwitcher } from "../src";

describe("ThemeSwitcher", () => {
  it("should render correctly", () => {
    const wrapper = render(<ThemeSwitcher />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<ThemeSwitcher ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
