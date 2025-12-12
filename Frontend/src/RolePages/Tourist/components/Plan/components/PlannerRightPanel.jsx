import React from "react";
import SkeletonCard from "./SkeletonCard";
import DayCard from "./DayCard";
import RouteSection from "./RouteSection";
import RecommendedSection from "./RecommendedSection";

export default function PlannerRightPanel({ result, loading }) {
  if (!loading && !result)
    return (
      <div className="h-full bg-white/60 border border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center justify-center text-center text-gray-600 space-y-2">
        <p className="font-semibold">No itinerary generated yet</p>
        <p className="text-xs max-w-xs">
          Fill the left input form and click{" "}
          <span className="font-semibold">Generate AI Itinerary</span>.
        </p>
      </div>
    );

  if (loading)
    return (
      <div className="space-y-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );

  return (
    <div className="space-y-6">
      {result.days?.map((d, i) => (
        <DayCard key={i} day={d} index={i} />
      ))}

      {result.routePlan && (
        <RouteSection route={result.routePlan} />
      )}

      {result.recommended && result.recommended.length > 0 && (
        <RecommendedSection recommended={result.recommended} />
      )}
    </div>
  );
}
