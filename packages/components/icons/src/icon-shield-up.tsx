import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconShieldUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.442 20.876a13.12 13.12 0 0 1 -.442 .124a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .119 6.336" />
      <path d="M19 22v-6" />
      <path d="M22 19l-3 -3l-3 3" />
    </>
  ),
  displayName: 'IconShieldUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
