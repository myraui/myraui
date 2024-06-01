import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFlipVertical = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3l0 18" />
      <path d="M16 7l0 10l5 0l-5 -10" />
      <path d="M8 7l0 10l-5 0l5 -10" />
    </>
  ),
  displayName: 'IconFlipVertical',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
