import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconWaveSquare = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12h5v8h4v-16h4v8h5" />
    </>
  ),
  displayName: 'IconWaveSquare',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
