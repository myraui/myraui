import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLambda = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 20l6.5 -9" />
      <path d="M19 20c-6 0 -6 -16 -12 -16" />
    </>
  ),
  displayName: 'IconLambda',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
