import React, { useState } from "react";
import { Save, CheckCircle } from "lucide-react";

export default function ProfileHeader() {
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setSaved(false);
    
    // Simulate save operation
    setTimeout(() => {
      setIsSaving(false);
      setSaved(true);
      
      // Reset saved state after 2 seconds
      setTimeout(() => setSaved(false), 2000);
    }, 800);
  };

  return (
    <div className="flex items-center justify-between mb-6 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow-sm border border-green-100">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
          My Profile
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Manage your guide profile and credentials
        </p>
      </div>
      <button 
        onClick={handleSave}
        disabled={isSaving || saved}
        className={`
          flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium
          transition-all duration-300 shadow-md hover:shadow-lg
          ${saved 
            ? 'bg-green-500 text-white' 
            : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
          }
          ${isSaving ? 'opacity-75 cursor-wait' : ''}
          disabled:cursor-not-allowed
        `}
      >
        {saved ? (
          <>
            <CheckCircle size={16} className="animate-bounce" /> Saved!
          </>
        ) : (
          <>
            <Save size={16} className={isSaving ? 'animate-pulse' : ''} />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </>
        )}
      </button>
    </div>
  );
}