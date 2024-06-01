import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCone2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 5.002v.5l-8.13 14.99a1 1 0 0 1 -1.74 0l-8.13 -14.989v-.5c0 -1.659 4.03 -3.003 9 -3.003s9 1.344 9 3.002" />
    </>
  ),
  displayName: 'IconCone2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
