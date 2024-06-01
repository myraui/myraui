import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNavigationWest = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 3l1 6l2 -3.75l2 3.75l1 -6" />
      <path d="M16 21l-4 -8l-4 8l4 -2z" />
    </>
  ),
  displayName: 'IconNavigationWest',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
