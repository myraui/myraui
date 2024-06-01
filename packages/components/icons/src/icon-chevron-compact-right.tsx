import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronCompactRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 4l3 8l-3 8" />
    </>
  ),
  displayName: 'IconChevronCompactRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
