import { applyComponentTheme, assignDisplayName, getDisplayName, styledFn, useCreateStyledComponent } from '../src';
import React from 'react';
import { render, renderHook } from '@testing-library/react';

describe('system', () => {
  describe('applyComponentTheme', () => {
    it('should generate the styles for a component', () => {
      const styles = applyComponentTheme('prefix')({ colorScheme: 'red' });

      expect(styles).toEqual(
        expect.objectContaining({
          '--prefix-colors-color-scheme': 'var(--prefix-colors-red-9)',
        })
      );
    });
  });

  describe('getDisplayName', () => {
    it('should return the display name of a HTML element', () => {
      expect(getDisplayName('div')).toEqual('div');
    });

    it('should return the display name of a React component', () => {
      const CustomComponent = (props: any) => {
        return <span>{props.colorScheme}</span>;
      };

      expect(getDisplayName(CustomComponent)).toEqual('CustomComponent');
    });

    it('should use the displayName of a React component', () => {
      const CustomComponent = (props: any) => {
        return <span>{props.colorScheme}</span>;
      };

      CustomComponent.displayName = 'Custom';

      expect(getDisplayName(CustomComponent)).toEqual('Custom');
    });
  });

  describe('assignDisplayName', () => {
    it('should assign a display name to a component', () => {
      const CustomComponent = (props: any) => {
        return <span>{props.colorScheme}</span>;
      };

      const el = assignDisplayName(CustomComponent)({});

      expect(el).toHaveProperty('displayName', 'myra.CustomComponent');
      expect(el).toHaveProperty('__el', CustomComponent);
    });
  });

  describe('useCreateStyledComponent', () => {
    it('should create a styled component', () => {
      const CustomComponent = (props: any) => {
        return <span className={props.className}>{props.colorScheme}</span>;
      };

      const { result } = renderHook(() => useCreateStyledComponent(CustomComponent));

      expect(result.current.displayName).toEqual('myra.CustomComponent');

      const { container } = render(<result.current colorScheme="red" />);

      expect(container.firstChild).toBeInTheDocument();

      expect(container.firstChild).toHaveClass(/css-.*/); // verify the styled component classname
      expect(container.firstChild).toHaveTextContent('red'); // verify the colorscheme
    });
  });

  describe('HTMLElements', () => {
    const Component = styledFn('div');

    it('should render correctly', () => {
      const { container } = render(<Component />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it('should pass the ref', () => {
      const ref = React.createRef<HTMLDivElement>();

      render(<Component ref={ref} />);

      expect(ref.current).not.toBeNull();
    });
  });
});
