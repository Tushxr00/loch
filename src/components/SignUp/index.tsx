"use client";
import React from "react";
import useSignUp from "./view/useSignUp";
import { Formik, Form, Field } from "formik";
const SignUp = () => {
  const { SignupSchema, onSubmit,isEmailSent } = useSignUp();
  console.log({ SignupSchema, onSubmit });
  return (
    <div className="flex justify-center items-center h-full w-full px-3 sm:px-0">
      <div className="max-w-fit ">
        <h1 className="text-[#B0B1B3] text-3xl  sm:text-4xl mb-8">
          Sign up for
          <br />
          exclusive access.
        </h1>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={SignupSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col">
              <Field
                name="email"
                type="email"
                placeholder="Your email address"
                // onChange={onTextChange}
                className="border border-[#E5E5E6] rounded-lg py-5 px-4 placeholder:text-base placeholder:font-medium sign-up-input"
              />
              {(errors.email && touched.email) ? <div className="mt-2 ml-2 text-sm text-red-500 font-medium">{errors.email}</div> : null}
              <button
                type="submit"
                className="font-semibold w-full sm:w-[350px] h-[59px] bg-black text-white rounded-lg px-7 py-4 mx-auto mt-6"
              >
                Get started
              </button>
            </Form>
          )}
        </Formik>
          <p className="text-center py-4 mt-6 relative ">You’ll receive an email with an invite link to join.</p>
          {(isEmailSent) && <p className="text-center bg-green-100 font-medium text-base rounded mt-2 text-green-900">
          Email sent
        </p>}
      </div>
    </div>
  );
};

export default SignUp;
