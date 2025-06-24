// app/admin/tours/new/page.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { UploadCloud } from 'lucide-react';

export default function AddNewTourPage() {
  // State to hold the image preview URL
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("New tour submitted! (Backend connection for file upload needed)");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a URL for the selected file to use as a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Add a New Tour Package</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
        {/* ... other form fields remain the same ... */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Tour Title</label>
          <input type="text" id="title" className="w-full p-2 border rounded-md" required />
        </div>
        
        {/* ... other fields ... */}
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
          <input type="text" id="duration" className="w-full p-2 border rounded-md" required />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Original Price (₹)</label>
            <input type="number" id="price" className="w-full p-2 border rounded-md" required />
          </div>
          <div>
            <label htmlFor="offerPrice" className="block text-sm font-medium text-gray-700 mb-1">Offer Price (₹)</label>
            <input type="number" id="offerPrice" className="w-full p-2 border rounded-md" required />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea id="description" rows={4} className="w-full p-2 border rounded-md" required></textarea>
        </div>
        
        <div>
          <label htmlFor="inclusions" className="block text-sm font-medium text-gray-700 mb-1">Inclusions</label>
          <textarea id="inclusions" rows={6} className="w-full p-2 border rounded-md" required></textarea>
        </div>


        {/* --- NEW FILE UPLOAD INPUT SECTION --- */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Main Image</label>
          <div className="flex items-center gap-8">
            {/* Image Preview */}
            <div className="w-40 h-32 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed">
              {imagePreview ? (
                <Image src={imagePreview} alt="Image preview" width={160} height={128} className="rounded-md object-cover h-full" />
              ) : (
                <div className="text-center text-gray-400">
                  <UploadCloud size={40}/>
                  <p className="text-xs mt-1">Preview</p>
                </div>
              )}
            </div>
            {/* File Input */}
            <div className="flex-1">
                <p className="text-sm text-gray-600 mb-2">Click below to choose a file</p>
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
                    required 
                />
                 <p className="text-xs text-gray-500 mt-2">PNG, JPG, or WEBP. Max 2MB.</p>
            </div>
          </div>
        </div>
        
        <div className="text-right pt-4">
            <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 font-semibold">
                Save Tour
            </button>
        </div>
      </form>
    </div>
  );
}