import Button from '../button';
import { render } from '@testing-library/react';
import ButtonGroup from '../button-group';
import React from 'react';

describe('ButtonGroup', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <ButtonGroup>
        <Button>action</Button>
      </ButtonGroup>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<ButtonGroup ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('should ignore events when group disabled', () => {
    const handler = jest.fn();
    const wrapper = render(
      <ButtonGroup isDisabled={true}>
        <Button onClick={handler} data-testid="test-button">
          action
        </Button>
      </ButtonGroup>
    );

    const button = wrapper.getByTestId('test-button');
    button.click();
    expect(handler).not.toHaveBeenCalled();
  });
});
