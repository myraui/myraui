import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowsMoveVertical = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 18l3 3l3 -3" />
      <path d="M12 15v6" />
      <path d="M15 6l-3 -3l-3 3" />
      <path d="M12 3v6" />
    </>
  ),
  displayName: 'IconArrowsMoveVertical',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
