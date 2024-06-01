import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTorii = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4c5.333 1.333 10.667 1.333 16 0" />
      <path d="M4 8h16" />
      <path d="M12 5v3" />
      <path d="M18 4.5v15.5" />
      <path d="M6 4.5v15.5" />
    </>
  ),
  displayName: 'IconTorii',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
