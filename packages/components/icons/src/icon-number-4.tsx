import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNumber4 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 20v-15l-8 11h10" />
    </>
  ),
  displayName: 'IconNumber4',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
