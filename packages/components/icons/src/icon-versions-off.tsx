import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconVersionsOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10.184 6.162a2 2 0 0 1 1.816 -1.162h6a2 2 0 0 1 2 2v9m-1.185 2.827a1.993 1.993 0 0 1 -.815 .173h-6a2 2 0 0 1 -2 -2v-7" />
      <path d="M7 7v10" />
      <path d="M4 8v8" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconVersionsOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
