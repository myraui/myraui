import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSunLow = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M4 12h.01" />
      <path d="M12 4v.01" />
      <path d="M20 12h.01" />
      <path d="M12 20v.01" />
      <path d="M6.31 6.31l-.01 -.01" />
      <path d="M17.71 6.31l-.01 -.01" />
      <path d="M17.7 17.7l.01 .01" />
      <path d="M6.3 17.7l.01 .01" />
    </>
  ),
  displayName: 'IconSunLow',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
