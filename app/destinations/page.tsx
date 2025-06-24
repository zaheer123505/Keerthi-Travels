// app/destinations/page.tsx
import { destinations } from "@/data/destinations";
import DestinationCard from "../components/DestinationCard";

export default function DestinationsPage() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800">
            Explore The Sacred Destinations
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Each destination in our tours is steeped in history, spirituality, and culture. Learn more about the holy places you will visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </div>
  );
}