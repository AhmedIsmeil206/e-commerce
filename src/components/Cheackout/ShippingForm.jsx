import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ShippingForm = ({ nextStep, previousStep }) => {
  const formik = useFormik({
    initialValues: { address: '', city: '', postalCode: '' },
    validationSchema: Yup.object({
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      postalCode: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      nextStep();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" {...formik.getFieldProps('address')} />
        {formik.touched.address && formik.errors.address ? <div>{formik.errors.address}</div> : null}
      </div>
      <div>
        <label htmlFor="city">City</label>
        <input id="city" type="text" {...formik.getFieldProps('city')} />
        {formik.touched.city && formik.errors.city ? <div>{formik.errors.city}</div> : null}
      </div>
      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input id="postalCode" type="text" {...formik.getFieldProps('postalCode')} />
        {formik.touched.postalCode && formik.errors.postalCode ? <div>{formik.errors.postalCode}</div> : null}
      </div>
      <button type="button" onClick={previousStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default ShippingForm;
