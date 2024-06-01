import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconOmega = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 19h5v-1a7.35 7.35 0 1 1 6 0v1h5" />
    </>
  ),
  displayName: 'IconOmega',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
