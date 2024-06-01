import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsJoin = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7h5l3.5 5h9.5" />
      <path d="M3 17h5l3.495 -5" />
      <path d="M18 15l3 -3l-3 -3" />
    </>
  ),
  displayName: 'IconArrowsJoin',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
