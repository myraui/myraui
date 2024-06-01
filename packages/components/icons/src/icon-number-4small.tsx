import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNumber4Small = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 8v3a1 1 0 0 0 1 1h3" />
      <path d="M14 8v8" />
    </>
  ),
  displayName: 'IconNumber4Small',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
