import React from 'react';
import { cn } from '@nextui-org/react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const Breakpoint: React.FC<BreakpointProps> = ({ on = 'md', below, above }) => {
  return (
    <>
      {below &&
        React.cloneElement(below, {
          ...below.props,
          className: cn(below.props.className, `${on}:hidden`),
        })}
      {above &&
        React.cloneElement(above, {
          ...above.props,
          className: cn(above.props.className, `hidden ${on}:block`),
        })}
    </>
  );
};

export interface BreakpointProps {
  on?: Breakpoint;
  below?: React.ReactElement<{ className?: string }>;
  above?: React.ReactElement<{ className?: string }>;
}
