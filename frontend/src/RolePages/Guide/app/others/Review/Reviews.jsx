import React from "react";
import { Star, MapPin, User } from "lucide-react";

const reviews = [
  {
    name: "Rahul Verma",
    tour: "Hundru Falls Adventure",
    location: "Ranchi, Jharkhand",
    rating: 5,
    date: "June 15, 2024",
    tag: "Friends Trip",
    review:
      "Guide bahut friendly the, pura route peacefully explain kiya. Safety ka bhi dhyaan rakha, photos bhi ache click kiye. 100% recommend!",
  },
  {
    name: "Neha Singh",
    tour: "Netarhat Sunset Tour",
    location: "Hazaribagh, Jharkhand",
    rating: 4,
    date: "June 10, 2024",
    tag: "Solo Traveler",
    review:
      "Sunset view literally mind-blowing tha. Thoda timing pe aur strict hote to aur better hota, lekin overall experience superb tha.",
  },
  {
    name: "Amit & Family",
    tour: "Betla Wildlife Safari",
    location: "Dhanbad, Jharkhand",
    rating: 5,
    date: "May 28, 2024",
    tag: "Family Trip",
    review:
      "Bachchon ko bhi bahut maza aaya. Guide ne wildlife ke bare me kaafi interesting facts bataye. Car clean thi, arrangement proper tha.",
  },
  {
    name: "Priya Kumari",
    tour: "Ranchi Heritage Walk",
    location: "Ranchi, Jharkhand",
    rating: 4,
    date: "May 12, 2024",
    tag: "Culture Lover",
    review:
      "Old churches, local bazaar aur culture ke bare me detail me bataya. Thoda walk lamba tha lekin information rich thi, worth it!",
  },
];

function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const avgRating = 4.6;
  const totalReviews = 124;

  return (
    <div className="p-6 space-y-6">
      {/* Header + Summary */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-green-900">Reviews & Ratings</h1>
          <p className="text-sm text-gray-600">
            Dekhiye tourists ne aapke tours ke baare me kya feedback diya hai.
          </p>
        </div>

        <div className="bg-white border rounded-xl px-5 py-3 shadow-sm flex items-center gap-4">
          <div>
            <p className="text-xs text-gray-500">Average Rating</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-green-700">
                {avgRating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-500">/ 5</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Based on {totalReviews} reviews
            </p>
          </div>
          <div className="border-l h-12 mx-2" />
          <div className="flex flex-col items-center">
            <RatingStars rating={5} />
            <p className="text-[11px] text-gray-500 mt-1">Top Rated Guide</p>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="bg-white border rounded-xl shadow-sm divide-y">
        {reviews.map((r, i) => (
          <div key={i} className="p-4 flex flex-col gap-2">
            {/* Top Row: Name + Rating + Date */}
            <div className="flex flex-wrap justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center">
                  <User size={18} className="text-green-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <MapPin size={12} /> {r.location}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <RatingStars rating={r.rating} />
                  <span className="text-xs text-gray-500">
                    {r.rating}.0
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{r.date}</p>
              </div>
            </div>

            {/* Tour Name + Tag */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
                {r.tour}
              </span>
              <span className="px-2 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100">
                {r.tag}
              </span>
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-700 leading-relaxed">{r.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
