import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZodiacAquarius = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 10l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
      <path d="M3 17l3 -3l3 3l3 -3l3 3l3 -3l3 3" />
    </>
  ),
  displayName: 'IconZodiacAquarius',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
