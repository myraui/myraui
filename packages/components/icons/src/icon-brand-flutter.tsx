import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandFlutter = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 14l-3 -3l8 -8h6z" />
      <path d="M14 21l-5 -5l5 -5h5l-5 5l5 5z" />
    </>
  ),
  displayName: 'IconBrandFlutter',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
