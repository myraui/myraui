import { styledFn } from './system';
import { As, DOMElements, HTMLMyraComponents, MyraComponent, MyraUIStyledOptions } from './system.types';

type MyraFactory = {
  <T extends As, P extends object = object>(component: T, options?: MyraUIStyledOptions): MyraComponent<T, P>;
};

function factory() {
  const cache = new Map();

  return new Proxy(styledFn, {
    /**
     * @example
     * const Div = myra("div")
     * const WithMyra = myra(AnotherComponent)
     */
    apply(_, __, argArray: [DOMElements, MyraUIStyledOptions]) {
      return styledFn(...argArray);
    },
    /**
     * @example
     * <myra.div />
     */
    get(_, element) {
      if (!cache.has(element)) {
        cache.set(element, styledFn(element));
      }
      return cache.get(element);
    },
  });
}

export const myra = factory() as unknown as MyraFactory & HTMLMyraComponents
