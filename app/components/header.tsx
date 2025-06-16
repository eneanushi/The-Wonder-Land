"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sparkles, BookOpen, User, ShoppingCart } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Stories", href: "/stories", icon: <BookOpen className="w-4 h-4" /> },
    { name: "How It Works", href: "#how-it-works", icon: <Sparkles className="w-4 h-4" /> },
    { name: "Pricing", href: "#pricing", icon: null },
    { name: "About", href: "#about", icon: null },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fadeInDown
        ${isScrolled ? "bg-white/10 backdrop-blur-md shadow-lg" : "bg-transparent"}
        border-b border-white/10
      `}
      style={{ 
        boxShadow: isScrolled ? '0 8px 32px 0 rgba(120, 72, 200, 0.15)' : 'none',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-tr from-pink-200/80 via-yellow-100/80 to-purple-200/80 rounded-full flex items-center justify-center shadow-lg animate-float backdrop-blur-sm">
              <span className="text-2xl drop-shadow-glow">✨</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent drop-shadow-glow animate-gradientMove">
                The Land of Wonders
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  `group relative flex items-center font-sans font-semibold px-5 py-2 rounded-full transition-all duration-300
                  bg-white/5 backdrop-blur-sm
                  text-white shadow-none
                  hover:scale-105
                  before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-pink-400/40 before:via-purple-500/40 before:to-sky-400/40 before:opacity-60 before:transition-all before:duration-500
                  hover:before:opacity-90
                  z-10 overflow-hidden`
                }
                style={{
                  textShadow: '0 2px 8px #a259ff, 0 0 16px #fff',
                  fontSize: '1.05rem',
                  letterSpacing: '0.01em',
                }}
              >
                <span className="relative z-10 flex items-center gap-1">
                  {item.icon && <span className="group-hover:animate-bounce-gentle animate-floatSlow">{item.icon}</span>}
                  {item.name}
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-300 shadow animate-fadeInUp"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-xl shadow-2xl rounded-b-2xl fade-in animate-fadeInDown">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 text-white hover:text-pink-200 transition-colors duration-300 font-sans font-medium py-2 animate-fadeInUp"
                >
                  {item.icon && <span className="text-pink-200 animate-floatSlow">{item.icon}</span>}
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="border-t border-pink-100 pt-4 space-y-3">
                <button className="flex items-center space-x-3 text-pink-400 hover:text-yellow-500 transition-colors duration-300 font-sans font-medium py-2 w-full animate-fadeInUp bg-white/40 rounded-full shadow-md hover:shadow-pink-200">
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
                <button className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 text-pink-500 font-semibold rounded-full hover:shadow-xl transition-all duration-500 font-sans animate-glow border border-pink-100/60">
                  <ShoppingCart className="w-4 h-4 animate-wiggle" />
                  <span>Cart</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
      {/* Animations and effects styles */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes floatSlow {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }
        .animate-floatSlow {
          animation: floatSlow 5s ease-in-out infinite;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown {
          animation: fadeInDown 1s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 6s ease-in-out infinite;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #e0aaff) drop-shadow(0 0 16px #cdb4fe);
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 16px 4px #fbc2eb44, 0 0 32px 8px #a6c1ee33; }
          50% { box-shadow: 0 0 32px 8px #fbc2eb88, 0 0 64px 16px #a6c1ee77; }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .animate-wiggle {
          animation: wiggle 1.2s ease-in-out infinite;
        }
        .shadow-sky-300\/60 { box-shadow: 0 0 16px 4px #7dd3fc99; }
        .shadow-emerald-200\/60 { box-shadow: 0 0 16px 4px #a7f3d099; }
        .shadow-orange-200\/60 { box-shadow: 0 0 16px 4px #fed7aa99; }
        .shadow-violet-300\/60 { box-shadow: 0 0 16px 4px #c4b5fd99; }
        .shadow-neon-purple { box-shadow: 0 0 16px 6px #a259ffcc, 0 0 32px 12px #a259ff99; }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 16px 6px #e0aaff66, 0 0 32px 12px #a259ff44; }
          50% { box-shadow: 0 0 32px 16px #fbc2eb99, 0 0 64px 24px #a6c1ee77; }
        }
        .group:hover .glow-animate {
          animation: glowPulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </header>
  )
}
