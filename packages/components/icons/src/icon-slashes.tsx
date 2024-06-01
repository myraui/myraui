import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSlashes = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 5l-10 14" />
      <path d="M20 5l-10 14" />
    </>
  ),
  displayName: 'IconSlashes',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
