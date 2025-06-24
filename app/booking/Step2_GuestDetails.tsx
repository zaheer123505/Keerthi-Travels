// app/components/booking/Step2_GuestDetails.tsx
import { useFormContext } from 'react-hook-form';

export default function Step2_GuestDetails({ onNext, onBack }: { onNext: () => void, onBack: () => void }) {
  const { register, formState: { errors }, trigger } = useFormContext();
  
  const handleNext = async () => {
    const isValid = await trigger(["fullName", "email", "phone"]);
    if (isValid) onNext();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Step 2: Guest Details</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" {...register("fullName", { required: "Full name is required." })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message as string}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" {...register("email", { required: "Email is required." })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" {...register("phone", { required: "Phone number is required." })} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>}
        </div>
      </div>
      <div className="pt-6 flex justify-between">
        <button type="button" onClick={onBack} className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-gray-400">Back</button>
        <button type="button" onClick={handleNext} className="bg-orange-500 text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600">Next Step: Review</button>
      </div>
    </div>
  );
}