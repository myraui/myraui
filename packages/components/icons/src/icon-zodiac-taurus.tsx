import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconZodiacTaurus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 3a6 6 0 0 0 12 0" />
      <path d="M12 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    </>
  ),
  displayName: 'IconZodiacTaurus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
