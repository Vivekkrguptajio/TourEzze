import React from "react";
import { Download } from "lucide-react";

export default function DownloadReportButton() {
  return (
    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
      <Download size={16} /> Download Report
    </button>
  );
}
