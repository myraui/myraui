import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconGenderGenderless = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
      <path d="M12 10v-7" />
      <path d="M7 15h10" />
    </>
  ),
  displayName: 'IconGenderGenderless',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
