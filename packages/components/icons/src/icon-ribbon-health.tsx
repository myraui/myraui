import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRibbonHealth = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 21s9.286 -9.841 9.286 -13.841a3.864 3.864 0 0 0 -1.182 -3.008a4.13 4.13 0 0 0 -3.104 -1.144a4.13 4.13 0 0 0 -3.104 1.143a3.864 3.864 0 0 0 -1.182 3.01c0 4 9.286 13.84 9.286 13.84" />
    </>
  ),
  displayName: 'IconRibbonHealth',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
