import React from 'react';
import { cn } from '@nextui-org/react';
import { breakpointClasses } from '@myraui/theme';

type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const Breakpoint: React.FC<BreakpointProps> = ({ on = 'md', below, above }) => {
  return (
    <>
      {below &&
        React.cloneElement(below, {
          ...below.props,
          className: cn(below.props.className, breakpointClasses[on].below),
        })}
      {above &&
        React.cloneElement(above, {
          ...above.props,
          className: cn(above.props.className, breakpointClasses[on].above),
        })}
    </>
  );
};

export interface BreakpointProps {
  /**
   * The screen size at which the children will be hidden or shown.
   * @default 'md'
   */
  on?: Breakpoints;
  /**
   * The element to be shown when the screen size is below the breakpoint.
   */
  below?: React.ReactElement<{ className?: string }>;
  /**
   * The element to be shown when the screen size is above the breakpoint.
   */
  above?: React.ReactElement<{ className?: string }>;
}

export default Breakpoint;
