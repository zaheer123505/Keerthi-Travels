// app/admin/dashboard/page.tsx
import { Package, Ticket, Users } from 'lucide-react';

const stats = [
    { name: 'Total Tours', stat: '2', icon: Package },
    { name: 'Total Bookings', stat: '0', icon: Ticket },
    { name: 'Total Users', stat: '0', icon: Users },
]

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome back, Admin! Here's an overview of your site.</p>
      
      <div className="mt-8">
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {stats.map((item) => (
                <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                    <dt className="truncate text-sm font-medium text-gray-500 flex items-center">
                        <item.icon className="h-5 w-5 mr-2 text-gray-400" />
                        {item.name}
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                </div>
            ))}
        </dl>
      </div>
    </div>
  );
}