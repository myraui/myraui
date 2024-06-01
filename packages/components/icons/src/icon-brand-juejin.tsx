import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandJuejin = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 12l10 7.422l10 -7.422" />
      <path d="M7 9l5 4l5 -4" />
      <path d="M11 6l1 .8l1 -.8l-1 -.8z" />
    </>
  ),
  displayName: 'IconBrandJuejin',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
