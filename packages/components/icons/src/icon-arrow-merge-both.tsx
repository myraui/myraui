import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowMergeBoth = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 8l-4 -4l-4 4" />
      <path d="M12 20v-16" />
      <path d="M18 18c-4 -1.333 -6 -4.667 -6 -10" />
      <path d="M6 18c4 -1.333 6 -4.667 6 -10" />
    </>
  ),
  displayName: 'IconArrowMergeBoth',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
