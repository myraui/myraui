import React from 'react';
import { forwardRef, Input, InputProps } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

export interface FormInputProps extends InputProps {
  name: string;
}

const FormInput = forwardRef<'input', FormInputProps>((props, ref) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(register(props.name));

  return (
    <Input {...props} ref={ref} {...register(props.name)} errorMessage={errors[props.name]?.message as string} isInvalid={!!errors[props.name]} />
  );
});

FormInput.displayName = 'MyraUI.FormInput';

export default FormInput;
