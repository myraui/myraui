import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNavigationCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.487 14.894l-5.487 -11.894l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l6.275 -2.127" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconNavigationCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
