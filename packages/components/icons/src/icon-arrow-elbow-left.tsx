import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowElbowLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 14v-6h6" />
      <path d="M3 8l9 9l9 -9" />
    </>
  ),
  displayName: 'IconArrowElbowLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
