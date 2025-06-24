// app/components/DestinationCard.tsx
import Image from 'next/image';

type Destination = {
  id: number;
  name: string;
  image: string;
  description: string;
};

export default function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-80 w-full">
        <Image
          src={destination.image}
          alt={destination.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{destination.name}</h3>
        <p className="mt-2 text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40">
          {destination.description}
        </p>
      </div>
    </div>
  );
}