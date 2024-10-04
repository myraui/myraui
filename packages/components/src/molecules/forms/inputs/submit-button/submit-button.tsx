import React from 'react';
import { Button, ButtonProps } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

export interface SubmitButtonProps extends ButtonProps {}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const context = useFormContext();

  return <Button {...props} isLoading={context.formState.isSubmitting} type="submit"></Button>;
};

SubmitButton.displayName = 'MyraUI.SubmitButton';

export default SubmitButton;
