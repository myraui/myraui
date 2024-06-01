import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBracketsAngle = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4l-5 8l5 8" />
      <path d="M16 4l5 8l-5 8" />
    </>
  ),
  displayName: 'IconBracketsAngle',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
