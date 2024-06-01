import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRowInsertBottom = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 6v4a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1z" />
      <path d="M12 15l0 4" />
      <path d="M14 17l-4 0" />
    </>
  ),
  displayName: 'IconRowInsertBottom',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
