import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconUmbrella = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12a8 8 0 0 1 16 0z" />
      <path d="M12 12v6a2 2 0 0 0 4 0" />
    </>
  ),
  displayName: 'IconUmbrella',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
