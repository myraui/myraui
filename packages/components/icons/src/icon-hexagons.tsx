import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHexagons = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 18v-5l4 -2l4 2v5l-4 2z" />
      <path d="M8 11v-5l4 -2l4 2v5" />
      <path d="M12 13l4 -2l4 2v5l-4 2l-4 -2" />
    </>
  ),
  displayName: 'IconHexagons',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
