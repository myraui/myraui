import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZodiacAries = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5a5 5 0 1 0 -4 8" />
      <path d="M16 13a5 5 0 1 0 -4 -8" />
      <path d="M12 21l0 -16" />
    </>
  ),
  displayName: 'IconZodiacAries',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
