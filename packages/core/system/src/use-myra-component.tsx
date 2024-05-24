import React, { useMemo } from 'react';
import { ClassValue, TVReturnType, VariantProps } from 'tailwind-variants';
import { mapPropsVariants } from '@myraui/react-utils';
import { Assign, clsx, Dict } from '@myraui/shared-utils';
import { As, HTMLMyraProps, MyraComponent } from './system.types';

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
  : object;

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
  componentProps: Omit<Props, keyof InferVariantProps<TV>> & { ref: React.RefObject<Element> };
  slots: InferSlots<TV> extends Record<any, any> ? InferSlots<TV> : undefined;
  classNames?: Props['classNames'];
};

function useSlots<TV extends (args: InferVariantProps<TV>) => any>(styles: TV, variantProps: InferVariantProps<TV>, classNames: Dict) {
  return useMemo(() => {
    const slots = styles({ ...variantProps });

    if (typeof slots === 'object') {
      return Object.entries(slots).reduce((acc, [key, value]: any) => {
        return {
          ...acc,
          [key]: ({ class: className, ...otherArgs }: any = {}) => value({ class: clsx(classNames?.[key], className), ...otherArgs }),
        };
      }, {});
    }

    return slots;
  }, [...Object.values(variantProps)]);
}

export function useMyraComponent<A extends As, TV, Props extends MyraComponentProps<TV, A>>(
  originalProps: Props,
  componentVariants: TV,
  as?: A
): UseMyraComponentReturn<A, Props, TV>;
export function useMyraComponent(originalProps: any, componentVariants: any, defaultAs: any = 'div') {
  const { props, variantProps } = mapPropsVariants(originalProps, componentVariants.variantKeys as []);

  const { ref, as, className, classNames, colorScheme, ...otherProps } = props;

  const slots = useSlots(componentVariants, variantProps, classNames);

  const finalClassName = useMemo(() => {
    return typeof slots === 'object' ? slots.base({ class: className }) : clsx(className, slots);
  }, [slots, className]);

  return {
    componentProps: { ...otherProps, className: finalClassName, colorScheme, ref },
    Component: as || defaultAs,
    slots,
    variantProps,
    classNames,
  };
}
