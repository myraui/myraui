import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAccessPoint = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12l0 .01" />
      <path d="M14.828 9.172a4 4 0 0 1 0 5.656" />
      <path d="M17.657 6.343a8 8 0 0 1 0 11.314" />
      <path d="M9.168 14.828a4 4 0 0 1 0 -5.656" />
      <path d="M6.337 17.657a8 8 0 0 1 0 -11.314" />
    </>
  ),
  displayName: 'IconAccessPoint',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
