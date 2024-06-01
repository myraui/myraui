import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZodiacScorpio = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 4a2 2 0 0 1 2 2v9" />
      <path d="M5 6a2 2 0 0 1 4 0v9" />
      <path d="M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3" />
    </>
  ),
  displayName: 'IconZodiacScorpio',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
