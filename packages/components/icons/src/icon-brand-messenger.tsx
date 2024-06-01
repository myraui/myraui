import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandMessenger = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
      <path d="M8 13l3 -2l2 2l3 -2" />
    </>
  ),
  displayName: 'IconBrandMessenger',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
