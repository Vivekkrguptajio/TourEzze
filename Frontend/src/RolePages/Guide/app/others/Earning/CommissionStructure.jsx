import React from "react";

export default function CommissionStructure() {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h3 className="font-semibold text-green-800 mb-3">Commission Structure</h3>

      <div className="divide-y">
        <div className="py-3 flex justify-between">
          <div>
            <p className="font-medium">Platform Fee</p>
            <p className="text-xs text-gray-500">Standard service charge</p>
          </div>
          <p>10%</p>
        </div>

        <div className="py-3 flex justify-between">
          <div>
            <p className="font-medium">Payment Processing</p>
            <p className="text-xs text-gray-500">Transaction fees</p>
          </div>
          <p>2%</p>
        </div>

        <div className="py-3 flex justify-between">
          <div>
            <p className="font-medium">Your Share</p>
            <p className="text-xs text-gray-500">Amount you receive</p>
          </div>
          <p>88%</p>
        </div>
      </div>
    </div>
  );
}
