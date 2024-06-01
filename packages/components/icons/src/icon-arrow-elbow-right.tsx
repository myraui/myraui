import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowElbowRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 14v-6h-6" />
      <path d="M21 8l-9 9l-9 -9" />
    </>
  ),
  displayName: 'IconArrowElbowRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
