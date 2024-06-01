import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCrop = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 5v10a1 1 0 0 0 1 1h10" />
      <path d="M5 8h10a1 1 0 0 1 1 1v10" />
    </>
  ),
  displayName: 'IconCrop',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
