import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandFortnite = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 3h7.5l-.5 4h-3v3h3v3.5h-3v6.5l-4 1z" />
    </>
  ),
  displayName: 'IconBrandFortnite',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
