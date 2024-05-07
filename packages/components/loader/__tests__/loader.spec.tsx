import * as React from 'react';
import { Loader } from '../src';
import { renderWithTheme } from '@myraui/react-test-utils';

describe('Loader', () => {
  it('should render correctly', () => {
    const wrapper = renderWithTheme(<Loader />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    renderWithTheme(<Loader ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
