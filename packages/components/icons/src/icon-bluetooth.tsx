import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBluetooth = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" />
    </>
  ),
  displayName: 'IconBluetooth',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
