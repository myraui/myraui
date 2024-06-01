import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconEqualDouble = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 10h7" />
      <path d="M3 14h7" />
      <path d="M14 10h7" />
      <path d="M14 14h7" />
    </>
  ),
  displayName: 'IconEqualDouble',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
