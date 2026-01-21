import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MedGate Payment Portal',
  description: 'Secure payment gateway for MedGate Healthcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-gray-200">
            {/* Top Bar */}
            <div className="gradient-medgate text-white">
              <div className="container mx-auto px-4 py-2">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Trusted Healthcare Since 2005</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">24/7 Support</span>
                    </div>
                    <div className="hidden md:block">|</div>
                    <div className="hidden md:block">
                      <span className="text-sm">Call: 1-800-MED-GATE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#2E86AB] rounded-xl flex items-center justify-center shadow-md">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-[#FF6B35] font-bold text-xl">MG</span>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">MedGate</h1>
                    <p className="text-sm text-gray-600">Healthcare Payment Portal</p>
                  </div>
                </div>

                {/* Navigation Menu */}
                <nav className="hidden md:flex items-center space-x-8">
                  <a href="#" className="nav-link">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Home</span>
                    </div>
                  </a>
                  <a href="#" className="nav-link">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Security</span>
                    </div>
                  </a>
                  <a href="#" className="nav-link">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span>Support</span>
                    </div>
                  </a>
                </nav>

                {/* User Actions */}
                <div className="flex items-center space-x-4">
                  <div className="hidden md:block">
                    <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#2E86AB] rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Secure Portal</p>
                        <p className="text-xs text-gray-600">256-bit Encryption</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Menu Button */}
                  <button className="md:hidden text-gray-700 hover:text-[#FF6B35]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="bg-gradient-to-r from-[#F7F9FC] to-white border-t border-gray-100">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center md:justify-start py-3 gap-4 md:gap-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm text-gray-700">
                      System Status: <span className="font-semibold text-green-600">Operational</span>
                    </span>
                  </div>
                  <div className="hidden md:block text-gray-300">|</div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-[#2E86AB] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">HIPAA Compliant</span>
                  </div>
                  <div className="hidden md:block text-gray-300">|</div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-[#FF6B35] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm text-gray-700">PCI DSS Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gradient-to-r from-[#1A202C] to-[#2D3748] text-white">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#2E86AB] rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">MG</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">MedGate Healthcare</h2>
                      <p className="text-gray-300">Excellence in Medical Services</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 max-w-md">
                    Providing world-class healthcare services with cutting-edge technology and compassionate care since 2005.
                  </p>
                  <div className="flex space-x-4">
                    <div className="badge-primary">HIPAA Compliant</div>
                    <div className="badge-secondary">PCI DSS Level 1</div>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Payment Portal</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Patient Services</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Medical Records</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Appointments</a></li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#FF6B35] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="text-gray-400">1-800-MED-GATE<br /><span className="text-sm">(633-4283)</span></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#2E86AB] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="text-gray-400">payments@medgate.com</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#FF6B35] mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-400">123 Medical Plaza<br />Suite 400, HC 10001</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700 mt-8 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <p className="text-sm text-gray-400">
                      © {new Date().getFullYear()} MedGate Healthcare Systems. All rights reserved.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-xs text-gray-500 flex flex-wrap justify-center gap-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-[#2E86AB]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        256-bit SSL
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Fraud Protection
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-[#2E86AB]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified Secure
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Legal Links */}
                <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}