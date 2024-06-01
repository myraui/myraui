import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRuler2Off = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.03 7.97l4.97 -4.97l4 4l-5 5m-2 2l-7 7l-4 -4l7 -7" />
      <path d="M16 7l-1.5 -1.5" />
      <path d="M10 13l-1.5 -1.5" />
      <path d="M7 16l-1.5 -1.5" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconRuler2Off',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
