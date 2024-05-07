import React, { useMemo } from 'react';
import { ClassValue, TVReturnType, VariantProps } from 'tailwind-variants';
import { mapPropsVariants, ReactRef, useDOMRef } from '@myraui/react-utils';
import { Assign, clsx, Dict } from '@myraui/shared-utils';
import { As, HTMLMyraProps, MyraComponent } from './system.types';
import { myra } from './factory';

type InferTV<TV> = TV extends TVReturnType<infer V, infer S, infer B, infer C, infer EV, infer ES, infer E>
  ? TVReturnType<V, S, B, C, EV, ES, E>
  : never;

type InferSlots<TV> = TV extends (...args: any) => any ? ReturnType<TV> : never;

type InferSlotClasses<TV> = { [key in keyof InferSlots<TV>]?: ClassValue };

type InferVariantProps<TV> = VariantProps<InferTV<TV>>;

type SlotsComponentProps<TV> = InferSlots<TV> extends Record<any, any>
  ? {
      /**
       * Classname or List of classes to change the classNames of an element with slots.
       * if `className` is passed, it will be added to the base slot.
       */
      classNames?: InferSlotClasses<TV>;
    }
  : Dict;

export type MyraComponentProps<TV, A extends As = 'div'> = HTMLMyraProps<A> &
  InferVariantProps<TV> & {
    /**
     * Ref to the DOM node.
     */
    ref?: React.Ref<HTMLElement | null>;
  } & SlotsComponentProps<TV>;

export type UseMyraComponentReturn<A extends As, Props extends MyraComponentProps<TV, A>, TV> = Assign<
  Props,
  {
    Component: MyraComponent;
    domRef: React.RefObject<Required<Props>['ref'] extends ReactRef<infer T> ? Exclude<T, null> : HTMLElement>;
    variantProps: InferVariantProps<TV>;
    colorScheme?: Props['colorScheme'];
    styles: InferSlots<TV>;
    classNames?: Props['classNames'];
  }
>;

export function useMyraComponent<A extends As, TV, Props extends MyraComponentProps<TV, A>>(
  originalProps: Props,
  componentVariants: TV,
  as?: A
): UseMyraComponentReturn<A, Props, TV>;
export function useMyraComponent(originalProps: any, componentVariants: any, defaultAs: any = 'div') {
  const { props, variantProps } = mapPropsVariants(originalProps, componentVariants.variantKeys as []);

  const { ref, as, className, classNames, colorScheme, ...otherProps } = props;

  const domRef = useDOMRef(ref);

  const styles = useMemo(() => componentVariants({ ...variantProps }), [...Object.values(variantProps)]);

  const hasSlots = typeof styles === 'object';

  const baseStyles = useMemo(() => (hasSlots ? clsx(styles?.base, className) : clsx(className, styles)), [className, classNames, hasSlots]);

  const finalClassName = useMemo(() => (hasSlots ? styles.base({ class: baseStyles }) : baseStyles), [styles, baseStyles, hasSlots]);

  const Component = useMemo(() => {
    return (props: any) => <myra.div as={as || defaultAs} colorScheme={colorScheme} className={finalClassName} ref={domRef} {...props} />;
  }, [as, defaultAs, colorScheme, finalClassName, domRef, otherProps]);

  return {
    ...otherProps,
    Component,
    styles: hasSlots ? styles : finalClassName,
    domRef,
    variantProps,
    classNames,
    colorScheme,
    className: finalClassName,
  };
}
