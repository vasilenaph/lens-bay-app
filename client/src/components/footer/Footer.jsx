'use client'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 py-8 w-full">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-3">
              <svg className="w-7 h-7 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">
                LensBay
              </span>
            </div>
            <p className="text-gray-300">Capture perfection with premium gear</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Navigation
            </h3>
            <ul className="space-y-3">
              <li><a href="/cameras" className="text-gray-300 hover:text-blue-300 transition flex items-center">
                <span className="w-1 h-1 bg-current rounded-full mr-2 opacity-0 group-hover:opacity-100"></span>
                Browse Cameras
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition flex items-center">
                <span className="w-1 h-1 bg-current rounded-full mr-2 opacity-0 group-hover:opacity-100"></span>
                New Arrivals
              </a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition flex items-center">
                <span className="w-1 h-1 bg-current rounded-full mr-2 opacity-0 group-hover:opacity-100"></span>
                Photography Guides
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Connect
            </h3>
            <div className="space-y-3">
              <a href="#" className="text-gray-300 hover:text-blue-300 transition flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10z"/>
                </svg>
                support@lensbay.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-11.4 3.8H8.9v-5.1h1.7V12h-1.7V9.3c0-1.5.9-2.4 2.3-2.4h1.6v1.7h-1.2c-.5 0-.6.2-.6.6v1.2h1.9l-.3 1.7h-1.6v5.1z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.6 5.3c-.8.3-1.5.5-2.3.6a4 4 0 0 0 1.8-2.2 8.2 8.2 0 0 1-2.6 1 4 4 0 0 0-6.8 3.6A11 11 0 0 1 3 4.8a4 4 0 0 0 1.3 5.3c-.6 0-1.1-.2-1.6-.4v.1a4 4 0 0 0 3.2 4c-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1a4 4 0 0 0 3.8 2.8 8.1 8.1 0 0 1-5 1.7A7.6 7.6 0 0 1 2 20a11.5 11.5 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6V9c.8-.6 1.5-1.3 2-2.2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} LensBay. All visual content protected.
        </div>
      </div>
    </footer>
  )
}