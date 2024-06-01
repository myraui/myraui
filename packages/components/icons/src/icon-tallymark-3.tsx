import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTallymark3 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 5l0 14" />
      <path d="M12 5l0 14" />
      <path d="M16 5l0 14" />
    </>
  ),
  displayName: 'IconTallymark3',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
