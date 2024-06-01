import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCross = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 21h4v-9h5v-4h-5v-5h-4v5h-5v4h5z" />
    </>
  ),
  displayName: 'IconCross',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
