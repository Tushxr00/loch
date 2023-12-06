import React from 'react'
import * as Yup from 'yup';
const useSignUp = () => {
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Please enter a valid email').required('Email is required'),
      });
    const onSubmit = (values: any) => {
        console.log({values})
    }
  return {
    SignupSchema,
    onSubmit
  }
}

export default useSignUp