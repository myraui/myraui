import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBadgeLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
    </>
  ),
  displayName: 'IconArrowBadgeLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
