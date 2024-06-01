import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZodiacCancer = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M18 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M3 12a10 6.5 0 0 1 14 -6.5" />
      <path d="M21 12a10 6.5 0 0 1 -14 6.5" />
    </>
  ),
  displayName: 'IconZodiacCancer',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
