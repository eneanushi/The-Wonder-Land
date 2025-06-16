"use client"

import { Instagram } from "lucide-react"
import Header from "./components/header"
import SplitText from "./components/SplitText"
import Image from "next/image"

export default function HomePage() {
  const handleAnimationComplete = () => {
    console.log('Motto animation completed!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Image Section - Full Width, Top of Page */}
      <div className="w-screen h-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2 overflow-hidden flex items-center justify-center">
        <Image
          src="/lfw_logo.png"
          alt="Dream World Hero"
          fill
          className="object-cover select-none pointer-events-none"
          priority
          draggable={false}
        />
        {/* Poetic Motto - Centered in hero sector, on top of image */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center z-30 pointer-events-none select-none">
          <div style={{ fontFamily: 'var(--font-magical-neverland)', letterSpacing: '0.05em' }}>
            <SplitText
              text="Stories born from love and dreams"
              className="motto-text text-5xl md:text-7xl lg:text-8xl font-normal leading-tight max-w-5xl mx-auto text-white"
              delay={100}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-transparent via-purple-100/30 to-pink-100/30 py-16 px-4 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-serif font-bold text-purple-800 mb-4">The Land of Wonders</h3>
              <p className="text-purple-600 mb-4 font-sans">
                Creating magical stories that inspire young minds and bring families together.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="group relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-200/80 to-purple-200/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Coming Soon
                  </div>
                </a>
                <a href="#" className="group relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-200/80 to-purple-200/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Coming Soon
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-800 mb-4 font-sans">Company</h4>
              <ul className="space-y-2 text-purple-600 font-sans">
                <li>
                  <a href="#" className="hover:text-purple-800 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full group-hover:scale-150 transition-transform"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-800 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full group-hover:scale-150 transition-transform"></span>
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-800 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full group-hover:scale-150 transition-transform"></span>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-800 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full group-hover:scale-150 transition-transform"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-800 mb-4 font-sans">Support</h4>
              <ul className="space-y-2 text-purple-600 font-sans">
                <li>
                  <a href="#" className="hover:text-purple-800 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full group-hover:scale-150 transition-transform"></span>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-800 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full group-hover:scale-150 transition-transform"></span>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-800 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full group-hover:scale-150 transition-transform"></span>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-800 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-purple-400/60 rounded-full group-hover:scale-150 transition-transform"></span>
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-200/30 pt-8 text-center">
            <p className="text-purple-600 font-sans flex items-center justify-center gap-2">
              <span className="text-xl">🔒</span>
              <span>&copy; 2024 The Land of Wonders. All rights reserved.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
