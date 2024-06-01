import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBracketsOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 5v15h3" />
      <path d="M16 4h3v11m0 4v1h-3" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconBracketsOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
