import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronCompactUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 13l8 -3l8 3" />
    </>
  ),
  displayName: 'IconChevronCompactUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
