"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

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

export default function FeaturedStories() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-purple-800 mb-4">
            Featured Stories
          </h2>
          <p className="text-xl text-purple-600 max-w-2xl mx-auto">
            Discover our most enchanting tales, each one waiting to become your child's favorite adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBooks.map((book, index) => (
            <div
              key={book.id}
              className="group relative bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-t-2xl">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-3">
                  {book.theme}
                </span>
                <h3 className="text-2xl font-serif font-bold text-purple-800 mb-2">{book.title}</h3>
                <p className="text-purple-600 mb-4">{book.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-purple-700">{book.price}</span>
                  <Link 
                    href={`/stories/${book.id}`}
                    className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-300 to-purple-300 text-purple-800 font-semibold rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    View Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-300 to-purple-300 text-purple-800 font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View All Stories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
} 