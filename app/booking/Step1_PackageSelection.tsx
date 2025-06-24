// app/components/booking/Step1_PackageSelection.tsx
import { useFormContext } from 'react-hook-form';
import { tourPackages } from '@/data/tours';

export default function Step1_PackageSelection({ onNext }: { onNext: () => void }) {
  const { register, trigger } = useFormContext();

  const handleNext = async () => {
    const isValid = await trigger(["packageName", "travelDate"]); // Validate fields in this step
    if (isValid) onNext();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Step 1: Select Your Package</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="packageName" className="block text-sm font-medium text-gray-700">Choose a Package</label>
          <select
            id="packageName"
            {...register("packageName", { required: "Package selection is required." })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-gray-900"
          >
            <option value="">-- Select a Tour --</option>
            {tourPackages.map(tour => (
              <option key={tour.id} value={tour.title}>{tour.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700">Preferred Travel Date</label>
          <input
            type="date"
            id="travelDate"
            {...register("travelDate", { required: "Travel date is required." })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 text-gray-900"
          />
        </div>
        <div className="pt-4">
          <button type="button" onClick={handleNext} className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600 transition-colors">
            Next Step: Your Details
          </button>
        </div>
      </div>
    </div>
  );
}