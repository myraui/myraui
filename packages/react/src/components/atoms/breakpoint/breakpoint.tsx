import { useBreakpoint, UseBreakpointProps } from './use-breakpoint';
import React from 'react';

export interface BreakpointProps extends UseBreakpointProps {}

const Breakpoint: React.FC<BreakpointProps> = (props) => {
  const { below, above, getBelowProps, getAboveProps } = useBreakpoint({ ...props });

  return (
    <>
      {below && React.cloneElement(below, { ...below.props, ...getBelowProps(below.props) })}
      {above && React.cloneElement(above, { ...above.props, ...getAboveProps(above.props) })}
    </>
  );
};

Breakpoint.displayName = 'MyraUI.Breakpoint';

export default Breakpoint;
