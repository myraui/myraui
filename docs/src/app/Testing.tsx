'use client';
import React from 'react';
import { Form, FormInput, SubmitButton, useForm } from '@myraui/react';

export const Testing: React.FC<TestingProps> = (props) => {
  const form = useForm();

  return (
    <Form form={form} onSubmit={(values) => console.log(values)}>
      <FormInput name={'firstName'} label={'First name: '} />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

interface TestingProps {}
