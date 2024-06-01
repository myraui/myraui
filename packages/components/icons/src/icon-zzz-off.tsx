import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZzzOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12h6l-6 8h6" />
      <path d="M14 4h6l-5.146 6.862m1.146 1.138h4" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconZzzOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
