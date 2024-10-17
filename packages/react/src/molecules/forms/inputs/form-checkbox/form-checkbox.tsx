import React from 'react';
import { Checkbox, CheckboxProps } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

export interface FormCheckboxProps extends CheckboxProps {
  name: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return <Checkbox {...props} {...register(props.name)} isInvalid={Boolean(errors[props.name])} />;
};

FormCheckbox.displayName = 'MyraUI.FormCheckbox';

export default FormCheckbox;
