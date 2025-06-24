// app/components/MobileMenu.tsx
"use client";

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menuLinks = [
  { href: '/', label: 'Home' },
  { href: '/packages', label: 'Packages' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 md:hidden" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-start justify-end text-center">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all h-screen">
                <div className="flex justify-between items-center">
                   <h3 className="text-lg font-semibold text-blue-800">Menu</h3>
                   <button onClick={closeModal} className="p-1 rounded-full hover:bg-gray-100">
                      <XMarkIcon className="w-6 h-6 text-gray-700"/>
                   </button>
                </div>
                
                <nav className="mt-8">
                  <ul className="space-y-4">
                    {menuLinks.map(link => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="block py-2 text-lg text-gray-800 hover:text-orange-500"
                          onClick={closeModal}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                        <Link href="/booking" className="block mt-6 w-full text-center bg-orange-500 text-white font-bold py-3 px-4 rounded-md hover:bg-orange-600">
                            Book Now
                        </Link>
                    </li>
                  </ul>
                </nav>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}