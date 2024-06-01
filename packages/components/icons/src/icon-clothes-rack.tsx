import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClothesRack = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M12 7v14" />
      <path d="M9 21h6" />
      <path d="M7.757 9.243a6 6 0 0 0 8.486 0" />
    </>
  ),
  displayName: 'IconClothesRack',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
