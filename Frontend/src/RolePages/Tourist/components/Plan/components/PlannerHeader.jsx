import React from "react";
import { Heart, Download, Share2 } from "lucide-react";

export default function PlannerHeader({ saved, handleSavePlan, disabledSave, hasResult }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 border flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div>
        <p className="inline-flex items-center text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 rounded-full px-2.5 py-1 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
          AI-powered Smart Planning
        </p>

        <h1 className="text-3xl font-extrabold text-gray-800">
          AI Itinerary Planner <span className="text-emerald-600">Pro</span>
        </h1>

        <p className="text-sm text-gray-600 mt-1">
          Customize your trip using budget, comfort, interests & travel style.
        </p>
      </div>

      <div className="flex gap-2 text-xs flex-wrap">

        <button
          onClick={handleSavePlan}
          disabled={disabledSave}
          className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border ${
            saved
              ? "bg-emerald-600 text-white border-emerald-600"
              : "bg-white text-gray-700 border-gray-200 hover:bg-emerald-50"
          }`}
        >
          <Heart size={14} className={saved ? "fill-white" : "text-emerald-700"} />
          {saved ? "Saved" : "Save Itinerary"}
        </button>

        <button
          onClick={() => window.print()}
          disabled={!hasResult}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full border bg-white text-gray-700 border-gray-200 hover:bg-gray-50 disabled:opacity-30"
        >
          <Download size={14} /> Download PDF
        </button>

        <button
          onClick={() => navigator.share?.({ title: "Trip Plan", url: window.location.href })}
          disabled={!hasResult}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full border bg-white text-gray-700 border-gray-200 hover:bg-gray-50 disabled:opacity-30"
        >
          <Share2 size={14} /> Share Plan
        </button>

      </div>
    </div>
  );
}
