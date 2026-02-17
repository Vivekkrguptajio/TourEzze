import React, { useState, useRef } from "react";
import { Camera, Upload, X, Check } from "lucide-react";

export default function ProfilePhotoSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setUploading(true);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setTimeout(() => {
          setImagePreview(reader.result);
          setUploading(false);
        }, 1000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 border-2 border-green-100 rounded-2xl p-8 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-300/10 to-emerald-300/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            Profile Photo
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
            Premium
          </span>
        </div>
        
        <div className="flex items-center gap-8">
          {/* Profile Photo Container */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Main photo circle */}
              <div className={`
                relative w-28 h-28 rounded-full flex items-center justify-center text-2xl font-bold
                transition-all duration-300 border-4 border-white shadow-xl
                ${imagePreview 
                  ? 'bg-gray-200' 
                  : 'bg-gradient-to-br from-green-400 to-emerald-500 text-white'
                }
                ${uploading ? 'animate-pulse' : ''}
              `}>
                {uploading ? (
                  <div className="animate-spin">
                    <Upload size={32} />
                  </div>
                ) : imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  'RK'
                )}
                
                {/* Hover overlay */}
                <div className={`
                  absolute inset-0 bg-black/50 rounded-full flex items-center justify-center
                  transition-opacity duration-300
                  ${isHovered && !uploading ? 'opacity-100' : 'opacity-0'}
                `}>
                  <Camera size={24} className="text-white" />
                </div>
              </div>
              
              {/* Status badge */}
              {imagePreview && !uploading && (
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-bounce">
                  <Check size={16} className="text-white" />
                </div>
              )}
            </div>
          </div>
          
          {/* Photo Info and Actions */}
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-1">
                Upload a professional photo
              </p>
              <p className="text-xs text-gray-500">
                JPG, PNG or GIF • Max 5MB • Recommended 400x400px
              </p>
            </div>
            
            <div className="flex gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              <button 
                onClick={triggerFileInput}
                disabled={uploading}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Upload size={16} />
                {imagePreview ? 'Change Photo' : 'Upload Photo'}
              </button>
              
              {imagePreview && !uploading && (
                <button 
                  onClick={handleRemovePhoto}
                  className="flex items-center gap-2 px-5 py-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 border border-red-200 font-medium"
                >
                  <X size={16} />
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}