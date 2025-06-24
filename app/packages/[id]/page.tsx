// app/packages/[id]/page.tsx
import { tourPackages } from "@/data/tours";
import Image from 'next/image';
import ImageGallery from '@/app/components/ImageGallery';
import FaqAccordion from '@/app/components/FaqAccordion';
import { Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';
import Link from "next/link";

type PageProps = {
  params: { id: string };
};

export default function TourDetailPage({ params }: PageProps) {
  const tour = tourPackages.find(p => p.id.toString() === params.id);

  if (!tour) { return <div className="container mx-auto text-center py-20"><h1 className="text-2xl font-bold">Tour Not Found</h1></div>; }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Visuals */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image src={tour.image} alt={tour.title} layout="fill" objectFit="cover" priority />
            </div>
            <ImageGallery images={tour.gallery} />
          </div>

          {/* Right Column: Information & Booking */}
          <div className="lg:col-span-1 space-y-8">
            {/* Title and Duration */}
            <div>
              <h1 className="text-4xl font-bold text-blue-900 leading-tight">{tour.title}</h1>
              <div className="flex items-center gap-2 mt-3 text-gray-600"><Clock size={18} /><span>{tour.duration}</span></div>
            </div>

            {/* --- START OF MISSING CODE TO BE ADDED --- */}
            {/* Booking Card */}
            <div className="border rounded-xl shadow-lg p-6 bg-white">
              <p className="text-lg text-gray-600">Starting from</p>
              <div className="flex items-baseline gap-3 my-2">
                <p className="text-4xl font-bold text-gray-900">₹{tour.offerPrice.toLocaleString()}</p>
                <p className="text-xl line-through text-gray-500">₹{tour.price.toLocaleString()}</p>
              </div>
              <Link href="/booking" className="mt-4 w-full bg-orange-500 text-white font-bold py-3 rounded-md text-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                <span>Book This Tour</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            {/* --- END OF MISSING CODE --- */}

            {/* About Section */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">About This Journey</h2>
              <p className="text-gray-700 leading-relaxed">{tour.description}</p>
            </div>

            {/* Inclusions Section */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">What's Included</h2>
              <ul className="space-y-3">
                {tour.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Full-width Reviews and FAQ Section */}
        <div className="mt-16 border-t pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reviews */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Guest Reviews</h2>
              <div className="space-y-6">
                {tour.reviews.map(review => (
                  <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={20} className={i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'} />
                        ))}
                      </div>
                      <p className="ml-4 font-bold text-gray-800">{review.author}</p>
                    </div>
                    <p className="text-gray-600">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Frequently Asked Questions</h2>
              <FaqAccordion faqs={tour.faqs} />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}