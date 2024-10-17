import React from 'react';
import { cn } from '@nextui-org/react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints = {
  sm: { below: 'sm:hidden', above: 'hidden sm:block' },
  md: { below: 'md:hidden', above: 'hidden md:block' },
  lg: { below: 'lg:hidden', above: 'hidden lg:block' },
  xl: { below: 'xl:hidden', above: 'hidden xl:block' },
  '2xl': { below: '2xl:hidden', above: 'hidden 2xl:block' },
};

const Breakpoint: React.FC<BreakpointProps> = ({ on = 'md', below, above }) => {
  return (
    <>
      {below &&
        React.cloneElement(below, {
          ...below.props,
          className: cn(below.props.className, breakpoints[on].below),
        })}
      {above &&
        React.cloneElement(above, {
          ...above.props,
          className: cn(above.props.className, breakpoints[on].above),
        })}
    </>
  );
};

export interface BreakpointProps {
  /**
   * The screen size at which the children will be hidden or shown.
   */
  on?: Breakpoint;
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
