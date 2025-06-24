// app/components/PackageCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Star, Hotel, Utensils, Car, Phone } from 'lucide-react';
import clsx from 'clsx';

type Tour = {
  id: number;
  title: string;
  duration: string;
  price: number;
  offerPrice: number;
  image: string;
  rating: number;
  reviewsCount: number;
  itinerarySummary: string;
  inclusionsPreview: string[];
  specialOfferTag: string;
};

const inclusionIcons: { [key: string]: React.ElementType } = {
  Hotel: Hotel,
  Food: Utensils,
  Transport: Car,
};

export default function PackageCard({ tour }: { tour: Tour }) {
  const savings = tour.price - tour.offerPrice;

  return (
    // The parent is now a div, not a Link component.
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group">
      {/* This Link wraps only the visual, non-interactive parts */}
      <Link href={`/packages/${tour.id}`} className="cursor-pointer">
        <div className="relative h-52 w-full overflow-hidden">
          <Image 
            src={tour.image} 
            alt={tour.title} 
            layout="fill" 
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start">
            <p className="text-sm text-gray-500">{tour.duration}</p>
            <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
              <Star size={14} className="fill-current" />
              <span>{tour.rating} ({tour.reviewsCount})</span>
            </div>
          </div>
          
          <div className="h-16 mt-1">
              <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {tour.title}
              </h3>
          </div>
          
          {tour.itinerarySummary && (
            <div className="bg-orange-50 text-orange-800 text-xs font-semibold px-3 py-1.5 rounded-md my-2">
              {tour.itinerarySummary}
            </div>
          )}

          <div className="flex items-center gap-4 text-sm text-gray-600">
            {tour.inclusionsPreview && tour.inclusionsPreview.map(item => {
              const Icon = inclusionIcons[item];
              return Icon ? <span key={item} className="flex items-center gap-1.5"><Icon size={16} />{item}</span> : null;
            })}
          </div>
          
          {tour.specialOfferTag && (
            <div className="my-3">
                <span className="bg-pink-100 text-pink-800 text-xs font-bold px-3 py-1 rounded-full">{tour.specialOfferTag}</span>
            </div>
          )}
        </div>
      </Link>

      {/* The interactive section (pricing & buttons) is now OUTSIDE the main Link */}
      <div className="mt-auto p-4 pt-4 border-t">
        <div>
            <p className="text-2xl font-bold text-gray-900">₹{tour.offerPrice.toLocaleString()}</p>
            <p className="text-sm text-gray-500">
              <span className="line-through">₹{tour.price.toLocaleString()}</span>
              {savings > 0 && (
                  <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-md">
                      save ₹{savings.toLocaleString()}
                  </span>
              )}
            </p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
            {/* The "Call" button is a standalone <a> tag */}
            <a 
              href={`tel:7207300994`}
              className="flex items-center justify-center p-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors"
            >
                <Phone size={18} />
            </a>
            {/* The "Request Callback" button is a separate Link component */}
            <Link 
              href={`/packages/${tour.id}`} 
              className="flex-grow flex items-center justify-center p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
                Request Callback
            </Link>
        </div>
      </div>
    </div>
  );
}