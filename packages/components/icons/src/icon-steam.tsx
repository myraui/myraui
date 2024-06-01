import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSteam = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M4 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M20 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 20m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M5.5 5.5l3 3" />
      <path d="M15.5 15.5l3 3" />
      <path d="M18.5 5.5l-3 3" />
      <path d="M8.5 15.5l-3 3" />
    </>
  ),
  displayName: 'IconSteam',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
