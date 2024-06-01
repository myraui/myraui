import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBadges = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 17v-4l-5 3l-5 -3v4l5 3z" />
      <path d="M17 8v-4l-5 3l-5 -3v4l5 3z" />
    </>
  ),
  displayName: 'IconBadges',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
