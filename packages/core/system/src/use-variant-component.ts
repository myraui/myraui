import React, { useMemo } from 'react';
import { ClassValue, TVReturnType, VariantProps } from 'tailwind-variants';
import { mapPropsVariants, ReactRef, useDOMRef } from '@myraui/react-utils';
import { clsx, Dict } from '@myraui/shared-utils';
import { As, HTMLMyraProps } from './system.types';

type InferTV<TV> = TV extends TVReturnType<infer V, infer S, infer B, infer C, infer EV, infer ES, infer E>
  ? TVReturnType<V, S, B, C, EV, ES, E>
  : never;

type InferSlots<TV> = TV extends TVReturnType<infer V, infer S, infer B, infer C, infer EV, infer ES, infer E>
  ? ReturnType<TVReturnType<V, S, B, C, EV, ES, E>>
  : never;

type InferSlotClasses<TV> = TV extends TVReturnType<infer V, infer S, infer B, infer C, infer EV, infer ES, infer E>
  ? Record<keyof ReturnType<TVReturnType<V, S, B, C, EV, ES, E>>, ClassValue>
  : never;

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

type SlotsUseVariantComponentReturn<TV> = InferSlots<TV> extends Record<any, any>
  ? {
      slots: ReturnType<InferTV<TV>>;
      classNames: InferSlotClasses<TV>;
    }
  : Dict;

export type VariantComponentProps<TV, A extends As = 'div'> = HTMLMyraProps<A> &
  InferVariantProps<TV> & {
    /**
     * Ref to the DOM node.
     */
    ref?: React.Ref<HTMLElement | null>;
  } & SlotsComponentProps<TV>;

export type UseVariantComponentReturn<A extends As, Props extends VariantComponentProps<TV, A>, TV> = {
  Component: A;
  domRef: React.RefObject<Required<Props>['ref'] extends ReactRef<infer T> ? Exclude<T, null> : HTMLElement>;
  otherProps: Omit<Props, 'ref' | 'as' | 'classNames' | 'colorScheme'>;
  variantProps: InferVariantProps<TV>;
  colorScheme?: Props['colorScheme'];
} & SlotsUseVariantComponentReturn<TV>;

export function useVariantComponent<A extends As, TV, Props extends VariantComponentProps<TV, A>>(
  originalProps: Props,
  componentVariants: TV,
  as?: A
): UseVariantComponentReturn<A, Props, TV>;
export function useVariantComponent(originalProps: any, componentVariants: any, defaultAs: any = 'div') {
  const { props, variantProps } = mapPropsVariants(originalProps, componentVariants.variantKeys as []);

  const { ref, as, className, classNames, colorScheme, ...otherProps } = props;

  const Component = as || defaultAs || 'div';

  const domRef = useDOMRef(ref);

  const styles = useMemo(() => componentVariants({ ...variantProps }), [...Object.values(variantProps)]);

  const hasSlots = typeof styles === 'object';

  const baseStyles = useMemo(() => (hasSlots ? clsx(styles?.base, className) : clsx(className, styles)), [className, classNames, hasSlots]);

  const finalClassName = useMemo(() => (hasSlots ? styles.base({ class: baseStyles }) : baseStyles), [styles, baseStyles, hasSlots]);

  return {
    Component,
    slots: hasSlots ? styles : undefined,
    domRef,
    otherProps: { ...otherProps, className: finalClassName },
    variantProps,
    classNames: hasSlots ? classNames : undefined,
    colorScheme,
  };
}
