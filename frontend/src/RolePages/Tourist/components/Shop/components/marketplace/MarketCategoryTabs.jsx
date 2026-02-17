import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const categories = [
  { name: "All", icon: "✨" },
  { name: "Tribal Handicrafts", icon: "🎨" },
  { name: "Bamboo & Woodwork", icon: "🎋" },
  { name: "Handloom & Textiles", icon: "🧵" },
  { name: "Dokra Metal Craft", icon: "⚒️" },
  { name: "Paintings", icon: "🖼️" },
  { name: "Local Foods & Spices", icon: "🌶️" },
  { name: "Cultural Souvenirs", icon: "🎁" },
  { name: "Homestay Rooms", icon: "🏡" },
  { name: "Eco-Tourism Packages", icon: "🌿" },
];

export default function MarketCategoryTabs() {
  const [category, setCategory] = useState("All");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="w-full py-6 px-4 md:px-6 bg-gradient-to-r from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-purple-600" size={24} />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Browse Categories
            </h2>
          </div>
          <span className="hidden md:block text-sm text-gray-500 font-medium">
            {categories.length} categories
          </span>
        </div>

        {/* Scrollable Categories */}
        <div className="relative group">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all hover:scale-110 border border-gray-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-purple-600" />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all hover:scale-110 border border-gray-200"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-purple-600" />
            </button>
          )}

          {/* Categories Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-2 px-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setCategory(cat.name)}
                className={`
                  flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm whitespace-nowrap
                  transition-all duration-300 transform hover:scale-105 flex-shrink-0
                  ${
                    category === cat.name
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-300/50"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300 hover:shadow-md"
                  }
                `}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.name}</span>
                {category === cat.name && (
                  <span className="bg-white/30 px-2 py-0.5 rounded-full text-xs">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden flex justify-center gap-1 mt-4">
          {[...Array(Math.ceil(categories.length / 3))].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}