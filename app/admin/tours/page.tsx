// app/admin/tours/page.tsx
import { tourPackages } from "@/data/tours";
import Image from "next/image";
import { Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

export default function ManageToursPage() {
  const tours = tourPackages;

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold leading-6 text-gray-900">
            Manage Tours
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the tour packages on your website.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link
            href="/admin/tours/new"
            className="inline-flex w-full justify-center sm:w-auto items-center gap-x-2 rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline"
          >
            <Plus className="-ml-0.5 h-5 w-5" />
            Add New Tour
          </Link>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            {/* --- RESPONSIVE CONTENT STARTS HERE --- */}
            {/* Desktop Table */}
            <div className="hidden md:block shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Duration
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tours.map((tour) => (
                    <tr key={tour.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        <Image
                          src={tour.image}
                          alt={tour.title}
                          width={80}
                          height={50}
                          className="rounded-md object-cover"
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {tour.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {tour.duration}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        ₹{tour.offerPrice.toLocaleString()}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <div className="flex gap-4 justify-end">
                          <Link
                            href={`/admin/tours/${tour.id}/edit`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Edit size={18} />
                          </Link>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {tours.map((tour) => (
                <div key={tour.id} className="bg-white rounded-lg shadow p-4">
                  <div className="flex items-start gap-4">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      width={64}
                      height={64}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{tour.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {tour.duration}
                      </p>
                      <p className="text-sm text-gray-800 font-semibold mt-1">
                        ₹{tour.offerPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-4 mt-4 border-t pt-4">
                    <Link
                      href={`/admin/tours/${tour.id}/edit`}
                      className="bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2"
                    >
                      <Edit size={16} />
                      <span>Edit</span>
                    </Link>
                    <button className="bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                      <Trash2 size={16} />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
