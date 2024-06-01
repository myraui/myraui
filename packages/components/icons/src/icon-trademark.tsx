import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTrademark = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4.5 9h5m-2.5 0v6" />
      <path d="M13 15v-6l3 4l3 -4v6" />
    </>
  ),
  displayName: 'IconTrademark',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
