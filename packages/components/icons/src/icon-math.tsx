import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMath = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 5h-7l-4 14l-3 -6h-2" />
      <path d="M14 13l6 6" />
      <path d="M14 19l6 -6" />
    </>
  ),
  displayName: 'IconMath',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
