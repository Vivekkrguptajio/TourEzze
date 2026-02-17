import React, { useState } from "react";
import { UploadCloud, CheckCircle, AlertCircle, FileText, User } from "lucide-react";

export default function Verification() {
  const [aadharPreview, setAadharPreview] = useState(null);
  const [panPreview, setPanPreview] = useState(null);

  const handleFileUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) setter(URL.createObjectURL(file));
  };

  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Account Verification</h1>
        <p className="text-gray-500">Verify your identity to activate full features.</p>
      </div>

      {/* Status Card */}
      <div className="bg-white border rounded-xl shadow-sm p-5 flex items-center gap-4">
        <CheckCircle size={34} className="text-green-600" />
        <div>
          <p className="font-semibold text-lg">Verification Status</p>
          <p className="text-gray-600 text-sm">
            Your profile is partially verified. Complete the remaining steps.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <User className="text-green-600" />
            <h2 className="font-semibold text-lg">Personal Details</h2>
          </div>

          <div className="space-y-3">
            <p className="text-gray-600 text-sm">Name: <b>Vivek Gupta</b></p>
            <p className="text-gray-600 text-sm">Phone: <b>+91 98765 43210</b></p>
            <p className="text-gray-600 text-sm">Email: <b>vivek@example.com</b></p>
          </div>

          <div className="mt-4">
            <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
              Pending
            </span>
          </div>
        </div>

        {/* Aadhar Upload */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-green-600" />
            <h2 className="font-semibold text-lg">Aadhar Verification</h2>
          </div>

          <div className="border-dashed border-2 rounded-xl p-5 text-center cursor-pointer">
            {aadharPreview ? (
              <img
                src={aadharPreview}
                alt="Aadhar Preview"
                className="w-40 mx-auto rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center text-gray-500">
                <UploadCloud size={38} />
                <p className="mt-2">Upload Aadhar (Front/Back)</p>
              </div>
            )}

            <label className="mt-4 inline-block cursor-pointer">
              <div className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
                Upload File
              </div>
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFileUpload(e, setAadharPreview)}
              />
            </label>
          </div>

          <div className="mt-4">
            <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 flex items-center gap-1 w-fit">
              <AlertCircle size={12} /> Not Submitted
            </span>
          </div>
        </div>

        {/* PAN Upload */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-green-600" />
            <h2 className="font-semibold text-lg">PAN Verification</h2>
          </div>

          <div className="border-dashed border-2 rounded-xl p-5 text-center cursor-pointer">
            {panPreview ? (
              <img
                src={panPreview}
                alt="PAN Preview"
                className="w-40 mx-auto rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center text-gray-500">
                <UploadCloud size={38} />
                <p className="mt-2">Upload PAN Card</p>
              </div>
            )}

            <label className="mt-4 inline-block cursor-pointer">
              <div className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm">
                Upload File
              </div>
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleFileUpload(e, setPanPreview)}
              />
            </label>
          </div>

          <div className="mt-4">
            <span className="px-3 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
              Under Review
            </span>
          </div>
        </div>

        {/* Bank Verification */}
        <div className="bg-white border rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-green-600" />
            <h2 className="font-semibold text-lg">Bank Verification</h2>
          </div>

          <div>
            <p className="text-gray-700 text-sm mb-2">Account Holder: <b>Vivek Gupta</b></p>
            <p className="text-gray-700 text-sm mb-2">Bank: <b>SBI</b></p>
            <p className="text-gray-700 text-sm mb-2">IFSC: <b>SBIN0001234</b></p>
          </div>

          <div className="mt-4">
            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 flex items-center gap-1 w-fit">
              <CheckCircle size={12} />
              Verified
            </span>
          </div>
        </div>
      </div>

      {/* Submit All */}
      <div className="flex justify-end">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg">
          Submit for Final Verification
        </button>
      </div>
    </div>
  );
}
