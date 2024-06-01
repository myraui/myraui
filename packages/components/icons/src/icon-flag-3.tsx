import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFlag3 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" />
    </>
  ),
  displayName: 'IconFlag3',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
