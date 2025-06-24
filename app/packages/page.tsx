// app/packages/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Section from '../components/Section';
import PackageCard from '../components/PackageCard';
import FilterSidebar, { FilterState } from '../components/FilterSidebar';
import { tourPackages } from '@/data/tours';
import { Filter, X } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import 'rc-slider/assets/index.css';

// Helper to parse duration string like "5 Days / 4 Nights" into a number of days
const getDays = (duration: string) => parseInt(duration.split(' ')[0], 10);

export default function PackagesPage() {
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 50000],
    durations: [],
    types: [],
  });

  const [filteredTours, setFilteredTours] = useState(tourPackages);

  useEffect(() => {
    const applyFilters = () => {
      let updatedTours = tourPackages.filter(tour => {
        // Price Filter
        if (tour.offerPrice < filters.priceRange[0] || tour.offerPrice > filters.priceRange[1]) {
          return false;
        }
        // Duration Filter
        if (filters.durations.length > 0) {
          const days = getDays(tour.duration);
          const isInDuration = filters.durations.some(d => {
            if (d.startsWith('Short') && days <= 5) return true;
            if (d.startsWith('Medium') && days > 5 && days <= 10) return true;
            if (d.startsWith('Long') && days > 10) return true;
            return false;
          });
          if (!isInDuration) return false;
        }
        // Type Filter
        if (filters.types.length > 0 && !filters.types.includes(tour.type)) {
            return false;
        }
        return true;
      });
      setFilteredTours(updatedTours);
    };
    applyFilters();
  }, [filters]);

  return (
    <div className="bg-gray-50">
      <Section
        heading="Our Sacred Tour Packages"
        subHeading="We offer meticulously planned pilgrimage tours to suit your spiritual needs and schedule. Each journey is designed for comfort, safety, and a deeply enriching experience."
      >
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-full lg:w-80 lg:flex-shrink-0">
             <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Main Content: Results Grid */}
          <div className="w-full">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
                <button onClick={() => setMobileFilterOpen(true)} className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow border">
                    <Filter size={18} />
                    <span className="font-semibold">Show Filters</span>
                </button>
            </div>
            
            {filteredTours.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredTours.map((tour) => (
                        <PackageCard key={tour.id} tour={tour} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-lg shadow">
                    <h3 className="text-xl font-semibold text-gray-800">No Tours Found</h3>
                    <p className="text-gray-500 mt-2">Try adjusting your filters to find more packages.</p>
                </div>
            )}
          </div>
        </div>
      </Section>

      {/* Mobile Filter Drawer */}
      <Transition.Root show={isMobileFilterOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setMobileFilterOpen}>
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                  <div className="fixed inset-0 bg-black/30" />
              </Transition.Child>
              <div className="fixed inset-0 flex justify-end">
                  <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="translate-x-full">
                      <Dialog.Panel className="relative w-full max-w-sm">
                          <FilterSidebar filters={filters} onFilterChange={setFilters} onClose={() => setMobileFilterOpen(false)} />
                      </Dialog.Panel>
                  </Transition.Child>
              </div>
          </Dialog>
      </Transition.Root>
    </div>
  );
}