'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Branding */}
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-white text-lg font-semibold">
              LensBay
            </a>
            <p className="text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/cameras" className="hover:text-white transition">Cameras</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10zm-11.4 3.8H8.9v-5.1H7.2v-2h1.7V7.3c0-1.5.9-2.4 2.3-2.4h1.6v2h-1.2c-.5 0-.6.2-.6.6v1.2h1.9l-.3 2h-1.6v5.1z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 0 1 3.2 19.5c-.5.1-.7-.2-.7-.5v-2.1c2.8.6 3.4-1.3 3.4-1.3.4-1.1.9-1.5.9-1.5.7-.5-.1-.5-.1-.5-.8 0-1.2.8-1.2.8-.7 1.2-1.7.9-2.1.7-.1-.5-.3-.9-.5-1.1 2.3-.2 4.7-1.1 4.7-5 0-1.1-.4-2-1-2.7.1-.2.4-1.2-.1-2.5 0 0-.9-.3-2.7 1a9.5 9.5 0 0 0-5 0c-1.8-1.3-2.7-1-2.7-1-.5 1.3-.2 2.3-.1 2.5-.6.7-1 1.6-1 2.7 0 3.9 2.4 4.8 4.7 5-.3.2-.6.7-.6 1.4v2c0 .3-.2.6-.7.5A10 10 0 0 1 12 2z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.6 5.3c-.8.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2 8.2 8.2 0 0 1-2.6 1 4 4 0 0 0-6.8 3.6A11 11 0 0 1 3 4.8a4 4 0 0 0 1.3 5.3c-.6 0-1.1-.2-1.6-.4v.1a4 4 0 0 0 3.2 4c-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1a4 4 0 0 0 3.8 2.8 8.1 8.1 0 0 1-5 1.7A7.6 7.6 0 0 1 2 20a11.5 11.5 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6V9c.8-.6 1.5-1.3 2-2.2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
