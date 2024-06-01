import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconProtocol = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 6l-7 12" />
      <path d="M20 6l-7 12" />
      <path d="M5 14v.015" />
      <path d="M5 10.015v.015" />
    </>
  ),
  displayName: 'IconProtocol',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
