import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPinned = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" />
      <path d="M12 16l0 5" />
      <path d="M8 4l8 0" />
    </>
  ),
  displayName: 'IconPinned',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
