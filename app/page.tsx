"use client"

import { useState } from "react"
import { Sparkles, BookOpen, Palette, Wand2, Package, X, ArrowRight, Instagram } from "lucide-react"
import BookPreview from "./components/book-preview"
import Header from "./components/header"
import SplitText from "./components/SplitText"
import Link from "next/link"

export default function HomePage() {
  const [showChat, setShowChat] = useState(false)

  const handleAnimationComplete = () => {
    console.log('Motto animation completed!');
  };

  const storyTemplates = [
    { id: 1, title: "Dragon Adventure", cover: "/placeholder.svg?height=300&width=200", theme: "Fantasy" },
    { id: 2, title: "Space Explorer", cover: "/placeholder.svg?height=300&width=200", theme: "Sci-Fi" },
    { id: 3, title: "Underwater Quest", cover: "/placeholder.svg?height=300&width=200", theme: "Ocean" },
    { id: 4, title: "Fairy Garden", cover: "/placeholder.svg?height=300&width=200", theme: "Magic" },
    { id: 5, title: "Pirate Treasure", cover: "/placeholder.svg?height=300&width=200", theme: "Adventure" },
    { id: 6, title: "Enchanted Forest", cover: "/placeholder.svg?height=300&width=200", theme: "Nature" },
    { id: 7, title: "Superhero Academy", cover: "/placeholder.svg?height=300&width=200", theme: "Heroes" },
    { id: 8, title: "Time Machine", cover: "/placeholder.svg?height=300&width=200", theme: "Time Travel" },
  ]

  const steps = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Choose a magical story template",
      description: "Pick from our collection of enchanting adventures",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Add your child's details",
      description: "Personalize with their name, photo, or drawings",
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Let AI generate the story",
      description: "Watch as magic creates unique illustrations and tales",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Receive your printed book",
      description: "Get a beautiful hardcover book delivered to your door",
    },
  ]

  const featuredBooks = [
    {
      id: 1,
      title: "The Dragon's Secret",
      description: "A magical journey through ancient mountains where dragons still roam.",
      cover: "/placeholder.svg?height=300&width=200",
      theme: "Fantasy",
      price: "$24.99"
    },
    {
      id: 2,
      title: "Starlight Explorer",
      description: "Blast off into space and discover the wonders of distant galaxies.",
      cover: "/placeholder.svg?height=300&width=200",
      theme: "Sci-Fi",
      price: "$24.99"
    },
    {
      id: 3,
      title: "Ocean's Hidden Kingdom",
      description: "Dive deep into an underwater world of mermaids and sea creatures.",
      cover: "/placeholder.svg?height=300&width=200",
      theme: "Adventure",
      price: "$24.99"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Image Section - Full Width, Top of Page */}
      <div className="w-screen h-screen max-w-none relative left-1/2 right-1/2 -translate-x-1/2 overflow-hidden flex items-center justify-center">
        <img
          src="/lfw_logo.png"
          alt="Dream World Hero"
          className="w-full h-full object-cover block select-none pointer-events-none"
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

      {/* AI Assistant Floating Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="w-14 h-14 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-2xl animate-bounce-gentle"
        >
          ⭐
        </button>

        {showChat && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-xl p-6 fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-purple-800 font-sans">Stella the Story Fairy</h3>
              <button onClick={() => setShowChat(false)} className="text-purple-400 hover:text-purple-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-sm text-purple-600 font-sans">
              <p>✨ Hi there! I'm Stella, your magical story guide!</p>
              <p>🌟 I can help you:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Choose the perfect story template</li>
                <li>Personalize your child's adventure</li>
                <li>Answer questions about our books</li>
                <li>Track your order status</li>
              </ul>
              <p>💫 What magical story shall we create today?</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
