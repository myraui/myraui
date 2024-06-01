import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconVectorOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.68 6.733a1 1 0 0 1 -.68 .267h-2a1 1 0 0 1 -1 -1v-2c0 -.276 .112 -.527 .293 -.708" />
      <path d="M17 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
      <path d="M20.72 20.693a1 1 0 0 1 -.72 .307h-2a1 1 0 0 1 -1 -1v-2c0 -.282 .116 -.536 .304 -.718" />
      <path d="M3 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
      <path d="M5 7v10" />
      <path d="M19 7v8" />
      <path d="M9 5h8" />
      <path d="M7 19h10" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconVectorOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
