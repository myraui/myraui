import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBaselineDensityLarge = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4h16" />
      <path d="M4 20h16" />
    </>
  ),
  displayName: 'IconBaselineDensityLarge',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
