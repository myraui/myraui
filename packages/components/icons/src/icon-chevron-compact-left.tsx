import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronCompactLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 20l-3 -8l3 -8" />
    </>
  ),
  displayName: 'IconChevronCompactLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
