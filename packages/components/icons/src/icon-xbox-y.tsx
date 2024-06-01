import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconXboxY = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
      <path d="M9 8l3 4" />
      <path d="M15 8l-2.988 3.984l-.012 4.016" />
    </>
  ),
  displayName: 'IconXboxY',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
