import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBadgeRight = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
    </>
  ),
  displayName: 'IconArrowBadgeRight',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
