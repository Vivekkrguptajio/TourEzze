import React from "react";

export default function SkeletonCard() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border animate-pulse">
      <div className="flex justify-between mb-4">
        <div className="h-3 w-24 bg-gray-200 rounded-full" />
        <div className="h-3 w-32 bg-gray-200 rounded-full" />
      </div>

      <div className="space-y-2">
        <div className="h-2 w-full bg-gray-200 rounded-full" />
        <div className="h-2 w-5/6 bg-gray-200 rounded-full" />
        <div className="h-2 w-3/4 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
