// app/register/page.tsx
"use client";

import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function RegisterPage() {
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); alert("Registration to be connected!"); };
  const handleGoogleSignIn = () => { alert("Google Sign-In to be connected!"); };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <Link href="/" className="text-3xl font-bold text-blue-800">Keerthi Travels</Link>
        </div>
        <div className="p-8 space-y-6 bg-white shadow-xl rounded-2xl">
          <h2 className="mt-2 text-2xl font-semibold text-center text-gray-900">Create a new account</h2>
          
          <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <FcGoogle size={22} /><span className="text-sm font-medium text-gray-700">Sign up with Google</span>
          </button>
          
          <div className="flex items-center"><div className="flex-grow border-t border-gray-300"></div><span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span><div className="flex-grow border-t border-gray-300"></div></div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input id="name" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"/>
            </div>
            <div>
              <label htmlFor="email-or-phone" className="block text-sm font-medium text-gray-700">Email or Phone</label>
              <input id="email-or-phone" type="text" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"/>
            </div>
            <div>
              <label htmlFor="password"className="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" type="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"/>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600">Create Account</button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}<Link href="/login" className="font-medium text-blue-800 hover:text-orange-500">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}