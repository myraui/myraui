import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSlash = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 5l-10 14" />
    </>
  ),
  displayName: 'IconSlash',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
