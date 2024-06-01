import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLineDotted = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12v.01" />
      <path d="M8 12v.01" />
      <path d="M12 12v.01" />
      <path d="M16 12v.01" />
      <path d="M20 12v.01" />
    </>
  ),
  displayName: 'IconLineDotted',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
