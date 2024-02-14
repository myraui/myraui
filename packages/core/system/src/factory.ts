import { MyraUIStyledOptions, styled } from './system';
import { As, DOMElements, HTMLMyraComponents, MyraComponent } from './system.types';

type MyraFactory = {
  <T extends As, P extends object = object>(component: T, options?: MyraUIStyledOptions): MyraComponent<T, P>;
};

function factory() {
  const cache = new Map<DOMElements, MyraComponent<DOMElements>>();

  return new Proxy(styled, {
    /**
     * @example
     * const Div = myra("div")
     * const WithMyra = myra(AnotherComponent)
     */
    apply(target, thisArg, argArray: [DOMElements, MyraUIStyledOptions]) {
      return styled(...argArray);
    },
    /**
     * @example
     * <myra.div />
     */
    get(_, element: DOMElements) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    },
  }) as MyraFactory & HTMLMyraComponents;
}

export const myra = factory();
