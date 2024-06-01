import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCell = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4l-4 2v5l4 2l4 -2v-5z" />
      <path d="M12 11l4 2l4 -2v-5l-4 -2l-4 2" />
      <path d="M8 13v5l4 2l4 -2v-5" />
    </>
  ),
  displayName: 'IconCell',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
