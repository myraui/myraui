import * as React from 'react';
import { render } from '@testing-library/react';
import ThemeSwitcher from '../theme-switcher';

describe('ThemeSwitcher', () => {
  it('should render correctly', () => {
    const wrapper = render(<ThemeSwitcher />);

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
