"use client";

import Hero from "./components/Hero";
import PackageCard from "./components/PackageCard";
import Section from "./components/Section";
import FadeIn from "./components/FadeIn";
import TestimonialCard from "./components/TestimonialCard";
import { tourPackages } from "@/data/tours";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperCore } from 'swiper';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { quote: "An absolutely life-changing journey. Keerthi Travels handled everything perfectly. The Ganga Aarti was a highlight I'll never forget.", name: "Anjali Mehta", title: "Pilgrim from Mumbai", image: "/gallery/avatar-1.jpg" },
  { quote: "I was hesitant about traveling alone, but the group was wonderful and the guides made me feel safe and cared for. Highly recommended.", name: "Ravi Kumar", title: "Solo Traveler", image: "/gallery/avatar-2.jpg" },
  { quote: "Our family had the most memorable time. The 10-day tour was perfectly paced for both the elders and the kids. Thank you, Keerthi Travels!", name: "The Sharma Family", title: "Family Pilgrimage", image: "/gallery/avatar-3.jpg" },
];

export default function HomePage() {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <main>
      <Hero />

      {/* --- REDESIGNED FEATURED PACKAGES SLIDER --- */}
      <FadeIn>
        <Section
          heading="Our Most Popular Journeys"
          subHeading="Embark on a spiritual adventure with our expertly curated packages that blend devotion, comfort, and discovery."
          className="bg-gray-50"
        >
          <div className="relative">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="!pb-16"
            >
              {tourPackages.map((tour) => (
                <SwiperSlide key={tour.id}>
                  <PackageCard tour={tour} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-10 px-[-20px] sm:px-[-24px]">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-blue-900 hover:bg-gray-100 transition-colors -ml-5 sm:-ml-6"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-blue-900 hover:bg-gray-100 transition-colors -mr-5 sm:-mr-6"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </Section>
      </FadeIn>
      
      <FadeIn>
        <Section heading="Why Travel With Us?" className="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Expert Guides</h3>
                <p className="text-gray-600">Our local guides are knowledgeable, passionate, and dedicated to making your journey memorable.</p>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Curated Itineraries</h3>
                <p className="text-gray-600">We design our tours to be spiritually enriching, comfortable, and comprehensive.</p>
            </div>
            <div className="p_6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Peace of Mind</h3>
                <p className="text-gray-600">From booking to your return, we handle all the details so you can focus on your journey.</p>
            </div>
          </div>
        </Section>
      </FadeIn>
      
      <FadeIn>
        <Section heading="What Our Guests Say" subHeading="Hear from fellow pilgrims who have journeyed with us." className="bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <TestimonialCard key={i} testimonial={t} />
                ))}
            </div>
        </Section>
      </FadeIn>
    </main>
  );
}