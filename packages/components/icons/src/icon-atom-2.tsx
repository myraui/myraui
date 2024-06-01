import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAtom2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M12 21l0 .01" />
      <path d="M3 9l0 .01" />
      <path d="M21 9l0 .01" />
      <path d="M8 20.1a9 9 0 0 1 -5 -7.1" />
      <path d="M16 20.1a9 9 0 0 0 5 -7.1" />
      <path d="M6.2 5a9 9 0 0 1 11.4 0" />
    </>
  ),
  displayName: 'IconAtom2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
