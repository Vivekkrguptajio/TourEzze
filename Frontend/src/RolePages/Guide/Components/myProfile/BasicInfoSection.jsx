import React, { useState } from "react";
import { MapPin, User, Phone, Mail, Camera, CheckCircle2, Sparkles } from "lucide-react";

export default function BasicInfoSection() {
  const [profileImage, setProfileImage] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200/60 rounded-3xl p-6 md:p-8 mb-6 shadow-2xl shadow-slate-300/40 overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-700" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative">
        {/* Premium Header with Badge */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-1.5 h-10 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 rounded-full shadow-lg shadow-emerald-500/30" />
              <div className="absolute inset-0 w-1.5 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full blur-sm" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent flex items-center gap-2">
                Basic Information
                <Sparkles className="text-amber-500 animate-pulse" size={20} />
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Complete your profile to stand out</p>
            </div>
          </div>
          
          {/* Completion Badge */}
          <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-full px-4 py-2 shadow-sm">
            <CheckCircle2 className="text-emerald-600" size={16} />
            <span className="text-xs font-semibold text-emerald-700">90% Complete</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative group">
              {/* Profile Circle */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-1 shadow-2xl shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-105">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-100 to-white overflow-hidden flex items-center justify-center">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <User className="text-slate-400" size={48} />
                  )}
                </div>
                
                {/* Upload Overlay */}
                <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <div className="text-center">
                    <Camera className="text-white mx-auto mb-1" size={24} />
                    <span className="text-white text-xs font-medium">Upload</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              
              {/* Verified Badge */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 border-4 border-white">
                <CheckCircle2 className="text-white" size={18} />
              </div>
            </div>
            
            <p className="text-xs text-slate-500 mt-3 text-center lg:text-left">
              Max size: 5MB
              <br />
              JPG, PNG, GIF
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="relative group md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-2.5 ml-1 uppercase tracking-wide">
                Full Name
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'name' ? 'scale-110' : ''}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center">
                    <User className={`transition-colors duration-300 ${focusedField === 'name' ? 'text-emerald-600' : 'text-slate-500'}`} size={18} />
                  </div>
                </div>
                <input
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="border-2 border-slate-200 rounded-2xl pl-16 pr-4 py-4 w-full
                           bg-white/70 backdrop-blur-sm text-sm font-medium text-slate-900
                           focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 
                           focus:outline-none focus:bg-white transition-all duration-300
                           hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50
                           placeholder:text-slate-400"
                  placeholder="Enter your full name"
                  defaultValue="Ramesh Kumar"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="relative group md:col-span-1">
              <label className="block text-xs font-bold text-slate-700 mb-2.5 ml-1 uppercase tracking-wide">
                Phone Number
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'phone' ? 'scale-110' : ''}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <Phone className={`transition-colors duration-300 ${focusedField === 'phone' ? 'text-blue-600' : 'text-slate-500'}`} size={18} />
                  </div>
                </div>
                <input
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className="border-2 border-slate-200 rounded-2xl pl-16 pr-4 py-4 w-full
                           bg-white/70 backdrop-blur-sm text-sm font-medium text-slate-900
                           focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 
                           focus:outline-none focus:bg-white transition-all duration-300
                           hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50
                           placeholder:text-slate-400"
                  placeholder="+91 XXXXX XXXXX"
                  defaultValue="+91 9876543210"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="relative group md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-2.5 ml-1 uppercase tracking-wide">
                Email Address
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'email' ? 'scale-110' : ''}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <Mail className={`transition-colors duration-300 ${focusedField === 'email' ? 'text-purple-600' : 'text-slate-500'}`} size={18} />
                  </div>
                </div>
                <input
                  type="email"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="border-2 border-slate-200 rounded-2xl pl-16 pr-4 py-4 w-full
                           bg-white/70 backdrop-blur-sm text-sm font-medium text-slate-900
                           focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 
                           focus:outline-none focus:bg-white transition-all duration-300
                           hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50
                           placeholder:text-slate-400"
                  placeholder="your.email@example.com"
                  defaultValue="ramesh.kumar@example.com"
                />
              </div>
            </div>

            {/* Location */}
            <div className="relative group md:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-2.5 ml-1 uppercase tracking-wide">
                Location
              </label>
              <div className="relative">
                <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${focusedField === 'location' ? 'scale-110 rotate-12' : ''}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <MapPin className="text-white" size={18} />
                  </div>
                </div>
                <input
                  onFocus={() => setFocusedField('location')}
                  onBlur={() => setFocusedField(null)}
                  className="border-2 border-slate-200 rounded-2xl pl-16 pr-4 py-4 w-full
                           bg-white/70 backdrop-blur-sm text-sm font-medium text-slate-900
                           focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 
                           focus:outline-none focus:bg-white transition-all duration-300
                           hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50
                           placeholder:text-slate-400"
                  placeholder="City, State"
                  defaultValue="Ranchi, Jharkhand"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="group relative px-8 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-semibold rounded-2xl shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <CheckCircle2 size={18} />
              Save Changes
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}