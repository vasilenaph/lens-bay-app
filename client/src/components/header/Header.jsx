import { useState, useContext } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, signOut } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
    navigate('/')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-gray-900/80 to-gray-800/40 backdrop-blur-md shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center">
            <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              LensBay
            </span>
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold text-gray-300 hover:text-white">Home</Link>
          <Link to="/cameras" className="text-sm font-semibold text-gray-300 hover:text-white">Cameras</Link>
          {user && (
            <Link to="/cameras/create" className="text-sm font-semibold text-gray-300 hover:text-white">Add Camera</Link>
          )}
          <Link to="/about" className="text-sm font-semibold text-gray-300 hover:text-white">About</Link>
        </div>

        {/* Auth buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-4">
          {user ? (
            <button onClick={handleSignOut} className="text-sm font-semibold text-gray-300 hover:text-white">
              Sign Out
            </button>
          ) : (
            <>
              <Link to="/sign-in" className="text-sm font-semibold text-gray-300 hover:text-white">Sign In</Link>
              <Link to="/sign-up" className="rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-md hover:from-blue-600 hover:to-cyan-500">
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="text-gray-400 hover:text-white">
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-gray-900 px-6 py-6 overflow-y-auto shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <svg className="h-8 w-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">LensBay</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            <Link to="/" className="block text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/cameras" className="block text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Cameras</Link>
            {user && (
              <Link to="/cameras/create" className="block text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Add Camera</Link>
            )}
            <Link to="/about" className="block text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <hr className="border-gray-700 my-4" />
            {user ? (
              <button onClick={() => { handleSignOut(); setMobileMenuOpen(false) }} className="block w-full text-left text-white hover:text-blue-400">
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/sign-in" className="block text-white hover:text-blue-400" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
                <Link to="/sign-up" className="block bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-md text-center hover:from-blue-600 hover:to-cyan-500" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
              </>
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
