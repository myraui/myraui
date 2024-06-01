import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconIroningOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 6h6.459a3 3 0 0 1 2.959 2.507l.577 3.464l.804 4.821l.007 .044m-2.806 1.164h-15a7 7 0 0 1 7 -7h1m4 0h4.8" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconIroningOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
