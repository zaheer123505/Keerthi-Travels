"use client";

import { useState, Fragment } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Package, Ticket, LogOut, Menu, UserCircle } from 'lucide-react'; // Added UserCircle
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Dialog, Transition } from '@headlessui/react';

const sidebarNavLinks = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/tours', label: 'Manage Tours', icon: Package },
    { href: '/admin/bookings', label: 'View Bookings', icon: Ticket },
];

export default function AdminLayout({ children }: { children: React.ReactNode; }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const SidebarContent = () => (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-900 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <h2 className="text-2xl font-bold text-white">Admin Panel</h2>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {sidebarNavLinks.map(link => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className={clsx(
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                          pathname.startsWith(link.href)
                            ? 'bg-blue-800 text-white'
                            : 'text-blue-200 hover:text-white hover:bg-blue-800'
                      )}
                    >
                      <link.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <Link
              href="/"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-red-300 hover:bg-red-500 hover:text-white"
            >
              <LogOut className="h-6 w-6 shrink-0" aria-hidden="true" />
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
        {/* Mobile Sidebar */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-gray-900/80" />
                </Transition.Child>
                <div className="fixed inset-0 flex">
                    <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
                        <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1"><SidebarContent /></Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
        
        {/* Desktop Sidebar */}
        <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
            <SidebarContent />
        </aside>

        <div className="lg:pl-64">
            {/* Universal Admin Top Bar */}
            <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6">
                
                {/* Hamburger menu button for mobile */}
                <button type="button" className="p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                    <Menu className="h-6 w-6" />
                </button>
                
                {/* This div is just for spacing on mobile */}
                <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

                <div className="flex flex-1 items-center justify-between">
                  <div className="flex-1 text-xl font-semibold text-blue-900">
                      Keerthi Travels Admin
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-x-4">
                      <div className="h-6 w-px bg-gray-200 hidden lg:block" />
                      <div className="flex items-center gap-x-3">
                          <UserCircle className="h-8 w-8 text-gray-400" />
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-gray-900">Admin User</span>
                          </div>
                      </div>
                  </div>
                </div>
            </header>

            <main className="py-10">
                <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
        </div>
    </div>
  );
}