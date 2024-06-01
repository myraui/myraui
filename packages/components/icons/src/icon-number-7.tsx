import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNumber7 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4h8l-4 16" />
    </>
  ),
  displayName: 'IconNumber7',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
