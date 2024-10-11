import { render } from '@testing-library/react';
import * as React from 'react';
import DocsLink from '../docs-link';

describe('Breakpoint', () => {
  it('should render correctly', () => {
    const wrapper = render(<DocsLink href="#title">Title</DocsLink>);

    expect(wrapper.container).toMatchSnapshot();

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
