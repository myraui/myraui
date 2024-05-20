import { createIcon, createVariantIcon } from '../src';
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
      defaultProps: { role: 'path' },
    });

    const result = render(<Component />);

    expect(result.getByRole('path')).toBeInTheDocument();
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

  describe('createIconVariants', () => {
    it('should crete an icon with variants', () => {
      const VariantComponent = createVariantIcon(
        {
          solid: {
            displayName: 'TestIconSolid',
            d: 'm0 0v24h24v-24h-24z',
            defaultProps: {
              role: 'solid',
            },
          },
          outline: {
            d: 'M0 0h24v24H0z',
            displayName: 'TestIconOutline',
            defaultProps: {
              role: 'outline',
            },
          },
        },
        'outline'
      );

      const result = render(<VariantComponent />);
      expect(result.getByRole('outline')).toBeInTheDocument();

      const solidResult = render(<VariantComponent variant="solid" />);
      expect(solidResult.getByRole('solid')).toBeInTheDocument();
    });
  });
});
