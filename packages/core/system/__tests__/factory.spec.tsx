import { myra } from '../src';
import React from 'react';
import { render } from '@testing-library/react';

describe('factory', () => {
  it('should create a styled component from a DOM element', () => {
    const Div = myra('div');
    const { container } = render(<Div colorScheme="red" />);

    expect(container.firstChild).toBeInTheDocument();

    expect(container.firstChild).toHaveClass('color-scheme-red');
  });

  it('should create a styled component from a custom component', () => {
    const CustomComponent = (props: any) => {
      return <span>{props.colorScheme}</span>;
    };

    const Custom = myra(CustomComponent);
    const { container } = render(<Custom colorScheme="red" />);

    expect(container.firstChild).toBeInTheDocument();

    expect(container.innerHTML).toEqual(`<span>red</span>`);
  });
});
