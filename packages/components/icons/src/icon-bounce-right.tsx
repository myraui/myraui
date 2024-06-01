import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBounceRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 15.5c3 -1 5.5 -.5 8 4.5c.5 -3 1.5 -5.5 3 -8" />
      <path d="M18 9a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" />
    </>
  ),
  displayName: 'IconBounceRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
