import React, { useMemo } from 'react';
import { ClassValue, TVReturnType, VariantProps } from 'tailwind-variants';
import { mapPropsVariants } from '@myraui/react-utils';
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
  : {};

export type MyraComponentProps<TV, A extends As = 'div'> = HTMLMyraProps<A> &
  InferVariantProps<TV> &
  Assign<
    {
      /**
       * Ref to the DOM node.
       */
      ref?: React.Ref<HTMLOrSVGElement | null>;
    },
    SlotsComponentProps<TV>
  >;

export type UseMyraComponentReturn<A extends As, Props extends MyraComponentProps<TV, A>, TV> = {
  Component: MyraComponent;
  variantProps: InferVariantProps<TV>;
  colorScheme?: Props['colorScheme'];
  componentProps: Omit<Props, 'colorScheme' | 'ref'>;
  slots: InferSlots<TV> extends Record<any, any> ? InferSlots<TV> : undefined;
  classNames?: Props['classNames'];
  domRef: React.RefObject<Element>;
};

export function useMyraComponent<A extends As, TV, Props extends MyraComponentProps<TV, A>>(
  originalProps: Props & Dict,
  componentVariants: TV,
  as?: A
): UseMyraComponentReturn<A, Props, TV>;
export function useMyraComponent(originalProps: any, componentVariants: any, defaultAs: any = 'div') {
  const { props, variantProps } = mapPropsVariants(originalProps, componentVariants.variantKeys as []);

  const { ref, as, className, classNames, colorScheme, ...otherProps } = props;

  const styles = useMemo(() => componentVariants({ ...variantProps }), [...Object.values(variantProps)]);

  const hasSlots = typeof styles === 'object';

  const baseStyles = useMemo(() => (hasSlots ? clsx(styles?.base, className) : clsx(className, styles)), [className, classNames, hasSlots]);

  const finalClassName = useMemo(() => (hasSlots ? styles.base({ class: baseStyles }) : baseStyles), [styles, baseStyles, hasSlots]);

  const Component = useMemo(() => {
    return (props: any) => <myra.div as={as || defaultAs} colorScheme={colorScheme} className={finalClassName} {...props} ref={ref} />;
  }, [as, defaultAs, colorScheme, finalClassName]);

  return {
    componentProps: { ...otherProps, className: finalClassName },
    Component,
    slots: hasSlots ? styles : undefined,
    variantProps,
    classNames: hasSlots ? classNames : undefined,
    colorScheme,
    domRef: ref,
  };
}
