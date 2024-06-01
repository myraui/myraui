import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBadgeDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 13v-6l-5 4l-5 -4v6l5 4z" />
    </>
  ),
  displayName: 'IconArrowBadgeDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
