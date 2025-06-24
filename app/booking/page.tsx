// app/booking/page.tsx
"use client"; // VERY IMPORTANT: This enables interactivity

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

// We will create these components in the next steps
// import Step1_PackageSelection from '../components/booking/Step1_PackageSelection';

import Step1_PackageSelection from './Step1_PackageSelection';
import Step2_GuestDetails from './Step2_GuestDetails';
import Step3_Review from './Step3_Review';

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm({
    mode: "onChange", // Validate fields as the user types
  });

  const handleNextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const onSubmit = (data: any) => {
    // This is where we will eventually send the data to the backend
    console.log("Form Data Submitted:", data);
    alert("Booking Inquiry Submitted! We will contact you shortly.");
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-800">Book Your Tour</h1>
            <p className="text-lg text-gray-600 mt-4">
              Complete the steps below to send us your booking inquiry.
            </p>
          </div>
          
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg space-y-8">
              {currentStep === 1 && <Step1_PackageSelection onNext={handleNextStep} />}
              {currentStep === 2 && <Step2_GuestDetails onNext={handleNextStep} onBack={handlePrevStep} />}
              {currentStep === 3 && <Step3_Review onBack={handlePrevStep} />}
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}