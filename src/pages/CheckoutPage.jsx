import React,{useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import UserDetailsForm from '../components/Cheackout/UserDetailsForm'
import ShippingForm from '../components/Cheackout/ShippingForm';
import PaymentForm from '../components/Cheackout/PaymentForm';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);
  const handleSubmitOrder = () => {
    console.log('Order submitted');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Checkout</h1>
        {step === 1 && <UserDetailsForm nextStep={nextStep} />}
        {step === 2 && <ShippingForm nextStep={nextStep} previousStep={previousStep} />}
        {step === 3 && <PaymentForm previousStep={previousStep} handleSubmitOrder={handleSubmitOrder} />}
      </div>
    </div>
  );
};

export default CheckoutPage;
