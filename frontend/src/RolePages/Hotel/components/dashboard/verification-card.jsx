export function VerificationCard() {
  const completed = 4;
  const total = 6;
  const percent = (completed / total) * 100;

  return (
    <div className="bg-[#050b08] border border-green-900 rounded-2xl p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h2 className="text-sm text-white font-semibold">Verification Status</h2>
        <span className="text-[11px] text-yellow-400 flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          Pending
        </span>
      </div>

      <div className="text-[11px] text-gray-400 flex justify-between mb-1">
        <span>Documents</span>
        <span>
          {completed} / {total}
        </span>
      </div>

      <div className="w-full h-2 rounded-full bg-[#020403] overflow-hidden border border-green-900">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="flex gap-2 mt-2">
        <button className="flex-1 text-xs py-1.5 rounded-full border border-green-800 text-gray-100 hover:bg-[#08130e] transition">
          View Documents
        </button>
        <button className="flex-1 text-xs py-1.5 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition">
          Upload More
        </button>
      </div>
    </div>
  );
}