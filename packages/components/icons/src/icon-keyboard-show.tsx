import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconKeyboardShow = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 3m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
      <path d="M6 7l0 .01" />
      <path d="M10 7l0 .01" />
      <path d="M14 7l0 .01" />
      <path d="M18 7l0 .01" />
      <path d="M6 11l0 .01" />
      <path d="M18 11l0 .01" />
      <path d="M10 11l4 0" />
      <path d="M10 19l2 2l2 -2" />
    </>
  ),
  displayName: 'IconKeyboardShow',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
