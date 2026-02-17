import React from "react";
import { PlusCircle, Calendar } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">

      <button className="p-5 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700">
        <PlusCircle className="inline mr-2" />
        Create Tour Package
      </button>

      <button className="p-5 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600">
        <Calendar className="inline mr-2" />
        Update Availability
      </button>

      <button className="p-5 bg-green-700 text-white rounded-xl font-medium hover:bg-green-800">
        Respond to Requests
      </button>

    </div>
  );
}
