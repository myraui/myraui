import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandNationalGeographic = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 3h10v18h-10z" />
    </>
  ),
  displayName: 'IconBrandNationalGeographic',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
