import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZzz = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12h6l-6 8h6" />
      <path d="M14 4h6l-6 8h6" />
    </>
  ),
  displayName: 'IconZzz',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
