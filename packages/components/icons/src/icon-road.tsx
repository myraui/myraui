import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRoad = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 19l4 -14" />
      <path d="M16 5l4 14" />
      <path d="M12 8v-2" />
      <path d="M12 13v-2" />
      <path d="M12 18v-2" />
    </>
  ),
  displayName: 'IconRoad',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
