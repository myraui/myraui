import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTriangleMinus2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.48 15.016l-6.843 -11.426a1.914 1.914 0 0 0 -3.274 0l-8.106 13.535a1.914 1.914 0 0 0 1.636 2.871h8.107" />
      <path d="M16 19h6" />
    </>
  ),
  displayName: 'IconTriangleMinus2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
