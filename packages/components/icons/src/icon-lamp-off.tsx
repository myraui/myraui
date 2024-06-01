import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLampOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 20h6" />
      <path d="M12 20v-8" />
      <path d="M7.325 7.35l-2.325 4.65h7m4 0h3l-4 -8h-6l-.338 .676" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconLampOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
