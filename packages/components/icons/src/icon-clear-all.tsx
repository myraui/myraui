import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClearAll = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 6h12" />
      <path d="M6 12h12" />
      <path d="M4 18h12" />
    </>
  ),
  displayName: 'IconClearAll',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
