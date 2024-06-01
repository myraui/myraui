import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrightnessDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M12 5l0 .01" />
      <path d="M17 7l0 .01" />
      <path d="M19 12l0 .01" />
      <path d="M17 17l0 .01" />
      <path d="M12 19l0 .01" />
      <path d="M7 17l0 .01" />
      <path d="M5 12l0 .01" />
      <path d="M7 7l0 .01" />
    </>
  ),
  displayName: 'IconBrightnessDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
