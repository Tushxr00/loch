import React, { useState } from 'react'
import * as Yup from 'yup';
const useSignUp = () => {
    const [isEmailSent,setIsEmailSent] = useState(false);
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Please enter a valid email').matches(/@[^.]*\./,'Please enter a valid email').required('Email is required'),
      });
    const onSubmit = (values: any) => {
      if(values.email){
        setIsEmailSent(true)
        setTimeout(()=>{
          window.location.assign('https://app.loch.one/welcome')
        },500)
      }
    }

  return {
    SignupSchema,
    isEmailSent,
    onSubmit
  }
}

export default useSignUp