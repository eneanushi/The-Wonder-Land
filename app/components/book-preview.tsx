"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BookPreview() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    {
      left: {
        image: "/placeholder.svg?height=400&width=300",
        text: "Once upon a time, in a magical kingdom far, far away...",
      },
      right: {
        image: "/placeholder.svg?height=400&width=300",
        text: "There lived a brave little hero named Alex who loved adventures.",
      },
    },
    {
      left: {
        image: "/placeholder.svg?height=400&width=300",
        text: "One sunny morning, Alex discovered a mysterious glowing portal...",
      },
      right: {
        image: "/placeholder.svg?height=400&width=300",
        text: "Without hesitation, our hero stepped through into the unknown!",
      },
    },
    {
      left: {
        image: "/placeholder.svg?height=400&width=300",
        text: "On the other side was a world filled with talking animals...",
      },
      right: {
        image: "/placeholder.svg?height=400&width=300",
        text: "And magical creatures who needed Alex's help to save their home.",
      },
    },
  ]

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length)
  }

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 book-shadow">
        <div className="flex gap-4">
          {/* Left Page */}
          <div className="flex-1 space-y-4">
            <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg overflow-hidden">
              <img
                src={pages[currentPage].left.image || "/placeholder.svg"}
                alt="Story illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-purple-700 font-sans leading-relaxed">{pages[currentPage].left.text}</p>
          </div>

          {/* Book Spine */}
          <div className="w-1 bg-gradient-to-b from-purple-200 to-pink-200 rounded-full"></div>

          {/* Right Page */}
          <div className="flex-1 space-y-4">
            <div className="aspect-[3/4] bg-gradient-to-br from-teal-100 to-yellow-100 rounded-lg overflow-hidden">
              <img
                src={pages[currentPage].right.image || "/placeholder.svg"}
                alt="Story illustration"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-purple-700 font-sans leading-relaxed">{pages[currentPage].right.text}</p>
          </div>
        </div>

        {/* Page Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevPage}
            className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
            disabled={currentPage === 0}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex gap-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentPage ? "bg-purple-400" : "bg-purple-200"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors"
            disabled={currentPage === pages.length - 1}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
