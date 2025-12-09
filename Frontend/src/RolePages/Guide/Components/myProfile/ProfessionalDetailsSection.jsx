import React, { useState } from "react";
import { Briefcase, Languages, MapPin, Award, Plus, X, Sparkles, TrendingUp, Globe, Camera, Mountain, Waves, Users } from "lucide-react";

export default function ProfessionalDetailsSection() {
  const [languages, setLanguages] = useState(["Hindi", "English", "Santhali", "Mundari"]);
  const [specializations, setSpecializations] = useState(["Trekking", "Waterfall Tours", "Tribal Culture", "Photography Tours"]);
  const [showLanguageInput, setShowLanguageInput] = useState(false);
  const [showSpecInput, setShowSpecInput] = useState(false);
  const [newLanguage, setNewLanguage] = useState("");
  const [newSpec, setNewSpec] = useState("");
  const [hoveredTag, setHoveredTag] = useState(null);

  const addLanguage = () => {
    if (newLanguage.trim() && !languages.includes(newLanguage.trim())) {
      setLanguages([...languages, newLanguage.trim()]);
      setNewLanguage("");
      setShowLanguageInput(false);
    }
  };

  const removeLanguage = (lang) => {
    setLanguages(languages.filter(l => l !== lang));
  };

  const addSpecialization = () => {
    if (newSpec.trim() && !specializations.includes(newSpec.trim())) {
      setSpecializations([...specializations, newSpec.trim()]);
      setNewSpec("");
      setShowSpecInput(false);
    }
  };

  const removeSpecialization = (spec) => {
    setSpecializations(specializations.filter(s => s !== spec));
  };

  const specializationIcons = {
    "Trekking": Mountain,
    "Waterfall Tours": Waves,
    "Tribal Culture": Users,
    "Photography Tours": Camera
  };

  const getSpecIcon = (spec) => {
    const Icon = specializationIcons[spec] || Award;
    return Icon;
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-green-50/30 border border-slate-200/60 rounded-3xl p-6 md:p-8 mb-6 shadow-2xl shadow-slate-300/40 overflow-hidden">
      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-400/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-700" />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-lime-400/5 to-green-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative">
        {/* Premium Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/30 transform hover:rotate-6 transition-transform duration-300">
                <Briefcase className="text-white" size={28} />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
                <Sparkles className="text-white" size={12} />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
                Professional Details
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">Showcase your expertise and skills</p>
            </div>
          </div>
          
          {/* Experience Badge */}
          <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 rounded-full px-4 py-2 shadow-sm">
            <TrendingUp className="text-green-600" size={16} />
            <span className="text-xs font-semibold text-green-700">Expert Level</span>
          </div>
        </div>

        {/* Experience & Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Years of Experience */}
          <div className="group relative">
            <label className="block text-xs font-bold text-slate-700 mb-3 ml-1 uppercase tracking-wide flex items-center gap-2">
              <TrendingUp size={14} className="text-green-600" />
              Years of Experience
            </label>
            <div className="relative">
              <select className="appearance-none border-2 border-slate-200 rounded-2xl px-5 py-4 w-full
                               bg-white/70 backdrop-blur-sm text-sm font-semibold text-slate-900
                               focus:border-green-500 focus:ring-4 focus:ring-green-500/20 
                               focus:outline-none focus:bg-white transition-all duration-300
                               hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50
                               cursor-pointer">
                <option>5–10 years</option>
                <option>10–15 years</option>
                <option>15–20 years</option>
                <option>20+ years</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Guide Type */}
          <div className="group relative">
            <label className="block text-xs font-bold text-slate-700 mb-3 ml-1 uppercase tracking-wide flex items-center gap-2">
              <Briefcase size={14} className="text-teal-600" />
              Guide Type
            </label>
            <div className="relative">
              <select className="appearance-none border-2 border-slate-200 rounded-2xl px-5 py-4 w-full
                               bg-white/70 backdrop-blur-sm text-sm font-semibold text-slate-900
                               focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 
                               focus:outline-none focus:bg-white transition-all duration-300
                               hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50
                               cursor-pointer">
                <option>Trekking Guide</option>
                <option>City Tour Guide</option>
                <option>Adventure Guide</option>
                <option>Heritage Guide</option>
                <option>Wildlife Guide</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mb-8 p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl border-2 border-blue-100/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Languages size={16} className="text-white" />
              </div>
              Languages Spoken
            </h3>
            <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              {languages.length} languages
            </span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, idx) => (
              <div
                key={lang}
                onMouseEnter={() => setHoveredTag(`lang-${idx}`)}
                onMouseLeave={() => setHoveredTag(null)}
                className="group/tag relative bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Globe size={14} />
                {lang}
                <button
                  onClick={() => removeLanguage(lang)}
                  className="ml-1 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 hover:bg-white/20 rounded-full p-0.5"
                >
                  <X size={14} />
                </button>
                {hoveredTag === `lang-${idx}` && (
                  <div className="absolute inset-0 bg-white/20 rounded-xl animate-ping" />
                )}
              </div>
            ))}
            
            {showLanguageInput ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
                  placeholder="Language name"
                  className="border-2 border-blue-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  autoFocus
                />
                <button
                  onClick={addLanguage}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    setShowLanguageInput(false);
                    setNewLanguage("");
                  }}
                  className="bg-slate-200 text-slate-700 px-3 py-2 rounded-xl text-sm hover:bg-slate-300 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLanguageInput(true)}
                className="border-2 border-dashed border-blue-300 hover:border-blue-500 bg-white/50 hover:bg-blue-50 rounded-xl px-4 py-2.5 text-sm font-semibold text-blue-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Plus size={14} />
                Add Language
              </button>
            )}
          </div>
        </div>

        {/* Specializations Section */}
        <div className="mb-8 p-6 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-2xl border-2 border-emerald-100/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Award size={16} className="text-white" />
              </div>
              Specializations
            </h3>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              {specializations.length} skills
            </span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {specializations.map((spec, idx) => {
              const SpecIcon = getSpecIcon(spec);
              return (
                <div
                  key={spec}
                  onMouseEnter={() => setHoveredTag(`spec-${idx}`)}
                  onMouseLeave={() => setHoveredTag(null)}
                  className="group/tag relative bg-gradient-to-br from-emerald-500 to-teal-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <SpecIcon size={14} />
                  {spec}
                  <button
                    onClick={() => removeSpecialization(spec)}
                    className="ml-1 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 hover:bg-white/20 rounded-full p-0.5"
                  >
                    <X size={14} />
                  </button>
                  {hoveredTag === `spec-${idx}` && (
                    <div className="absolute inset-0 bg-white/20 rounded-xl animate-ping" />
                  )}
                </div>
              );
            })}
            
            {showSpecInput ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newSpec}
                  onChange={(e) => setNewSpec(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addSpecialization()}
                  placeholder="Specialization"
                  className="border-2 border-emerald-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  autoFocus
                />
                <button
                  onClick={addSpecialization}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    setShowSpecInput(false);
                    setNewSpec("");
                  }}
                  className="bg-slate-200 text-slate-700 px-3 py-2 rounded-xl text-sm hover:bg-slate-300 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSpecInput(true)}
                className="border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-white/50 hover:bg-emerald-50 rounded-xl px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Plus size={14} />
                Add Specialization
              </button>
            )}
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="p-6 bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-2xl border-2 border-orange-100/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
                <MapPin size={16} className="text-white" />
              </div>
              Service Areas
            </h3>
            <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Globe size={12} />
              Coverage zones
            </span>
          </div>
          
          <div className="relative group">
            <textarea
              className="border-2 border-orange-200 rounded-xl w-full p-4 text-sm leading-relaxed
                       bg-white/70 backdrop-blur-sm font-medium text-slate-900
                       focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 
                       focus:outline-none focus:bg-white transition-all duration-300
                       hover:border-orange-300 hover:shadow-lg hover:shadow-orange-200/50
                       resize-none"
              rows={4}
              placeholder="List your service areas (cities, regions, landmarks)..."
              defaultValue="Ranchi, Netarhat, Betla National Park, Hundru Falls, Tagore Hill, Jonha Falls, Dassam Falls, McCluskieganj"
            />
            <div className="absolute bottom-3 right-3 text-xs text-slate-400 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg">
              {`Ranchi, Netarhat, Betla National Park, Hundru Falls, Tagore Hill, Jonha Falls, Dassam Falls, McCluskieganj`.split(',').length} locations
            </div>
          </div>
          
          <p className="text-xs text-slate-500 mt-3 flex items-center gap-2">
            <MapPin size={12} className="text-orange-600" />
            Separate multiple locations with commas
          </p>
        </div>

        {/* Professional Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200/50">
            <div className="text-2xl font-bold text-green-700">{languages.length}</div>
            <div className="text-xs text-slate-600 font-medium">Languages</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
            <div className="text-2xl font-bold text-blue-700">{specializations.length}</div>
            <div className="text-xs text-slate-600 font-medium">Specializations</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200/50">
            <div className="text-2xl font-bold text-orange-700">8</div>
            <div className="text-xs text-slate-600 font-medium">Service Areas</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200/50">
            <div className="text-2xl font-bold text-purple-700">98%</div>
            <div className="text-xs text-slate-600 font-medium">Profile Complete</div>
          </div>
        </div>
      </div>
    </div>
  );
}