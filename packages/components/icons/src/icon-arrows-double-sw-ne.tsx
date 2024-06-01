import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsDoubleSwNe = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3l-11 11" />
      <path d="M3 10v4h4" />
      <path d="M17 10h4v4" />
      <path d="M10 21l11 -11" />
    </>
  ),
  displayName: 'IconArrowsDoubleSwNe',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
