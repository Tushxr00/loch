import React, { useState } from 'react'
import * as Yup from 'yup';
const useSignUp = () => {
  const [manualError,setManualError] =useState(false)
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Please enter a valid email').required('Email is required'),
      });
    const onSubmit = (values: any) => {
      if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        setManualError(true)
      }else{
        setManualError(false)
      }
    }
    const onTextChange = ()=>{
      setManualError(false)
    }
  return {
    SignupSchema,
    onTextChange,
    onSubmit
  }
}

export default useSignUp