import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandDaysCounter = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.779 10.007a9 9 0 1 0 -10.77 10.772" />
      <path d="M13 21h8v-7" />
      <path d="M12 8v4l3 3" />
    </>
  ),
  displayName: 'IconBrandDaysCounter',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
