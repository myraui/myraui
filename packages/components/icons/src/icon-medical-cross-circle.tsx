import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMedicalCrossCircle = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M12 8v8" />
      <path d="M15.5 10l-7 4" />
      <path d="M15.5 14l-7 -4" />
    </>
  ),
  displayName: 'IconMedicalCrossCircle',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
