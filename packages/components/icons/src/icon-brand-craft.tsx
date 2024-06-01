import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandCraft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4h-8a8 8 0 1 0 0 16h8a8 8 0 0 0 -8 -8a8 8 0 0 0 8 -8" />
      <path d="M4 12h8" />
      <path d="M12 4v16" />
    </>
  ),
  displayName: 'IconBrandCraft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
