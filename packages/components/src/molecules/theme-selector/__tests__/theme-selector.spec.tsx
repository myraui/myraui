import React from 'react';
import { render } from '@testing-library/react';
import ThemeSelector from '../theme-selector';

describe('ThemeSelector', () => {
  it('should render correctly', () => {
    const wrapper = render(<ThemeSelector />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
