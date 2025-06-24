// app/components/booking/Step3_Review.tsx
import { useFormContext } from 'react-hook-form';

export default function Step3_Review({ onBack }: { onBack: () => void }) {
  const { getValues } = useFormContext();
  const values = getValues();

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Step 3: Review Your Inquiry</h2>
      <div className="space-y-4 bg-gray-50 p-6 rounded-md">
        <div><strong>Package:</strong> {values.packageName}</div>
        <div><strong>Travel Date:</strong> {values.travelDate}</div>
        <hr/>
        <div><strong>Full Name:</strong> {values.fullName}</div>
        <div><strong>Email:</strong> {values.email}</div>
        <div><strong>Phone:</strong> {values.phone}</div>
      </div>
      <div className="pt-6 flex justify-between">
        <button type="button" onClick={onBack} className="bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-gray-400">Back</button>
        <button type="submit" className="bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700">Submit Inquiry</button>
      </div>
    </div>
  );
}