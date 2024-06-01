import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandNetflix = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 3l10 18h-4l-10 -18z" />
      <path d="M5 3v18h4v-10.5" />
      <path d="M19 21v-18h-4v10.5" />
    </>
  ),
  displayName: 'IconBrandNetflix',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
