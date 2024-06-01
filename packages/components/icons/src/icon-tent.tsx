import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTent = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 14l4 6h6l-9 -16l-9 16h6l4 -6" />
    </>
  ),
  displayName: 'IconTent',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
