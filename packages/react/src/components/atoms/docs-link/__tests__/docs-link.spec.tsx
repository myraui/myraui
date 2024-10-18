import * as React from 'react';
import { render } from '@testing-library/react';
import DocsLink from '../docs-link';

describe('DocsLink', () => {
  it('should render correctly', () => {
    const wrapper = render(<DocsLink href="#title">Title</DocsLink>);

    expect(wrapper.container).toMatchSnapshot();

    expect(() => wrapper.unmount()).not.toThrow();
  });
});
