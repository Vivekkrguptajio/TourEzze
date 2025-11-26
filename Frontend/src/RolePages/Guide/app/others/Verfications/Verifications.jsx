import React from "react";
import { CheckCircle, Shield, AlertTriangle, Upload } from "lucide-react";

export default function Verifications() {
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-green-900">Verification Status</h1>
      <p className="text-sm text-gray-600">
        Complete your verification to build trust with tourists
      </p>

      {/* Profile Completion */}
      <div className="bg-white border rounded-xl shadow-sm p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-green-900">
              Profile 75% Complete
            </h2>
            <p className="text-sm text-gray-600">3 of 4 verifications completed</p>
          </div>

          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            ✔ Verified Guide
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
          <div
            className="bg-green-600 h-3 rounded-full"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>

      {/* Verification Checklist */}
      <div className="bg-white border rounded-xl shadow-sm p-5">
        <h3 className="font-semibold text-green-900 mb-4">Verification Checklist</h3>

        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border">
            <div className="flex items-center gap-3">
              <Shield className="text-green-700" />
              <div>
                <p className="font-medium text-gray-900">Government Guide License</p>
                <p className="text-xs text-gray-500">Upload your official tourism guide license</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">Verified</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border">
            <div className="flex items-center gap-3">
              <Shield className="text-green-700" />
              <div>
                <p className="font-medium text-gray-900">Identity Verification</p>
                <p className="text-xs text-gray-500">Aadhaar card and PAN card verification</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">Verified</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border">
            <div className="flex items-center gap-3">
              <Shield className="text-green-700" />
              <div>
                <p className="font-medium text-gray-900">Police Verification</p>
                <p className="text-xs text-gray-500">Background check certificate</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">Verified</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-yellow-600" />
              <div>
                <p className="font-medium text-gray-900">First Aid Certification</p>
                <p className="text-xs text-gray-500">Valid first aid training certificate</p>
              </div>
            </div>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 text-xs rounded-full">
              Under Review
            </span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border rounded-xl shadow-sm p-5">
        <h3 className="font-semibold text-green-900 mb-4">Your Trust Badges</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-xl bg-green-50 text-center">
            <Shield className="mx-auto text-green-700" size={28} />
            <p className="font-medium mt-2">Verified Guide</p>
            <p className="text-xs text-gray-600">Official government approved guide</p>
            <p className="mt-2 text-green-700 text-xs font-medium">● Active</p>
          </div>

          <div className="p-4 border rounded-xl bg-green-50 text-center">
            <Shield className="mx-auto text-green-700" size={28} />
            <p className="font-medium mt-2">Experienced Professional</p>
            <p className="text-xs text-gray-600">5+ years of guiding experience</p>
            <p className="mt-2 text-green-700 text-xs font-medium">● Active</p>
          </div>

          <div className="p-4 border rounded-xl bg-green-50 text-center">
            <Shield className="mx-auto text-green-700" size={28} />
            <p className="font-medium mt-2">Highly Rated</p>
            <p className="text-xs text-gray-600">4.8★ average rating from tourists</p>
            <p className="mt-2 text-green-700 text-xs font-medium">● Active</p>
          </div>
        </div>
      </div>

      {/* Why Verification Matters */}
      <div className="bg-orange-50 border-l-4 border-orange-500 rounded-xl p-5">
        <h3 className="font-semibold text-orange-700 mb-2">Why Verification Matters</h3>

        <ul className="text-sm text-gray-800 list-disc list-inside space-y-1">
          <li>Verified guides receive 3x more booking requests</li>
          <li>Higher ranking in search results</li>
          <li>Builds trust with domestic and international tourists</li>
          <li>Access to premium tour packages and higher earnings</li>
          <li>Priority support from Jharkhand Tourism Department</li>
        </ul>
      </div>

      {/* Upload Additional Documents */}
      <div className="bg-white border rounded-xl shadow-sm p-6 text-center">
        <Upload className="mx-auto text-green-700" size={40} />
        <p className="font-medium mt-2">Upload Certificates</p>
        <p className="text-xs text-gray-600 mb-4">
          Support first aid, wilderness training, or other relevant certifications
        </p>

        <label className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer">
          Choose Files
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
}
