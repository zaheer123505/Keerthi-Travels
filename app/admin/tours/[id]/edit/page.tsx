// app/admin/tours/[id]/edit/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { tourPackages } from "@/data/tours";
import { useParams } from 'next/navigation';
import Image from "next/image";
import { UploadCloud } from 'lucide-react';

export default function EditTourPage() {
  const params = useParams();
  const { id } = params;
  const tourToEdit = tourPackages.find(p => p.id.toString() === id);

  // State to hold the image preview URL
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Set the initial image preview when the component loads
  useEffect(() => {
    if (tourToEdit) {
      setImagePreview(tourToEdit.image);
    }
  }, [tourToEdit]);

  if (!tourToEdit) {
    return <p>Tour not found.</p>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tour "${tourToEdit.title}" updated! (Backend connection needed)`);
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Edit Tour: {tourToEdit.title}</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
        {/* ... other form fields are the same, just pre-filled with defaultValue ... */}
         <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Tour Title</label>
          <input type="text" id="title" className="w-full p-2 border rounded-md" defaultValue={tourToEdit.title} required />
        </div>
        
        {/* ... other fields ... */}
         <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
          <input type="text" id="duration" className="w-full p-2 border rounded-md" defaultValue={tourToEdit.duration} required />
        </div>

        <div className="grid grid-cols-2 gap-6">
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Original Price (₹)</label>
                <input type="number" id="price" className="w-full p-2 border rounded-md" defaultValue={tourToEdit.price} required />
            </div>
            <div>
                <label htmlFor="offerPrice" className="block text-sm font-medium text-gray-700 mb-1">Offer Price (₹)</label>
                <input type="number" id="offerPrice" className="w-full p-2 border rounded-md" defaultValue={tourToEdit.offerPrice} required />
            </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea id="description" rows={4} className="w-full p-2 border rounded-md" defaultValue={tourToEdit.description} required></textarea>
        </div>
        
        <div>
          <label htmlFor="inclusions" className="block text-sm font-medium text-gray-700 mb-1">Inclusions</label>
          <textarea id="inclusions" rows={6} className="w-full p-2 border rounded-md" defaultValue={tourToEdit.inclusions.join('\n')} required></textarea>
        </div>
        
        {/* --- NEW FILE UPLOAD INPUT SECTION FOR EDITING --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Main Image</label>
          <div className="flex items-center gap-8">
            {/* Image Preview */}
            <div className="w-40 h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed">
              {imagePreview ? (
                <Image src={imagePreview} alt="Image preview" width={160} height={128} className="rounded-md object-cover h-full" />
              ) : (
                <div className="text-center text-gray-400"><UploadCloud size={40}/></div>
              )}
            </div>
            {/* File Input */}
            <div className="flex-1">
                <p className="text-sm text-gray-600 mb-2">To change image, choose a new file:</p>
                <input 
                    type="file" 
                    id="mainImage"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
                 <p className="text-xs text-gray-500 mt-2">Leave blank to keep the current image.</p>
            </div>
          </div>
        </div>

        <div className="text-right pt-4">
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 font-semibold">
                Update Tour
            </button>
        </div>
      </form>
    </div>
  );
}