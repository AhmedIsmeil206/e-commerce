import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserDetailsForm = ({ nextStep }) => {
  const formik = useFormik({
    initialValues: { name: '', email: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...formik.getFieldProps('name')} />
        {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default UserDetailsForm;
