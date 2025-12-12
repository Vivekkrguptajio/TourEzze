import React from "react";
import { Star, MessageSquare, ThumbsUp } from "lucide-react";

export default function Review() {
  const stats = {
    overall: 4.4,
    breakdown: { 5: 3, 4: 1, 3: 1, 2: 0, 1: 0 },
    totalReviews: 5,
    insights: { positive: 4, replies: 2, pending: 3 },
  };

  const reviews = [
    {
      name: "Priya Sharma",
      date: "Dec 12, 2024",
      room: "Deluxe Suite #101",
      rating: 5,
      comment:
        "Absolutely wonderful stay! The room was clean, staff was helpful, and the location is perfect for exploring Jharkhand. Will definitely come back!",
      likes: 8,
      reply: null,
    },
    {
      name: "Amit Verma",
      date: "Dec 10, 2024",
      room: "Toyota Innova Crysta",
      rating: 4,
      comment:
        "Great vehicle and very punctual driver. Made our trip to Netarhat very comfortable. Minor issue with AC but overall satisfied.",
      likes: 5,
      reply:
        "Thank you for your feedback! We apologize for the AC issue and have fixed it. Hope to serve you again!",
    },
    {
      name: "Sunita Devi",
      date: "Dec 08, 2024",
      room: "Family Room #205",
      rating: 5,
      comment:
        "Perfect family trip! Kids loved the spacious room and the breakfast was delicious. Highly recommend for families visiting Ranchi.",
      likes: 12,
      reply:
        "We're so happy your family enjoyed the stay! Looking forward to hosting you again.",
    },
    {
      name: "Ravi Prasad",
      date: "Dec 05, 2024",
      room: "Maruti Dzire",
      rating: 4,
      comment:
        "Decent car but driver was late by 30 minutes. The journey itself was smooth though.",
      likes: 2,
      reply: null,
    },
  ];

  const getStars = (count) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < count ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
      />
    ));

  return (
    <div className="text-white px-6 pb-10">

      {/* HEADER */}
      <h1 className="text-2xl font-bold">Reviews</h1>
      <p className="text-gray-400 text-sm">
        View and respond to guest reviews
      </p>

      {/* TOP STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        {/* LEFT BOX - OVERALL RATING */}
        <div className="bg-[#050c08] border border-green-900 rounded-xl p-6">
          <p className="font-semibold text-gray-300">Overall Rating</p>

          <div className="flex items-center gap-4 mt-4">
            <div>
              <p className="text-4xl font-bold text-green-400">{stats.overall}</p>
              <div className="flex mt-1">{getStars(5)}</div>
              <p className="text-gray-400 text-xs mt-1">{stats.totalReviews} reviews</p>
            </div>

            <div className="flex-1 space-y-1">
              {Object.keys(stats.breakdown)
                .sort((a, b) => b - a)
                .map((star) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="w-3 text-right">{star}</span>
                    <div className="flex-1 h-2 bg-gray-700 rounded">
                      <div
                        className="h-full bg-green-500 rounded"
                        style={{
                          width: `${(stats.breakdown[star] / stats.totalReviews) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <span className="w-4 text-gray-400">{stats.breakdown[star]}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* RIGHT BOX - REVIEW INSIGHTS */}
        <div className="bg-[#050c08] border border-green-900 rounded-xl p-6">
          <p className="font-semibold text-gray-300 mb-4">Review Insights</p>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-black/40 border border-green-900 rounded-lg p-4">
              <p className="text-3xl font-bold text-green-400">{stats.insights.positive}</p>
              <p className="text-sm text-gray-400">Positive Reviews</p>
            </div>

            <div className="bg-black/40 border border-green-900 rounded-lg p-4">
              <p className="text-3xl font-bold text-green-400">{stats.insights.replies}</p>
              <p className="text-sm text-gray-400">Replies Sent</p>
            </div>

            <div className="bg-black/40 border border-green-900 rounded-lg p-4">
              <p className="text-3xl font-bold text-green-400">{stats.insights.pending}</p>
              <p className="text-sm text-gray-400">Pending Replies</p>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS LIST */}
      <div className="mt-8 space-y-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-[#050c08] border border-green-900 rounded-xl p-6"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-gray-400">{r.date} • 🛏 {r.room}</p>
              </div>

              <div className="flex gap-2 items-center">
                <button className="flex items-center gap-1 px-2 py-1 text-xs border border-gray-700 rounded hover:border-green-500">
                  <MessageSquare size={12} />
                  Reply
                </button>

                <button className="flex items-center gap-1 text-gray-400 text-xs">
                  <ThumbsUp size={14} /> {r.likes}
                </button>
              </div>
            </div>

            {/* RATING */}
            <div className="flex mt-1">{getStars(r.rating)}</div>

            {/* COMMENT */}
            <p className="mt-3 text-gray-300 text-sm">{r.comment}</p>

            {/* OWNER REPLY */}
            {r.reply && (
              <div className="mt-4 bg-black/40 border border-green-900 rounded-lg p-3 text-sm text-gray-300">
                <p className="text-green-400 text-xs mb-1">Your Reply:</p>
                {r.reply}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
