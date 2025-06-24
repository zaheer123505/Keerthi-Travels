// app/components/FilterSidebar.tsx
"use client";

import { Filter, X } from 'lucide-react';
import Slider from 'rc-slider';

export interface FilterState {
  priceRange: [number, number];
  durations: string[];
  types: string[];
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClose?: () => void; // Optional close function for mobile
}

const durationOptions = ['Short (1-5 Days)', 'Medium (6-10 Days)', 'Long (10+ Days)'];
const typeOptions = ['Pilgrimage', 'Himalayan', 'Spiritual Retreat', 'Weekend Getaway'];

export default function FilterSidebar({ filters, onFilterChange, onClose }: FilterSidebarProps) {
  
  const handlePriceChange = (value: number | number[]) => {
    onFilterChange({ ...filters, priceRange: value as [number, number] });
  };

  const handleCheckboxChange = (category: 'durations' | 'types', value: string) => {
    const currentValues = filters[category];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
    onFilterChange({ ...filters, [category]: newValues });
  };

  return (
    <aside className="w-full">
        <div className="bg-white p-6 rounded-xl shadow-md border h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <Filter size={20} className="text-blue-800" />
                    <h3 className="text-xl font-bold text-gray-900">Filters</h3>
                </div>
                {onClose && (
                    <button onClick={onClose} className="lg:hidden p-1 text-gray-500 hover:text-gray-800">
                        <X size={24} />
                    </button>
                )}
            </div>

            {/* Price Range Filter */}
            <div className="space-y-4 border-b pb-6">
                <label className="block text-sm font-semibold text-gray-700">Price Range</label>
                <Slider
                    range
                    min={0}
                    max={50000}
                    step={1000}
                    value={filters.priceRange}
                    onChange={handlePriceChange}
                    trackStyle={{ backgroundColor: '#1e40af' }}
                    handleStyle={{ borderColor: '#1e40af', backgroundColor: '#1e40af' }}
                />
                <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{filters.priceRange[0].toLocaleString()}</span>
                    <span>₹{filters.priceRange[1].toLocaleString()}</span>
                </div>
            </div>

            {/* Duration & Type Filters... */}
            <div className="mt-6 space-y-3 border-b pb-6">
                <h4 className="text-sm font-semibold text-gray-700">Tour Duration</h4>
                {durationOptions.map(duration => (
                    <div key={duration} className="flex items-center">
                        <input id={duration} checked={filters.durations.includes(duration)} onChange={() => handleCheckboxChange('durations', duration)} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                        <label htmlFor={duration} className="ml-3 text-sm text-gray-600">{duration}</label>
                    </div>
                ))}
            </div>
             <div className="mt-6 space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Tour Type</h4>
                {typeOptions.map(type => (
                    <div key={type} className="flex items-center">
                        <input id={type} checked={filters.types.includes(type)} onChange={() => handleCheckboxChange('types', type)} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                        <label htmlFor={type} className="ml-3 text-sm text-gray-600">{type}</label>
                    </div>
                ))}
            </div>

            <div className="mt-auto pt-6 border-t">
                <button onClick={onClose} className="w-full bg-blue-800 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Show Results
                </button>
            </div>
        </div>
    </aside>
  );
}