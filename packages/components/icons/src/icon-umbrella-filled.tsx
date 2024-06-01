import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconUmbrellaFilled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 3a9 9 0 0 1 9 9a1 1 0 0 1 -.883 .993l-.117 .007h-7v5a1 1 0 0 0 1.993 .117l.007 -.117a1 1 0 0 1 2 0a3 3 0 0 1 -5.995 .176l-.005 -.176v-5h-7a1 1 0 0 1 -.993 -.883l-.007 -.117a9 9 0 0 1 9 -9z"
        fill="currentColor"
        style={{ strokeWidth: 'var(--myraui-icon-stroke-width, 0' }}
      />
    </>
  ),
  displayName: 'IconUmbrellaFilled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
