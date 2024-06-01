import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBadgeUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 11v6l-5 -4l-5 4v-6l5 -4z" />
    </>
  ),
  displayName: 'IconArrowBadgeUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
