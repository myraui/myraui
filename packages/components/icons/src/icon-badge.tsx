import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBadge = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 17v-13l-5 3l-5 -3v13l5 3z" />
    </>
  ),
  displayName: 'IconBadge',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
