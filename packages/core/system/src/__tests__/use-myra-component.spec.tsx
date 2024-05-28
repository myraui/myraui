import { render, renderHook } from '@testing-library/react';
import { useMyraComponent } from '../';
import { tv } from 'tailwind-variants';
import React from 'react';

const baseStyles = tv({ base: 'bg-red', variants: { size: { sm: 'h-2' } } });

const slotStyles = tv({ slots: { base: 'bg-blue', other: 'bg-red' }, variants: { size: { sm: 'h-4' } } });

describe('useMyraComponent', () => {
  describe('baseStyles', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { result } = renderHook(() => useMyraComponent({ size: 'sm', 'aria-disabled': true, colorScheme: 'primary', ref }, baseStyles, 'span'));

    it('should create the Component to be rendered', () => {
      const Component = result.current.Component;

      expect(Component).toEqual('span');
    });

    it('should return the original props', () => {
      expect(result.current.componentProps).toEqual({ 'aria-disabled': true, className: 'bg-red h-2', colorScheme: 'primary', ref });
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
