import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSteeringWheel = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M12 14l0 7" />
      <path d="M10 12l-6.75 -2" />
      <path d="M14 12l6.75 -2" />
    </>
  ),
  displayName: 'IconSteeringWheel',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
