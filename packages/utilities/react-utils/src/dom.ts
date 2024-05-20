import React, { Ref, RefObject, useImperativeHandle, useRef } from 'react';

export type ReactRef<T> = React.RefObject<T> | React.MutableRefObject<T> | React.Ref<T>;

export function useDOMRef<T extends HTMLOrSVGElement = HTMLElement>(ref?: RefObject<T | null> | Ref<T | null>) {
  const domRef = useRef<T>(null);

  useImperativeHandle(ref, () => domRef.current, []);

  return domRef;
}
