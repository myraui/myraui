import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGenderGenderqueer = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
      <path d="M12 11v-8" />
      <path d="M14.5 4.5l-5 3" />
      <path d="M9.5 4.5l5 3" />
    </>
  ),
  displayName: 'IconGenderGenderqueer',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
