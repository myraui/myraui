import React from 'react';
import { Textarea, TextAreaProps } from '@nextui-org/react';
import { useFormContext } from 'react-hook-form';

export interface FormTextAreaProps extends TextAreaProps {
  name: string;
}

const FormTextArea: React.FC<FormTextAreaProps> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return <Textarea {...props} {...register(props.name)} errorMessage={errors[props.name]?.message as string} isInvalid={!!errors[props.name]} />;
};

FormTextArea.displayName = 'MyraUI.FormTextArea';

export default FormTextArea;
