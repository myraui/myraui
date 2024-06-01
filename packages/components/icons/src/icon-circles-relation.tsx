import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCirclesRelation = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
      <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
    </>
  ),
  displayName: 'IconCirclesRelation',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
