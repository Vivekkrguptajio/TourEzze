
import React from "react";

export default function AboutSection() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 rounded-2xl p-8 mb-6 shadow-lg shadow-slate-200/50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 rounded-full blur-2xl" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
          <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        
        <div className="space-y-3">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700 mb-2 block">
              Your Story
            </span>
            <div className="relative group">
              <textarea
                className="border-2 border-slate-200 rounded-xl w-full p-4 text-sm leading-relaxed
                         bg-white/50 backdrop-blur-sm
                         focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 
                         focus:outline-none transition-all duration-200
                         hover:border-slate-300 hover:shadow-md
                         resize-none"
                rows={6}
                defaultValue={`I am a certified trekking guide with 8 years of experience exploring the beautiful landscapes of Jharkhand. Born and raised in Ranchi, I have deep knowledge of local tribal culture, wildlife, and hidden gems of the region. My passion is to share the rich heritage and natural beauty of Jharkhand with travelers from around the world.`}
              />
              <div className="absolute bottom-3 right-3 text-xs text-slate-400 pointer-events-none">
                {`I am a certified trekking guide with 8 years of experience exploring the beautiful landscapes of Jharkhand. Born and raised in Ranchi, I have deep knowledge of local tribal culture, wildlife, and hidden gems of the region. My passion is to share the rich heritage and natural beauty of Jharkhand with travelers from around the world.`.length} characters
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}