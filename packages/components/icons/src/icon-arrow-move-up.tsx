import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowMoveUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 13v-10" />
      <path d="M9 6l3 -3l3 3" />
      <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z" />
    </>
  ),
  displayName: 'IconArrowMoveUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
