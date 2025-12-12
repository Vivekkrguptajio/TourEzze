import React from "react";
import { Star, StarHalf, ThumbsUp, MessageCircle, Filter } from "lucide-react";

export default function Review() {
  const reviews = [
    {
      id: 1,
      user: "Riya Sharma",
      rating: 4.5,
      comment:
        "Amazing product! Quality is superb and the artisan work is beautiful. Highly recommended!",
      date: "12 Nov 2025",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: 2,
      user: "Amit Kumar",
      rating: 4,
      comment:
        "Good handmade work. Delivery was also on time. Worth the price!",
      date: "08 Nov 2025",
      avatar: "https://i.pravatar.cc/150?img=31",
    },
    {
      id: 3,
      user: "Neha Verma",
      rating: 5,
      comment:
        "Absolutely loved it! Craftsmanship is top-notch. Will buy again.",
      date: "30 Oct 2025",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  // Star rating renderer
  const renderStars = (rating) => {
    let stars = [];
    let full = Math.floor(rating);
    let half = rating % 1 !== 0;

    for (let i = 0; i < full; i++)
      stars.push(<Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />);

    if (half)
      stars.push(
        <StarHalf
          key="half"
          size={18}
          className="text-yellow-500 fill-yellow-500"
        />
      );

    return stars;
  };

  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold">Customer Reviews</h1>
          <p className="text-gray-500">See what customers are saying about your products.</p>
        </div>

        <button className="flex items-center gap-2 border bg-white px-4 py-2 rounded-lg hover:bg-gray-50">
          <Filter size={18} />
          Filter Reviews
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-white border shadow-sm rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        <div className="text-center sm:text-left">
          <h2 className="text-5xl font-bold flex items-center gap-2">
            ⭐ 4.6
          </h2>
          <p className="text-gray-500 mt-1">Based on 128 reviews</p>
        </div>

        <div className="w-full sm:w-1/2 space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-3">
              <span className="w-6">{star}★</span>
              <div className="bg-gray-200 w-full h-3 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    star >= 4 ? "bg-green-500" : star === 3 ? "bg-yellow-400" : "bg-red-400"
                  }`}
                  style={{
                    width: `${star === 5 ? 70 : star === 4 ? 55 : star === 3 ? 20 : 7}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">
                {star === 5 ? "70%" : star === 4 ? "55%" : star === 3 ? "20%" : star === 2 ? "7%" : "3%"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition"
          >
            {/* User Info */}
            <div className="flex items-center gap-4">
              <img
                src={r.avatar}
                className="w-12 h-12 rounded-full"
                alt={r.user}
              />
              <div>
                <h3 className="font-semibold text-lg">{r.user}</h3>
                <p className="text-gray-500 text-sm">{r.date}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-3">
              {renderStars(r.rating)}
              <span className="ml-2 text-sm font-medium text-green-700">
                {r.rating}
              </span>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mt-3 leading-relaxed">{r.comment}</p>

            {/* Like + Reply */}
            <div className="flex items-center gap-6 mt-4 text-gray-600 text-sm">
              <button className="flex items-center gap-1 hover:text-green-600">
                <ThumbsUp size={16} />
                Helpful
              </button>

              <button className="flex items-center gap-1 hover:text-green-600">
                <MessageCircle size={16} />
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
