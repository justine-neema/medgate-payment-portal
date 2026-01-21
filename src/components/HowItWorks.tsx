
import React from 'react';

const MedGateLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">
              <span className="text-orange-500">Med</span>
              <span className="text-gray-900">Gate</span>
            </h1>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Board Member</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">How it works</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Referrals</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">ABOUT US</a>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-600 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">How MedGate Works</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            A simple, guided process to access quality hospitals and travel<br />
            partners, all in one platform.
          </p>
        </div>
      </section>

      {/* Patient Journey Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-16">Your Care Journey (Patients)</h3>
          
          <div className="grid grid-cols-1 gap-8">
            {/* Step 1 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-orange-500 font-bold text-2xl">01</span>
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-xl font-bold mb-2">Tell Us Your Needs</h4>
                <p className="text-gray-600">
                  Tell us about your medical condition so we can understand your needs.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-orange-500 font-bold text-2xl">02</span>
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-xl font-bold mb-2">Book Everything in One Place</h4>
                <p className="text-gray-600">
                  Tell us about your&nbsp;medical&nbsp;y arrange your hospital care, accommodation, and transport all in one place.y medical condition so we can understand your needs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-orange-500 font-bold text-2xl">03</span>
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-xl font-bold mb-2">Book Everything in One Place</h4>
                <p className="text-gray-600">
                  Easily arrange your hospital care, accommodation, and transport all in one place.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-orange-500 font-bold text-2xl">04</span>
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-xl font-bold mb-2">Focus on Your Health</h4>
                <p className="text-gray-600">
                  Concentrate on your recovery while we take care of all the logistics for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Partner Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-16">Become our partner<br />(Hospitals)</h3>
          
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              {/* Step 1 */}
              <div>
                <h4 className="text-xl font-bold mb-2">Join & Get Verified</h4>
                <p className="text-gray-600">
                  Hospitals apply and go through our quality screening.
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <h4 className="text-xl font-bold mb-2">Receive Patient Requests</h4>
                <p className="text-gray-600">
                  Get matched with patients based on your specialties.
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <h4 className="text-xl font-bold mb-2">Provide Treatment Plans</h4>
                <p className="text-gray-600">
                  Submit medical opinions and cost estimates.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                {/* Decorative circle background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-gray-200 rounded-full"></div>
                
                <div className="relative text-center py-12">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
                      <span className="text-orange-500 font-bold text-2xl">01</span>
                    </div>
                    <h4 className="text-3xl font-bold leading-tight">Get Started in<br />Minutes</h4>
                  </div>
                  
                  <div className="mt-12 relative">
                    {/* Illustration matching the Figma design */}
                    <svg viewBox="0 0 320 240" className="w-full max-w-sm mx-auto">
                      {/* Decorative circles on the right */}
                      <circle cx="290" cy="80" r="8" fill="#4338ca" opacity="0.8"/>
                      <circle cx="300" cy="110" r="10" fill="#6366f1" opacity="0.7"/>
                      <circle cx="305" cy="145" r="12" fill="#818cf8" opacity="0.6"/>
                      
                      {/* Person doing plank */}
                      <g transform="translate(140, 140)">
                        {/* Head */}
                        <ellipse cx="65" cy="8" rx="14" ry="16" fill="#1e293b"/>
                        
                        {/* Body */}
                        <rect x="8" y="15" width="60" height="35" fill="#4f46e5" rx="6"/>
                        
                        {/* Arms */}
                        <rect x="0" y="25" width="10" height="40" fill="#4f46e5" rx="5"/>
                        <rect x="68" y="25" width="10" height="40" fill="#4f46e5" rx="5"/>
                        
                        {/* Legs */}
                        <rect x="15" y="48" width="12" height="42" fill="#1e293b" rx="6"/>
                        <rect x="48" y="48" width="12" height="42" fill="#1e293b" rx="6"/>
                        
                        {/* Shoes */}
                        <ellipse cx="21" cy="92" rx="8" ry="6" fill="#1e293b"/>
                        <ellipse cx="54" cy="92" rx="8" ry="6" fill="#1e293b"/>
                      </g>
                      
                      {/* Base line */}
                      <line x1="40" y1="235" x2="280" y2="235" stroke="#cbd5e1" strokeWidth="3"/>
                      
                      {/* Small plant decoration */}
                      <g transform="translate(270, 210)">
                        <line x1="0" y1="25" x2="0" y2="0" stroke="#22c55e" strokeWidth="2"/>
                        <circle cx="0" cy="0" r="3" fill="#22c55e"/>
                        <circle cx="-4" cy="5" r="2.5" fill="#22c55e"/>
                        <circle cx="4" cy="5" r="2.5" fill="#22c55e"/>
                      </g>
                    </svg>
                  </div>
                </div>
                
                {/* Numbered circles on the left */}
                <div className="absolute top-12 left-0">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-xl">01</span>
                  </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-0">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-xl">02</span>
                  </div>
                </div>
                <div className="absolute bottom-12 left-0">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-xl">03</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-3">Watch How MedGate Works</h3>
          <p className="text-gray-600 mb-12">
            A short video explaining all the features<br />
            provided by MedGate
          </p>
          
          <div className="bg-gray-200 rounded-3xl aspect-video flex items-center justify-center shadow-sm">
            <button className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all shadow-lg hover:scale-105">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.5 5.5v9l7-4.5z"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Travel Facilitators Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">For Travel Facilitators: Seamless<br />Coordination</h3>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Travel partners play a key role in managing a smooth medical journey for patients. From booking to lodging, you coordinate all the essential services to make travel stress-free.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h4 className="text-xl font-bold mb-2">Receive Travel Requirements</h4>
              <p className="text-gray-600">
                Get patient travel details and coordinate with authorized travel team.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h4 className="text-xl font-bold mb-2">Arrange Logistics</h4>
              <p className="text-gray-600">
                Book flights, ground transport, and accommodations—all in one system.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h4 className="text-xl font-bold mb-2">Confirm & Support</h4>
              <p className="text-gray-600">
                Offer 24/7 support to ensure seamless coordination on the patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            {/* Brand */}
            <div>
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-orange-500">Med</span>
                <span className="text-white">Gate</span>
              </h4>
              <p className="text-gray-300 text-sm mb-6">
                Your trusted gateway to<br />Healthcare in Rwanda
              </p>
              <p className="text-gray-300 text-sm mb-1">Kigali Rwanda</p>
              <div className="space-y-1 text-sm mt-6">
                <p className="text-gray-300"><span className="font-medium">Monday - Friday :</span> 8:30 AM - 6:00 PM</p>
                <p className="text-gray-300"><span className="font-medium">Saturday :</span> 9:00 AM - 1:00 PM</p>
                <p className="text-gray-300"><span className="font-medium">Sunday :</span> Closed</p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h5 className="font-semibold mb-4 text-white">Navigation</h5>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">Home</a></li>
                <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition">How it works</a></li>
                <li><a href="#" className="hover:text-white transition">Referrals</a></li>
              </ul>
            </div>

            {/* For Patients */}
            <div>
              <h5 className="font-semibold mb-4 text-white">For Patients</h5>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition">Browse Hospitals</a></li>
                <li><a href="#" className="hover:text-white transition">Get Started</a></li>
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h5 className="font-semibold mb-4 text-white">Social Media</h5>
              <ul className="space-y-3 text-sm text-gray-300 mb-6">
                <li><a href="#" className="hover:text-white transition">X/Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition">Medium</a></li>
              </ul>
              <h5 className="font-semibold mb-4 text-white">Contact us</h5>
              <p className="text-sm text-gray-300">+250 798203731</p>
              <p className="text-sm text-gray-300">support@medgate.com</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 flex justify-between items-center text-sm text-gray-400">
            <p>© MedGate 2026 All rights reserved</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MedGateLanding;