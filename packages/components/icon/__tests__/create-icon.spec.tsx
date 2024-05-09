import { createIcon } from '../src';
import React from 'react';
import { render } from '@testing-library/react';

describe('create-icon', () => {
  it('should create an icon component with path', () => {
    const Component = createIcon({
      path: <path d="M0 0h24v24H0z" role="path" />,
      displayName: 'TestIcon',
    });

    const result = render(<Component />);

    expect(result.getByRole('path')).toBeInTheDocument();

    expect(Component.displayName).toBe('TestIcon');
  });

  it('should create an icon component with d', () => {
    const Component = createIcon({
      d: 'M0 0h24v24H0z',
      displayName: 'TestIcon',
    });

    const result = render(<Component />);

    expect(result.container.firstChild.innerHTML).toEqual('<path fill="currentColor" d="M0 0h24v24H0z"></path>');
  });

  it('should pass default props', () => {
    const Component = createIcon({
      d: 'M0 0h24v24H0z',
      displayName: 'TestIcon',
      defaultProps: { 'aria-label': 'Test Icon', role: 'first-role' },
    });

    const result = render(<Component role="second-role" />);

    expect(result.getByLabelText('Test Icon')).toBeInTheDocument();
    expect(result.getByRole('second-role')).toBeInTheDocument();
  });
});
