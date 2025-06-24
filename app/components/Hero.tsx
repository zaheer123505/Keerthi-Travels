// app/components/Hero.tsx
"use client";

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroSlides = [
  {
    id: 1,
    image: "/gallery/kashi-boat.jpg",
    title: "Spiritual Journeys to Sacred Lands",
    subtitle: "Discover the divine essence of Kashi, Ayodhya, Prayagraj, and more.",
  },
  {
    id: 2,
    image: "/gallery/kashi-aarti.jpg",
    title: "Witness Ancient Ganga Aarti",
    subtitle: "Experience the mesmerizing evening rituals on the banks of the holy Ganges.",
  },
  {
    id: 3,
    image: "/gallery/ayodhya-temple.jpg",
    title: "Explore the Land of Lord Rama",
    subtitle: "Visit the grand temples and sacred sites of historical Ayodhya.",
  },
];

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
        loop={true}
      >
        {heroSlides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                priority={slide.id === 1}
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Central Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4">
           <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
            Spiritual Journeys to Sacred Lands
           </h1>
           <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl">
            Discover the divine essence of Kashi, Ayodhya, Prayagraj, and more.
           </p>
           <Link
             href="/packages"
             className="bg-orange-500 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
           >
             View Our Packages
           </Link>
        </div>
      </Swiper>
    </section>
  );
}