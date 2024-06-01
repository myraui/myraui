import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBaselineDensitySmall = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 3h16" />
      <path d="M4 9h16" />
      <path d="M4 15h16" />
      <path d="M4 21h16" />
    </>
  ),
  displayName: 'IconBaselineDensitySmall',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
