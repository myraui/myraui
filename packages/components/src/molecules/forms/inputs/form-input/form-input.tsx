import React from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

export interface FormInputProps extends InputProps {
  name: string;
}

const FormInput = (props: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return <Input {...props} {...register(props.name)} errorMessage={errors[props.name]?.message as string} isInvalid={!!errors[props.name]} />;
};

FormInput.displayName = 'MyraUI.FormInput';

export default FormInput;
