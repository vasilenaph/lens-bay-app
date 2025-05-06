'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">LensBay</span>
            <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              LensBay
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Navigation links - removed the map and added specific links */}
        <div className="hidden lg:flex lg:gap-x-12">
        <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/cameras"
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200"
          >
            Cameras
          </Link>
          <Link
            to="/cameras/create"
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200"
          >
            Add Camera
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200"
          >
            About
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <Link to="/sign-in"
            className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200"
          >
            Sign In
          </Link>
          <Link to="/sign-up"
            className="rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:from-blue-600 hover:to-cyan-500 transition-all duration-200"
          >
            Sign Up
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-gray-900/80" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">LensBay</span>
              <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                LensBay
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                {/* Mobile navigation links - removed the map and added specific links */}
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Home
                </Link>
                <Link
                  to="/cameras"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Cameras
                </Link>
                <Link
                  to="/cameras/create"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Add camera
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  About
                </Link>
              </div>
              <div className="py-6 space-y-4">
                <Link
                  to="/sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-center bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)} // Close menu on click
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}