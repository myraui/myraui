import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowUpCircle = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 17v-14" />
      <path d="M15 6l-3 -3l-3 3" />
      <path d="M12 17a2 2 0 1 0 0 4a2 2 0 0 0 0 -4" />
    </>
  ),
  displayName: 'IconArrowUpCircle',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
