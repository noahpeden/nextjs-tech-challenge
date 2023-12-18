import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RequestInfoForm = ({ onSubmit, dozer }) => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit({ ...values, dozer });
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col space-y-4'>
          <div className='flex flex-col'>
            <Field
              type='text'
              name='fullName'
              placeholder='Full Name'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <ErrorMessage
              name='fullName'
              component='div'
              className='text-red-500'
            />
          </div>

          <div className='flex flex-col'>
            <Field
              type='email'
              name='email'
              placeholder='Email Address'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <ErrorMessage
              name='email'
              component='div'
              className='text-red-500'
            />
          </div>

          <div className='flex flex-col'>
            <Field
              type='tel'
              name='phoneNumber'
              placeholder='Phone Number'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <ErrorMessage
              name='phoneNumber'
              component='div'
              className='text-red-500'
            />
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='px-4 py-2 bg-secondary text-white rounded disabled:bg-gray-400 hover:bg-secondary-darker focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Request Info
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RequestInfoForm;
