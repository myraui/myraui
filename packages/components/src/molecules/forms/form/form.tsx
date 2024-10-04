import React, { HTMLProps, PropsWithChildren } from 'react';
import { FieldValues, FormProvider, SubmitHandler } from 'react-hook-form';
import { UseFormReturn } from './use-form';

export interface FormProps<TFieldValues extends FieldValues, TContext, TTransformedValues extends FieldValues | undefined>
  extends Omit<HTMLProps<HTMLFormElement>, 'onSubmit' | 'form'> {
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
  onSubmit?: TTransformedValues extends undefined
    ? SubmitHandler<TFieldValues>
    : TTransformedValues extends FieldValues
      ? SubmitHandler<TTransformedValues>
      : never;
}

function Form<TFieldValues extends FieldValues, TContext, TTransformedValues extends FieldValues | undefined>({
  form,
  ...props
}: PropsWithChildren<FormProps<TFieldValues, TContext, TTransformedValues>>) {
  return (
    <FormProvider {...form}>
      <form {...props} onSubmit={props.onSubmit ? form.handleSubmit(props.onSubmit) : undefined} action={props.onSubmit ? undefined : props.action}>
        {props.children}
      </form>
    </FormProvider>
  );
}

Form.displayName = 'MyraUI.Form';

export default Form;
