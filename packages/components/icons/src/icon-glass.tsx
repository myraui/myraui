import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGlass = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 21h8" />
      <path d="M12 16v5" />
      <path d="M17 5l1 6c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -6" />
      <path d="M12 5m-5 0a5 2 0 1 0 10 0a5 2 0 1 0 -10 0" />
    </>
  ),
  displayName: 'IconGlass',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
