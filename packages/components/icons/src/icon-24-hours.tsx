import { createIcon } from '@myraui/icon';
import React from 'react';

export const Icon24Hours = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 13c.325 2.532 1.881 4.781 4 6" />
      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2" />
      <path d="M4 5v4h4" />
      <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
      <path d="M18 15v2a1 1 0 0 0 1 1h1" />
      <path d="M21 15v6" />
    </>
  ),
  displayName: 'Icon24Hours',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
