import { render, renderHook } from '@testing-library/react';
import { useMyraComponent } from '../src';
import { tv } from 'tailwind-variants';
import React from 'react';

const baseStyles = tv({ base: 'bg-red', variants: { size: { sm: 'h-2' } } });

const slotStyles = tv({ slots: { base: 'bg-blue', other: 'bg-red' }, variants: { size: { sm: 'h-4' } } });

describe('useMyraComponent', () => {
  describe('baseStyles', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { result } = renderHook(() => useMyraComponent({ size: 'sm', isDisabled: true, colorScheme: 'primary', ref }, baseStyles, 'span'));

    it('should create the Component to be rendered', () => {
      const Component = result.current.Component;

      const { container } = render(<Component />);

      expect(container.firstChild).toHaveClass('bg-red');
      expect(container.firstChild).toHaveClass('h-2');
      expect(container.firstChild).toHaveClass('color-scheme-primary'); // verify the styled component classname

      expect(ref.current).toEqual(container.firstChild);

      expect(container.children[0].tagName.toLowerCase()).toEqual('span');
    });

    it('should return the original props', () => {
      expect(result.current.componentProps).toEqual({ isDisabled: true, className: 'bg-red h-2' });
      expect(result.current.colorScheme).toEqual('primary');
    });

    it('it should not create the slots and classNames', () => {
      expect(result.current.slots).toBeUndefined();
      expect(result.current.classNames).toBeUndefined();
    });

    it('should create the variant props', () => {
      expect(result.current.variantProps).toEqual({ size: 'sm' });
    });
  });

  describe('slotStyles', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { result } = renderHook(() =>
      useMyraComponent({ size: 'sm', colorScheme: 'primary', ref, classNames: { base: 'base-class', other: 'other-class' } }, slotStyles, 'span')
    );

    it('it should create the slots and classNames', () => {
      expect(result.current.slots).toEqual({ base: expect.any(Function), other: expect.any(Function) });
      expect(result.current.classNames).toEqual({ base: 'base-class', other: 'other-class' });
    });
  });
});
