import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBracketsAngleOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4h.01" />
      <path d="M6.453 6.474l-3.453 5.526l5 8" />
      <path d="M16 4l5 8l-1.917 3.067" />
      <path d="M17.535 17.544l-1.535 2.456" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconBracketsAngleOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
