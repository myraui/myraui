import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGrid4x4 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
      <path d="M6 3v18" />
      <path d="M12 3v18" />
      <path d="M18 3v18" />
    </>
  ),
  displayName: 'IconGrid4x4',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
