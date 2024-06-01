import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCornerUpLeftDouble = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 18v-6a3 3 0 0 0 -3 -3h-7" />
      <path d="M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4" />
    </>
  ),
  displayName: 'IconCornerUpLeftDouble',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
