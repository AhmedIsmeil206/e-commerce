import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PaymentForm = ({ previousStep, handleSubmitOrder }) => {
  const formik = useFormik({
    initialValues: { cardNumber: '', cvv: '' },
    validationSchema: Yup.object({
      cardNumber: Yup.string().required('Required'),
      cvv: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      handleSubmitOrder();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="cardNumber">Card Number</label>
        <input id="cardNumber" type="text" {...formik.getFieldProps('cardNumber')} />
        {formik.touched.cardNumber && formik.errors.cardNumber ? <div>{formik.errors.cardNumber}</div> : null}
      </div>
      <div>
        <label htmlFor="cvv">CVV</label>
        <input id="cvv" type="text" {...formik.getFieldProps('cvv')} />
        {formik.touched.cvv && formik.errors.cvv ? <div>{formik.errors.cvv}</div> : null}
      </div>
      <button type="button" onClick={previousStep}>Back</button>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default PaymentForm;

