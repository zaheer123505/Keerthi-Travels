// app/components/TestimonialCard.tsx
import { Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg relative h-full flex flex-col">
       <svg className="absolute top-6 left-6 w-10 h-10 text-orange-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
         <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4z" />
         <path d="M25.352 4C20.456 7.456 17 13.12 17 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L25.352 4z" />
       </svg>
       <p className="relative text-gray-700 italic text-lg mt-4 flex-grow">"{testimonial.quote}"</p>
       <footer className="mt-6">
         <div className="flex items-center">
            <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="rounded-full" />
            <div className="ml-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-600 text-sm">{testimonial.title}</p>
            </div>
         </div>
       </footer>
    </div>
  );
}